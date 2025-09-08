import React, { useEffect } from "react";

const VideoModal = ({ onClose, src, title = "Video" }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-md px-4 py-2 transition cursor-pointer"
        >
          Close Video
        </button>
        <iframe
          className="w-full h-full"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;
