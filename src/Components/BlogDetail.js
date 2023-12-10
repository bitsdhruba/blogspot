import React from 'react';
import { Link } from 'react-router-dom';

function BlogDetail({ blog }) {
  return (
    <div className="border-solid border-black shadow-md h-full max-w-[60%] m-auto my-5 p-5 bg-neutral-200">
      <Link to={`/blogPage/${blog.id}`}>
        <h2>{blog.title}</h2>
      </Link>
      <p>{blog.content}</p>
      <p>
        By <span>{blog.author}</span> on{" "}
        <Link to={`/category/${blog.category.replaceAll(" ", "-")}`}>
          <span>{blog.category}</span>
        </Link>
      </p>
      <p>
        Posted on <span>{blog.date}</span>
      </p>
      <div>
        {blog.tags.map((tag, index) => {
          return (
            <Link to={`/tag/${tag.replaceAll(" ", "-")}`} key={index}>
              <span>#{tag}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogDetail;

