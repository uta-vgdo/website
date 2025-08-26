import { MusicArtist } from "./MusicArtist";

export const MusicSection = () => {
  return (
    <div className="min-h-screen text-center text-white">
      VGDO Soundtracks Showcase
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-start">
        <MusicArtist
          title="cavity."
          creator="orijinl - 1st Place Drifting Away Jam Winner"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="cavity."
          creator="orijinl - 1st Place Drifting Away Jam Winner"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="cavity."
          creator="orijinl - 1st Place Drifting Away Jam Winner"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
          ]}
        ></MusicArtist>
      </div>
    </div>
  );
};
