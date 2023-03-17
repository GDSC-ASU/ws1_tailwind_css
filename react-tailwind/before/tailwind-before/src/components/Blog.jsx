import React from 'react'
import "../styles/Blog.css"

function Blog({ imgLink, blogDesc, blogTitle }) {
    return (
        <div className="blog">
            <img src={imgLink} alt="Blog Post" class="blog-img" />
            <div className="blog-info">
                <h2 className="blog-title">{blogTitle}</h2>
                <p>
                    {blogDesc}
                </p>
            </div>
        </div>
    )
}

export default Blog