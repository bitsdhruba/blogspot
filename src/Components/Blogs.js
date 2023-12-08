import React from 'react'

function Blogs({blog}) {
  return (
    <div className='border-solid border-black shadow-md h-full max-w-[60%] m-auto my-5 p-5 bg-neutral-200'>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <p>By <span>{blog.author}</span> on <span>{blog.category}</span></p>
        <p>Posted on <span>{blog.date}</span></p>
        <div>
          {
            blog.tags.map((tag, index) => {
              return <span key={index}>#{tag}</span>
            })
          }
        </div>
    </div>
  )
}

export default Blogs;