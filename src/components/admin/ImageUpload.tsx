"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import ImageCropper from '@/components/shared/ImageCropper/ImageCropper';
import { getCroppedImg } from '@/utils/imageUtils';
import { Upload, X, CheckCircle2, Image as ImageIcon, RefreshCw } from 'lucide-react';

interface ImageUploadProps {
  onUploadSuccess: (url: string) => void;
  currentImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUploadSuccess, currentImage }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCropper, setShowCropper] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSelectedImage(reader.result as string);
        setShowCropper(true);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onCropComplete = async (pixelCrop: any) => {
    if (!selectedImage) return;
    
    try {
      setUploading(true);
      setShowCropper(false);
      
      const croppedImageBlob = await getCroppedImg(selectedImage, pixelCrop);
      const fileName = `project-${Date.now()}.jpg`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, croppedImageBlob);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      setPreview(data.publicUrl);
      onUploadSuccess(data.publicUrl);
    } catch (error: any) {
      alert('Error uploading: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className={`relative group overflow-hidden rounded-3xl border-2 border-dashed transition-all duration-300 aspect-video flex items-center justify-center ${
        preview ? 'border-transparent premium-shadow' : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100/50 hover:border-zinc-300'
      }`}>
        {preview ? (
          <>
            <img src={preview} alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
               <label className="cursor-pointer bg-white text-zinc-900 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <RefreshCw size={14} />
                Replace Asset
                <input type="file" className="hidden" accept="image/*" onChange={handleFileSelect} disabled={uploading} />
              </label>
            </div>
          </>
        ) : (
          <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-zinc-400 hover:text-blue-600 transition-colors group/label">
            <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center shadow-sm border border-zinc-100 group-hover/label:scale-110 group-hover/label:border-blue-100 transition-all duration-300">
              <Upload size={24} className="text-zinc-300 group-hover/label:text-blue-500 transition-colors" />
            </div>
            <div className="text-center">
              <span className="font-black text-xs uppercase tracking-widest block mb-1">Upload Cover</span>
              <span className="text-[10px] font-bold text-zinc-400 block">Drag and drop or click to browse</span>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handleFileSelect} disabled={uploading} />
          </label>
        )}
        
        {uploading && (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-10 animate-in fade-in duration-300">
            <div className="w-10 h-10 border-[3px] border-zinc-900 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 animate-pulse">Syncing to Storage...</p>
          </div>
        )}
      </div>

      {showCropper && selectedImage && (
        <ImageCropper 
          image={selectedImage} 
          onCropComplete={onCropComplete} 
          onCancel={() => setShowCropper(false)} 
        />
      )}
    </div>
  );
};

export default ImageUpload;
