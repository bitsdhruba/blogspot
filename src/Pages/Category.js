import React from 'react'
import Blogs from '../Components/Blogs'
import { useLocation, useNavigate } from 'react-router-dom'

function Category() {

  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  
  return (
    <div>
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <div>
        <p>
          Blogs on <span>{category}</span>
        </p>
        <Blogs />
      </div>
    </div>
  );
}

export default Category
