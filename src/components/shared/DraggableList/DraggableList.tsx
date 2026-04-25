"use client";
import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit3, ExternalLink, GripVertical, Trash2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import StatusToggle from '@/components/shared/StatusToggle/StatusToggle';

import { Project } from '@/services/projectService';

interface DraggableListProps {
  items: Project[];
  onReorder: (items: Project[]) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number, currentStatus: boolean) => void;
  onEdit: (item: Project) => void;
}

const SortableItem = ({ item, onDelete, onToggleStatus, onEdit }: { 
  item: Project; 
  onDelete: (id: number) => void; 
  onToggleStatus: (id: number, currentStatus: boolean) => void;
  onEdit: (item: Project) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id! });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 0,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group flex items-center gap-3 md:gap-6 p-3 md:p-4 rounded-2xl border border-transparent mb-2 ${
        isDragging 
          ? 'bg-white shadow-2xl border-zinc-200 cursor-grabbing z-50' 
          : 'transition-all duration-200 hover:bg-zinc-50/80 hover:border-zinc-100'
      } ${
        !item.is_active && !isDragging ? 'opacity-60 grayscale-[0.5]' : ''
      }`}
    >
      <button
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-1.5 md:p-2 text-zinc-300 hover:text-zinc-500 transition-colors shrink-0"
      >
        <GripVertical size={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" />
      </button>

      <div className="w-14 h-9 md:w-20 md:h-12 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 border border-zinc-100 shadow-sm relative shrink-0">
        {item.image_src ? (
          <Image 
            src={item.image_src} 
            alt={item.title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 56px, 80px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[7px] md:text-[8px] text-zinc-400 font-black uppercase tracking-tighter">No Image</div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center cursor-pointer" onClick={() => onEdit(item)}>
        <div className="flex items-center gap-1.5 md:gap-2 mb-0.5">
          <h3 className={`font-bold text-zinc-900 truncate text-xs md:text-sm tracking-tight ${!item.is_active ? 'text-zinc-500' : ''}`}>
            {item.title}
          </h3>
          {item.is_active && (
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[9px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-1 md:gap-1.5 truncate">
            {item.tech_stack.slice(0, 2).map((tech, i) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {i < Math.min(item.tech_stack.length, 2) - 1 && <span className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-zinc-200"></span>}
              </React.Fragment>
            ))}
            {item.tech_stack.length > 2 && <span className="text-zinc-300">+{item.tech_stack.length - 2}</span>}
          </p>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(item);
          }}
          className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
          title="Edit Project"
        >
          <Edit3 size={16} />
        </button>
        {item.project_link && (
          <a
            href={item.project_link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all"
            title="View Live"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div className="hidden md:block h-8 w-px bg-zinc-100 mx-1"></div>

      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <div className="hidden xs:flex flex-col items-end mr-1">
          <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${item.is_active ? 'text-green-500' : 'text-zinc-400'}`}>
            {item.is_active ? 'Live' : 'Hidden'}
          </span>
        </div>
        <StatusToggle 
          isActive={item.is_active} 
          onToggle={() => onToggleStatus(item.id!, item.is_active)} 
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item.id!);
          }}
          className="p-1.5 md:p-2 text-zinc-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          title="Delete Project"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

const DraggableList: React.FC<DraggableListProps> = ({ items, onReorder, onDelete, onToggleStatus, onEdit }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      onReorder(newItems);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((i) => i.id!)}
        strategy={verticalListSortingStrategy}
      >
        <div className="w-full space-y-1">
          {items.map((item) => (
            <SortableItem 
              key={item.id} 
              item={item} 
              onDelete={onDelete} 
              onToggleStatus={onToggleStatus}
              onEdit={onEdit}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableList;
