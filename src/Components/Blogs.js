import { useContext } from 'react';
import BlogDetail  from './BlogDetail';
import { AppContext } from '../Context/AppContext';

function Blogs(){
  
  const {blogs} = useContext(AppContext);
  
  return(
    <div>
      {
        blogs.map((blog)=>{
          return <BlogDetail blog={blog} key={blog.id}/>
        })
      }
    </div>
  );
}

export default Blogs;