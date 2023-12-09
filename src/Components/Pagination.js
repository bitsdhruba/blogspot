import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

function Pagination() {
  
    const {page, totalPages, changeHandler} = useContext(AppContext);

    return (
      <>
        <div>
          <span>
            Page {page} of {totalPages}
          </span>
        </div>
        <div className="flex justify-evenly h-24">
          {page > 1 && (
            <button onClick={() => changeHandler(page - 1)}>Previous</button>
          )}
          {page < totalPages && (
            <button onClick={() => changeHandler(page + 1)}>Next</button>
          )}
        </div>
      </>
    );
}

export default Pagination
