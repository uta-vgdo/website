import MusicArtist from "./MusicArtist";

const MusicSection = () => {
  return (
    <div className="min-h-screen  text-white py-5">
      <div className=" text-5xl pb-4 text-tertiary font-bold">
        VGDO Soundtracks Showcase
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-start">
        <MusicArtist
          title="cavity."
          creator="orijinl - 1st Place Drifting Away Jam Winner"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/orijinl/sets/cavity-ost&visual=true",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="By fate, did we vanish?"
          creator="Ministy - 2nd Place Drifting Away Jam"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ministy-188403828/by-fate-did-we-vanish%3Fin%3Dvgdo-uta/sets/vgdo-music-jam-2024-drifting&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="On Hold"
          creator="Daniel Fielder - 3rd Place Drifting Away Jam"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/daniel-fielder-barrera&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="idon'tknow"
          creator="cryo"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cryo-813186043/sets/vgdo-fall-2024-music-jam-submissions&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="Fragments"
          creator="cents808"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kingvincev/sets/fragments&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="THE SMOKE DRIFTS AWAY"
          creator="lemon"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/oh-no-431200789/sets/as-the-smoke-drifts&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          ]}
        ></MusicArtist>

        <MusicArtist
          title="Race Thing"
          creator="Salslinger"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/race-thing&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          ]}
        ></MusicArtist>
      </div>
    </div>
  );
};

export default MusicSection;
