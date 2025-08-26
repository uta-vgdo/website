

export const ArtPiece = ({title, creator, img_src}) => {

     return ( 
        <div className='w-100 lg:w-125'>
        <p>
            {title}
            <br></br>
            {creator}
        </p>
        <img src={img_src}></img>
        </div>
    );
}

