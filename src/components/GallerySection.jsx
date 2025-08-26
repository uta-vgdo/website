import ArtPiece from "./ArtPiece";

const GallerySection = () => {
  return (
    <div className='min-h-screen text-center text-white'>
      VGDO Art Gallery
      <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center items-start'>
        <ArtPiece
          title='Elevator Going Down'
          creator='Jamie - 1st Place Between Worlds Jam Winner'
          img_src={"/website/assets/VGDOpanda.png"}
        ></ArtPiece>
        <ArtPiece
          title='Elevator Going Down'
          creator='Jamie - 1st Place Between Worlds Jam Winner'
          img_src={"/website/assets/VGDOpanda.png"}
        ></ArtPiece>
        <ArtPiece
          title='Elevator Going Down'
          creator='Jamie - 1st Place Between Worlds Jam Winner'
          img_src={"/website/assets/VGDOpanda.png"}
        ></ArtPiece>
        <ArtPiece
          title='Elevator Going Down'
          creator='Jamie - 1st Place Between Worlds Jam Winner'
          img_src={"/website/assets/VGDOpanda.png"}
        ></ArtPiece>
        <ArtPiece
          title='Elevator Going Down'
          creator='Jamie - 1st Place Between Worlds Jam Winner'
          img_src={"/website/assets/VGDOpanda.png"}
        ></ArtPiece>
      </div>
    </div>
  );
};
export default GallerySection;
