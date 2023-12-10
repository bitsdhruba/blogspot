import React from 'react'
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const MainUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

    const [blogs, setBlogs] = useState([]);
    const [page, setPage] =useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchBlog (page, tag=null, category){

        let url = `${MainUrl}?page=${page}`;
        if(tag){
            url = `${url}&tag=${tag}`;
        }
        if(category){
            url = `${url}&category=${category}`;
        }

        try {
            const res = await fetch(url);
            const response = await res.json();
            setBlogs(response?.posts);
            setPage(response?.page);
            setTotalPages(response?.totalPages);
        } catch (error) {
            console.log("something went wrong sorry !")
        }

    };

    function changeHandler(page){
        
        navigate({search : `?page=${page}`});
        setPage(page);

    };

    const value = {
        blogs,
        setBlogs,
        page,
        setPage,
        totalPages,
        setTotalPages,
        changeHandler,
        fetchBlog,
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}
