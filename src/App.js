
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import './App.css';
import  Home  from "./Pages/Home";
import Nav from './Components/Nav';
import Pagination from './Components/Pagination';
import BlogPage from './Pages/BlogPage';
import Category from './Pages/Category';
import Tag from './Pages/Tag';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';

function App() {
  
  const {fetchBlog} = useContext(AppContext);
  const [searchParams, setSearchParams] =useSearchParams();
  const location = useLocation();

  useEffect(()=>{

    const page = searchParams.get('page') ?? 1 ;
    if(location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replaceAll("-", " ");
      fetchBlog(Number(page), tag);
    }
    if(location.pathname.includes('category')){
      const category = location.pathname.split('/').at(-1).replaceAll("-", " ");
      fetchBlog(Number(page),null, category);
    }
    else{
      fetchBlog(Number(page))
    }
  }, [location.pathname, location.search]);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogPage/:blogId" element={<BlogPage />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/tag/:tag" element={<Tag />} />
      </Routes>
      <footer>
        <Pagination />
      </footer>
    </div>
  );
}

export default App;
