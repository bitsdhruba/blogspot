import { useContext } from "react";
import Blogs from "../Components/Blogs";
import { AppContext } from "../Context/AppContext";


function Home() {
  
  const {blogs} = useContext(AppContext);
  
  return (
    <div>
      {
        blogs.map((blog)=>{
          return <Blogs blog = {blog} key={blog.id}/>
        })
      }
    </div>
  )
}

export default Home;
