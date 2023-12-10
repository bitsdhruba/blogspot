import React from 'react'
import Blogs from '../Components/Blogs'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../Components/Pagination';

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
      <Pagination />
    </div>
  );
}

export default Category
