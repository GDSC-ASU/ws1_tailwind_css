import React from "react";


function Blog({ imgLink, blogDesc, blogTitle }) {
  return (
    <div>
      <div className="bg-white hover:shadow-lg h-full">
        <img className="h-[240px] w-full" src={imgLink} alt="Blog Post" />
        <div className="p-[20px]">
          <h2 className="text-xl font-bold text-gray-800">{blogTitle}</h2>
          <p className="mt-[10px] text-gray-600">{blogDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
