import React, { useEffect, useState } from 'react';
import BlogDetail from '../Components/BlogDetail';
import { useLocation } from 'react-router-dom';
import Pagination from '../Components/Pagination';

function BlogPage() {
  
  const url = "https://codehelp-apis.vercel.app/api/get-blog";

  const [blog, setBlog] = useState(null);
  const [relatedBlogs , setRelatedBlogs] = useState([]);

  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlog (){

    let blogUrl = `${url}?blogId=${blogId}`;

    try {
      const res = await fetch(blogUrl);
      const response = await res.json();
      setBlog(response.blog);
      setRelatedBlogs(response.relatedBlogs);
    } catch (error) {
      console.log("Congratulation an unknown feature dicovered.", error)
    };
  }

  useEffect(()=>{
    if(blogId){
    fetchRelatedBlog();
    }
  },[location.pathname]);
  
  return (
    <div>
      <div>
        {blog ? (
            <div>
              <BlogDetail blog={blog} />
              <h1>Related Blogs</h1>
              {relatedBlogs.map((blog) => {
                return <BlogDetail blog={blog} key={blog.id} />;
              })}
            </div>
        ) : (
          <div>
            <p>No Blogs Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
