import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";
import axios from "axios";
import { URL } from "../url";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader"
import { UserContext } from "../UserContext";

const Home = () => {

  const {search}=useLocation()
  console.log(search)
  const [posts, setPosts] = useState([]);
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  console.log(user)
  
  // Assuming you have defined URL somewhere
  const URL ="http://localhost:5000/api/posts" 

  const fetchPosts = async () => {
    setLoader(true)
    try {
      const res = await axios.get("http://localhost:5000/api/posts/"+search);
      setPosts(res.data);
      if(res.data.length===0){
        setNoResults(true)
      }
      setLoader(false)


    } catch (err) {
      console.error("Error fetching posts:", err);
      setLoader(false)
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:posts.length === 0 ? (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        ) : (
          posts.map((post) => (
            <>
            <Link to={user?'/posts/post/${post._id}':"/login"}>
            <HomePost key={post._id} post={post} />
            </Link>
            </>
            
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
