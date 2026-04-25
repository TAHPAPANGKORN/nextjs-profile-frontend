"use client";
import React, { useState } from 'react';
import ImageUpload from '@/components/admin/ImageUpload';
import { Project } from '@/services/projectService';
import { Save, X, PlusCircle, LayoutGrid, Link as LinkIcon, Code, Info, Sparkles } from 'lucide-react';

interface ProjectFormWidgetProps {
  initialData?: Project | null;
  onSubmit: (data: Project) => void;
  onCancel: () => void;
}

const ProjectFormWidget: React.FC<ProjectFormWidgetProps> = ({ initialData, onSubmit, onCancel }) => {
  const DEFAULT_IMAGE = "https://bmkebleqcsqdeenjbgcz.supabase.co/storage/v1/object/public/project-images/ComingSoon-image.jpg";
  
  const [formData, setFormData] = useState<Project>(initialData || {
    title: '',
    description: '',
    project_link: '',
    repo_link: '',
    backend_repo_link: '',
    image_src: '',
    tech_stack: [],
    sort_order: 0,
    is_active: true,
  });

  const [techInput, setTechInput] = useState(initialData?.tech_stack.join(', ') || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const techArray = techInput.split(',').map(t => t.trim()).filter(t => t !== '');
    const finalData = { 
      ...formData, 
      tech_stack: techArray,
      image_src: formData.image_src || DEFAULT_IMAGE
    };
    onSubmit(finalData);
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-zinc-100 premium-shadow max-w-5xl mx-auto">
      <div className="bg-zinc-900 p-8 text-white flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 translate-x-12 -translate-y-6">
          <Sparkles size={120} />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-black flex items-center gap-3 tracking-tight">
            <div className="bg-white/10 p-2 rounded-xl">
              <PlusCircle size={24} className="text-blue-400" />
            </div>
            {initialData ? 'Edit Project' : 'Create New Project'}
          </h2>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-2 ml-12">Project Metadata & Assets</p>
        </div>
        <button onClick={onCancel} className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleFormSubmit} className="p-8 md:p-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Image & Basic Info */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block ml-1">Project Visual</label>
              <ImageUpload 
                currentImage={formData.image_src} 
                onUploadSuccess={(url) => setFormData(prev => ({ ...prev, image_src: url }))} 
              />
              <p className="text-[10px] text-zinc-400 text-center italic mt-2">Recommended: 1600x900px high-quality preview</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block ml-1">Project Identity</label>
                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 focus-within:border-blue-500 focus-within:bg-white transition-all shadow-sm group">
                  <LayoutGrid size={20} className="text-zinc-300 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleChange}
                    placeholder="e.g. AI Content Generator"
                    className="bg-transparent w-full outline-none font-bold text-zinc-800 placeholder:text-zinc-300 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block ml-1">Narrative</label>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  placeholder="Describe the problem this project solves..."
                  className="w-full p-5 bg-zinc-50 rounded-2xl border border-zinc-100 focus-within:border-blue-500 focus-within:bg-white transition-all outline-none text-zinc-800 placeholder:text-zinc-300 h-40 resize-none shadow-sm text-sm font-medium leading-relaxed"
                  required
                />
              </div>
            </div>
          </div>

          {/* Right Column: Links & Tech */}
          <div className="md:col-span-7 space-y-10">
            <div className="space-y-6">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-2">Deployment & Repositories</p>
              
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block ml-1">Production URL</label>
                  <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 focus-within:border-blue-500 focus-within:bg-white transition-all group">
                    <LinkIcon size={18} className="text-zinc-300 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="url"
                      name="project_link"
                      value={formData.project_link || ''}
                      onChange={handleChange}
                      placeholder="https://your-project.vercel.app"
                      className="bg-transparent w-full outline-none text-zinc-700 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block ml-1">Frontend Repo</label>
                    <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 focus-within:border-blue-500 focus-within:bg-white transition-all group">
                      <Code size={18} className="text-zinc-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="url"
                        name="repo_link"
                        value={formData.repo_link || ''}
                        onChange={handleChange}
                        placeholder="GitHub URL"
                        className="bg-transparent w-full outline-none text-zinc-700 text-sm font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block ml-1">Backend Repo</label>
                    <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 focus-within:border-blue-500 focus-within:bg-white transition-all group">
                      <Code size={18} className="text-zinc-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="url"
                        name="backend_repo_link"
                        value={formData.backend_repo_link || ''}
                        onChange={handleChange}
                        placeholder="Optional"
                        className="bg-transparent w-full outline-none text-zinc-700 text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block ml-1 flex items-center gap-2">
                  Technology Stack
                  <div className="group relative">
                    <Info size={14} className="cursor-help text-zinc-300" />
                    <div className="absolute bottom-full left-0 mb-3 w-56 p-3 bg-zinc-900 text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50 premium-shadow">
                      List technologies separated by commas. These will be automatically parsed into badges.
                    </div>
                  </div>
                </label>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="React, Tailwind, Supabase, Node.js..."
                  className="w-full p-4 bg-zinc-50 rounded-2xl border border-zinc-100 focus-within:border-blue-500 focus-within:bg-white transition-all outline-none text-zinc-800 placeholder:text-zinc-300 font-mono text-xs shadow-sm"
                  required
                />
              </div>
            </div>
            
            <div className="flex gap-4 pt-10">
               <button
                type="button"
                onClick={onCancel}
                className="flex-1 py-4 px-6 rounded-2xl font-bold text-zinc-500 hover:bg-zinc-50 transition-colors border border-zinc-100"
              >
                Discard
              </button>
              <button
                type="submit"
                className="flex-[2] py-4 px-6 rounded-2xl font-black text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Save size={20} />
                {initialData ? 'Commit Changes' : 'Publish Project'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectFormWidget;
