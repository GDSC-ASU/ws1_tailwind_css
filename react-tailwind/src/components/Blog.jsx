import React from 'react'

function Blog({ imgLink, blogDesc }) {
    return <div>
        <div className="bg-white hover:shadow-lg">
            <img className="h-48 w-full"
                src={imgLink}
                alt="Blog Post" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">Tailwind CSS</h2>
                <p className="mt-2 text-gray-600">
                    {blogDesc}
                </p>
            </div>
        </div>
    </div>
}

export default Blog