"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { projectService, Project } from '@/services/projectService';
import DraggableList from '@/components/shared/DraggableList/DraggableList';
import ProjectFormWidget from '@/components/admin/Dashboard/ProjectFormWidget';
import { 
  Plus, 
  LogOut, 
  LayoutGrid, 
  Settings, 
  ShieldCheck, 
  RefreshCw, 
  Briefcase, 
  BarChart3, 
  Users, 
  Search,
  Bell,
  Menu,
  X
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Projects');
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
    } else {
      setUser(session.user);
      loadData();
    }
  };

  const loadData = async () => {
    try {
      setRefreshing(true);
      const data = await projectService.getAll();
      setProjects(data);
    } catch (err: any) {
      alert('Error loading data: ' + err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleLogout = async () => {
    if (confirm('Are you sure you want to sign out?')) {
      await supabase.auth.signOut();
      router.push('/login');
    }
  };

  const handleReorder = async (newItems: any[]) => {
    const updatedWithOrder = newItems.map((item, index) => ({
      ...item,
      sort_order: index
    }));
    setProjects(updatedWithOrder);
    
    try {
      await projectService.updateSortOrder(
        updatedWithOrder.map(i => ({ id: i.id!, sort_order: i.sort_order }))
      );
    } catch (err: any) {
      alert('Error updating order: ' + err.message);
      loadData();
    }
  };

  const handleToggleStatus = async (id: number, currentStatus: boolean) => {
    try {
      await projectService.update(id, { is_active: !currentStatus });
      setProjects(prev => prev.map(p => p.id === id ? { ...p, is_active: !currentStatus } : p));
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await projectService.delete(id);
        setProjects(prev => prev.filter(p => p.id !== id));
      } catch (err: any) {
        alert('Error deleting: ' + err.message);
      }
    }
  };

  const handleFormSubmit = async (data: Project) => {
    try {
      if (editingProject?.id) {
        // Remove id from data to prevent "column id can only be updated to DEFAULT" error
        const { id, ...updateData } = data;
        await projectService.update(editingProject.id, updateData);
      } else {
        data.sort_order = projects.length;
        await projectService.create(data);
      }
      setShowForm(false);
      setEditingProject(null);
      loadData();
    } catch (err: any) {
      alert('Error saving: ' + err.message);
    }
  };

  const handleNavigation = (label: string) => {
    if (label === 'Projects') {
      setActiveTab('Projects');
      setShowForm(false);
    } else {
      alert(`${label} module is coming soon!`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
        <div className="w-12 h-12 border-4 border-zinc-900 border-t-transparent rounded-full animate-spin mb-6"></div>
        <div className="text-zinc-400 font-bold animate-pulse uppercase tracking-widest text-[10px]">Initializing AdminCore...</div>
      </div>
    );
  }

  const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
    <button 
      onClick={() => handleNavigation(label)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
        ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-200' 
        : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
    }`}>
      <Icon size={20} className={active ? 'text-blue-400' : 'group-hover:text-zinc-900'} />
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-blue-100 flex overflow-hidden">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[45] lg:hidden animate-in fade-in duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-zinc-100 transition-all duration-300 lg:translate-x-0 lg:static ${
        sidebarOpen ? 'translate-x-0 opacity-100 visible' : '-translate-x-full opacity-0 invisible lg:opacity-100 lg:visible'
      }`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-10 px-2">
            <div className="flex items-center gap-3">
              <div className="bg-zinc-900 p-2 rounded-xl text-white">
                <ShieldCheck size={22} className="text-blue-400" />
              </div>
              <h1 className="font-black text-lg tracking-tight leading-none">ADMIN<span className="text-blue-600">CORE</span></h1>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-zinc-400 hover:bg-zinc-50 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto pr-2 scrollbar-hide">
            <div className="px-2 mb-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 ml-1">General</p>
              <SidebarItem icon={BarChart3} label="Dashboard" active={activeTab === 'Dashboard'} />
              <SidebarItem icon={Briefcase} label="Projects" active={activeTab === 'Projects'} />
              <SidebarItem icon={Users} label="Clients" active={activeTab === 'Clients'} />
            </div>

            <div className="px-2 pt-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 ml-1">System</p>
              <SidebarItem icon={Settings} label="Settings" active={activeTab === 'Settings'} />
              <SidebarItem icon={LayoutGrid} label="Components" active={activeTab === 'Components'} />
            </div>
          </nav>

          <div className="mt-auto px-2 pt-6 border-t border-zinc-50">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-500 text-xs border border-zinc-200">
                    {user?.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate text-zinc-900 leading-tight">
                    {user?.email?.split('@')[0]}
                  </p>
                  <p className="text-[10px] text-zinc-400 font-medium truncate">Admin Account</p>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                title="Sign Out"
                className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between px-6 md:px-10 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 lg:hidden text-zinc-500 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative hidden md:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-zinc-50 border border-zinc-100 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/30 w-72 transition-all placeholder:text-zinc-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <button 
              onClick={loadData}
              disabled={refreshing}
              title="Refresh Data"
              className={`p-2.5 rounded-xl text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 transition-all ${refreshing ? 'animate-spin' : ''} border border-zinc-50`}
            >
              <RefreshCw size={18} />
            </button>
            <button 
              onClick={() => alert('Notifications module coming soon!')}
              className="p-2.5 rounded-xl text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 transition-all border border-zinc-50 relative"
            >
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white shadow-sm"></span>
            </button>
            <div className="h-8 w-px bg-zinc-100 mx-1"></div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus size={16} />
              <span className="hidden sm:inline">New Project</span>
            </button>
          </div>
        </header>

        {/* Dashboard Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10 scrollbar-hide">
          <div className="max-w-6xl mx-auto w-full animate-in fade-in duration-500">
            {showForm ? (
              <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500 pb-20">
                 <ProjectFormWidget 
                  initialData={editingProject}
                  onSubmit={handleFormSubmit}
                  onCancel={() => {
                    setShowForm(false);
                    setEditingProject(null);
                  }}
                />
              </div>
            ) : (
              <div className="space-y-6 md:space-y-10 pb-20">
                {/* Welcome Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mb-2">Project Gallery</h2>
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></span>
                      <p className="text-zinc-500 text-xs md:text-sm font-medium">Manage and organize your portfolio items</p>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 sm:flex gap-3 md:gap-4">
                    <div className="bg-white px-4 md:px-6 py-4 md:py-5 rounded-2xl md:rounded-[1.5rem] border border-zinc-100 premium-shadow flex flex-col min-w-0 sm:min-w-[150px] transition-transform hover:scale-[1.02]">
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1 md:mb-2">Total Items</span>
                      <div className="flex items-baseline gap-1.5 md:gap-2">
                        <span className="text-xl md:text-2xl font-black text-zinc-900">{projects.length}</span>
                        <span className="text-[9px] md:text-[10px] font-bold text-zinc-400">Inventory</span>
                      </div>
                    </div>
                    <div className="bg-white px-4 md:px-6 py-4 md:py-5 rounded-2xl md:rounded-[1.5rem] border border-zinc-100 premium-shadow flex flex-col min-w-0 sm:min-w-[150px] transition-transform hover:scale-[1.02]">
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1 md:mb-2">Published</span>
                      <div className="flex items-baseline gap-1.5 md:gap-2">
                        <span className="text-xl md:text-2xl font-black text-blue-600">
                          {projects.filter(p => p.is_active).length}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-bold text-zinc-400">Live Web</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* List Section */}
                <div className="w-full">
                  {projects.length > 0 ? (
                    <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-zinc-100 premium-shadow overflow-hidden">
                      <div className="px-5 md:px-8 py-4 md:py-5 border-b border-zinc-50 bg-zinc-50/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <LayoutGrid size={14} className="text-zinc-400 md:w-4 md:h-4" />
                          <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400">Active Repository</h3>
                        </div>
                        <div className="text-[9px] md:text-[10px] font-bold text-zinc-500 bg-white border border-zinc-100 px-2.5 py-1 rounded-full shadow-sm">
                          {projects.length} ITEMS
                        </div>
                      </div>
                      <div className="p-3 md:p-8">
                        <DraggableList 
                          items={projects} 
                          onReorder={handleReorder}
                          onDelete={handleDelete}
                          onToggleStatus={handleToggleStatus}
                          onEdit={(item) => {
                            setEditingProject(item);
                            setShowForm(true);
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-[2rem] border border-zinc-100 premium-shadow p-10 md:p-20 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-50 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center mb-6 md:mb-8 text-zinc-200 animate-float border border-zinc-100">
                        <LayoutGrid size={32} className="w-8 h-8 md:w-12 md:h-12" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-zinc-900 mb-2 md:mb-3 tracking-tight">Your gallery is empty</h3>
                      <p className="text-zinc-500 text-xs md:text-sm mb-8 md:mb-10 max-w-sm mx-auto leading-relaxed font-medium">Add your first project to begin showcasing your professional journey.</p>
                      <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-900 text-white font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl md:shadow-2xl shadow-zinc-200 hover:scale-[1.05]"
                      >
                        <Plus size={16} className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                        Add New Project
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
