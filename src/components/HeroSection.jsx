const HeroSection = () => {
  return (
    <div className='min-h-screen bg-[#161F28]'>
      <div className='flex justify-center text-white text-5xl text-center mt-25'>
        Video Game Developers Organization at UTA
      </div>
      <div className='flex justify-center text-4xl text-red-500 my-5'>
        Welcome to VGDO!
      </div>

      <img
        src={"/website/assets/VGDOpanda.png"}
        width={512}
        className='mx-auto'
      ></img>

      <div className='flex justify-center text-4xl text-red-500 my-5'>
        Meetings: TBA
      </div>

      <div className='flex justify-center gap-5'>
        <button className='bg-blue-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-blue-500'>
          More Info
        </button>
        <button className='bg-blue-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-blue-500'>
          Join Now!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
