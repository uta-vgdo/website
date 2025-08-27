import MusicArtist from "./MusicArtist";

const MusicSection = () => {
  return (
    <div id="music" className="scroll-mt-24 min-h-screen text-white py-5">
      <div className="text-5xl pb-4 text-tertiary font-bold">
        VGDO Soundtracks Showcase
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-start">
        <MusicArtist
          title="cavity."
          creator="orijinl - 1st Place Drifting Away Jam Winner"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/orijinl/sets/cavity-ost&visual=true",
          ]}
        />

        <MusicArtist
          title="By fate, did we vanish?"
          creator="Ministy - 2nd Place Drifting Away Jam"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ministy-188403828/by-fate-did-we-vanish&visual=true",
          ]}
        />

        <MusicArtist
          title="On Hold"
          creator="Daniel Fielder - 3rd Place Drifting Away Jam"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/daniel-fielder-barrera&visual=true",
          ]}
        />

        <MusicArtist
          title="idon'tknow"
          creator="cryo"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cryo-813186043/sets/vgdo-fall-2024-music-jam-submissions&visual=true",
          ]}
        />

        <MusicArtist
          title="Fragments"
          creator="cents808"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kingvincev/sets/fragments&visual=true",
          ]}
        />

        <MusicArtist
          title="THE SMOKE DRIFTS AWAY"
          creator="lemon"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/oh-no-431200789/sets/as-the-smoke-drifts&visual=true",
          ]}
        />

        <MusicArtist
          title="Race Thing"
          creator="Salslinger"
          soundcloud_links={[
            "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/race-thing&visual=true",
          ]}
        />
      </div>
    </div>
  );
};

export default MusicSection;
