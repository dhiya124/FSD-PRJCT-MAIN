import React, { useContext, useEffect, useState } from "react";
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";
import {URL} from "../url"

const PostDetails = () => {
  const { id: postId } = useParams(); // Define postId using useParams()
  const [post, setPost] = useState({});
  const {user}=useContext(UserContext)
  console.log(user)

  const URL ="http://localhost:5000/api/posts" 
  

  const fetchPost = async () => {
    
    try {
      const res = await axios.get("http://localhost:5000/api/posts"+postId); // Use postId in the URL
      setPost(res.data);
      
    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
          {user?._id===post?.userId  && <div className="flex items-center justify-center space-x-2">
            <p><BiEdit /></p>
            <p><MdDelete /></p>
          </div>}
          
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <img src={post.photo} className="w-full mx-auto mt-8" alt="" />
        <p className="mx-auto mt-8">{post.desc}</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center space-x-2">
            {post.categories?.map(({c,i})=>(
              <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>


            ))}
            
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* Render comments here */}
        </div>
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;

