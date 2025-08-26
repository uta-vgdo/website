

export const GameTitle = ({title, creator, video_src}) => {

     return ( 
        <div className='w-100 lg:w-125'>
        <p>
            {title}
            <br></br>
            {creator}
        </p>
        <video controls src={video_src}></video>
        </div>
    );
}

