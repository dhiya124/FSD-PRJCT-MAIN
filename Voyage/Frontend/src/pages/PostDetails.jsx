
import { Comment } from "postcss"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'



const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl"> Top 10 Places in Manali To Visit</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>
                </div>

            </div>
            <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@dhiyamathew</p>
          <div className="flex space-x-2">
            <p>11/01/2024</p>
            <p>11:11</p>

          </div>

            </div>
            <img src="https://www.indiatravelpage.com/wp-content/uploads/2018/12/Manali-Manali-2.jpg" className="w-full mx-auto mt-8" alt=""/>
            <p className="mx-auto mt-8">Manali is a popular hill station nestled in the Indian state of Himachal Pradesh. Known for its breathtaking landscapes, snow-capped mountains, and adventure activities, Manali attracts a diverse range of tourists throughout the year. Here are some key places and attractions in and around Manali:Solang Valley,Rohtang Pass,Hidimba Devi Temple,Manu Temple,Old Manali,Nehru Kund,Beas River,Great Himalayan National Park,Jogini Falls,Vashisht Hot Water Springs</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories</p>
                <div className="flex justify-center space-x-2">
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Travel</div>
                    {/* <div className="bg-gray-300 rounded-lg px-3 py-1"></div> */}

                </div>

            </div>
            <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
               
                   
            </div>
            {/* write a comment */}
            <div className="w-full flex flex-col mt-4 md:flex-row">
                <input type="text" placeholder="write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
                <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails