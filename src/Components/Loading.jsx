// src/components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-cyan-500 text-lg mt-4 absolute bottom-10">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
