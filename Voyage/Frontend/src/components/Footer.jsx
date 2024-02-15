

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 md:mt-8">
      <div className="flex flex-col text-white">
        <p>Featured Blogs</p>
        <p>Most Viewed</p>
        <p>Readers Choic</p>
     </div>
 
     <div className="flex flex-col text-white">
        <p>Forum</p>
        <p>Support</p>
        <p>Recent Posts</p>
     </div>

     <div className="flex flex-col text-white">
        <p>Privacy Policy</p>
        <p>About us</p>
        <p>Terms and Conditions</p>
        <p>Terms and Service</p>
     </div>

    </div>
    <p className="py-2 pb-2 text-center text-white bg-black">All rights reserved @Voyage</p>
 </>
  )
}

export default Footer