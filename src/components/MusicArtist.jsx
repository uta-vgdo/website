

export const MusicArtist = ({title, creator, soundcloud_links}) => {

     return ( 
        <div>
        <p>
            {title}
            <br></br>
            {creator}
        </p>

      {soundcloud_links.map((link, index) => (
        <div key={index} className="lg:w-220">
          <div className="flex justify-center">
            <iframe
              width="50%"
              height="166"
              allow="autoplay"
              src={link}
            />
          </div>
        </div>
      ))}
        </div>
    );
}

