

const ProfilePosts = () => {
  return(
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://www.indiatravelpage.com/wp-content/uploads/2018/12/Manali-Manali-2.jpg" alt="" className="h-full w-full object-cover"/>

      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Top 10 Places in Manali To Visit
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@dhiyamathew</p>
          <div className="flex space-x-2">
            <p>11/01/2024</p>
            <p>11:11</p>

          </div>

        </div>
        <p className="text-sm md:text-lg">Manali is a popular hill station nestled in the Indian state of Himachal Pradesh. Known for its breathtaking landscapes, snow-capped mountains, and adventure activities, Manali attracts a diverse range of tourists throughout the year. Here are some key places and attractions in and around Manali:Solang Valley,Rohtang Pass,Hidimba Devi Temple,Manu Temple,Old Manali,Nehru Kund,Beas River,Great Himalayan National Park,Jogini Falls,Vashisht Hot Water Springs</p>

      </div>

    </div>
  )
}

export default ProfilePosts