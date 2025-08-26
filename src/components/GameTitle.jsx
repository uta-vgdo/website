const GameTitle = ({ title, creator, video_src }) => {
  return (
    <div className='w-75 lg:w-100'>
      <p>
        {title}
        <br></br>
        {creator}
      </p>
      <video controls src={video_src}></video>
    </div>
  );
};

export default GameTitle;
