import { supabase } from '@/lib/supabase';

export interface Project {
  id?: number;
  title: string;
  description: string;
  project_link: string;
  repo_link: string;
  backend_repo_link?: string;
  image_src: string;
  tech_stack: string[];
  sort_order: number;
  is_active: boolean;
}

export const projectService = {
  async getAll() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) throw error;
    return data as Project[];
  },

  async getActive() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });
    if (error) throw error;
    return data as Project[];
  },

  async create(project: Project) {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select();
    if (error) throw error;
    return data[0] as Project;
  },

  async update(id: number, updates: Partial<Project>) {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0] as Project;
  },

  async delete(id: number) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async updateSortOrder(items: { id: number; sort_order: number }[]) {
    // Supabase doesn't have bulk update for different values in one go easily without RPC
    // For small number of projects, sequential updates are fine
    const promises = items.map(item => 
      supabase.from('projects').update({ sort_order: item.sort_order }).eq('id', item.id)
    );
    await Promise.all(promises);
  }
};
