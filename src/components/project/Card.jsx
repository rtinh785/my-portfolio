import React from "react";

const Card = ({ img, title, desc, demo, source }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[390px]">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{desc}</p>
        <div className="flex items-center justify-between">
          <a
            href={demo}
            target={demo !== "#!" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="btn px-[1.2rem]"
          >
            Demo
          </a>
          <a
            href={source}
            target={demo !== "#!" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
