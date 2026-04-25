"use client";
import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

interface ImageCropperProps {
  image: string;
  onCropComplete: (croppedAreaPixels: any) => void;
  onCancel: () => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ image, onCropComplete, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropChange = (crop: any) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom: any) => {
    setZoom(zoom);
  };

  const onCropCompleteInternal = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 p-4">
      <div className="relative flex-1 w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-gray-900">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={16 / 9}
          onCropChange={onCropChange}
          onCropComplete={onCropCompleteInternal}
          onZoomChange={onZoomChange}
        />
      </div>
      <div className="flex justify-center gap-4 py-4 mt-4 bg-white/10 rounded-xl">
        <button
          onClick={onCancel}
          className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => onCropComplete(croppedAreaPixels)}
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors font-bold"
        >
          Crop & Save
        </button>
      </div>
      <div className="flex flex-col items-center mt-2">
         <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-64 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <span className="text-white text-sm mt-1">Zoom</span>
      </div>
    </div>
  );
};

export default ImageCropper;
