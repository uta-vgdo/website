const ArtPiece = ({ title, creator, img_src }) => {
  return (
    <div className="h-72  text-center">
      <p>
        {title}
        <br></br>
        {creator}
      </p>
      <img
        src={img_src}
        className="w-full h-full object-contain bg-black/20 rounded-3xl"
      ></img>
    </div>
  );
};

export default ArtPiece;
