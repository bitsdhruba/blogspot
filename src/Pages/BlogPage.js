import React, { useEffect, useState } from 'react';
import BlogDetail from '../Components/BlogDetail';
import { useLocation } from 'react-router-dom';

function BlogPage() {
  
  const url = "https://codehelp-apis.vercel.app/api/get-blogs";

  const [blog, setBlog] = useState(null);
  const [relatedBlogs , setRelatedBlogs] = useState([]);

  const location = useLocation();
  const blogid = location.pathname.split("/").at(-1);

  async function fetchRelatedBlog (){

    let blogUrl = `${url}?blogid=${blogid}`;

    try {
      const res = await fetch(blogUrl);
      const response = await res.json();
      setBlog(response.blog);
      setRelatedBlogs(response.relatedBlogs);

      console.log("Printing the datas")
      console.log(response.relatedBlogs);
      console.log(response.blog);

    } catch (error) {
      console.log("Congratulation an unknown feature dicovered.", error)
    };
  }

  useEffect(()=>{
    if(blogid){
    fetchRelatedBlog();
    }
  },[location.pathname]);
  
  return (
    <div>
      <BlogDetail blog = {blog}/>
      <div>
        {
          blog ? (
            <div>
              {
                relatedBlogs.map((blog)=>{
                  return <BlogDetail blog = {blog}/>
                })
              }
            </div>
          ) : (
            <div>
              <p>
                No Blogs Found
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default BlogPage;
