const GameTitle = ({ title, creator, video_src }) => {
  return (
    <div className='w-75 lg:w-100 py-5'>
      <p className="text-primary text-center text-lg">
        {title}
        <br></br>
        {creator}
      </p>
      <video controls src={video_src}></video>
    </div>
  );
};

export default GameTitle;
