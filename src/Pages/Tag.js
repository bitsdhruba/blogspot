import React from 'react'
import Blogs from '../Components/Blogs';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../Components/Pagination';

function Tag() {
  
    const location = useLocation();
    const navigation = useNavigate();
    const tag = location.pathname.split("/").at(-1);
  
    return (
      <div>
        <div>
          <button onClick={() => navigation(-1)}>Back</button>
        </div>
        <div>
          <p>Blogs on <span>{tag}</span></p>
          <Blogs />
        </div>
        <Pagination/>
      </div>
    );
}

export default Tag;