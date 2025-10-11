import React from "react";

export default function ComicCard({ title, artist }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center">
      <div className="h-40 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-400">
        <span>Image Placeholder</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">by {artist}</p>
    </div>
  );
}
