import {
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfficerProfile = ({
  name = "Marcos Slater",
  role = "President",
  picture = "",
  skills = [
    { name: "Programming", rating: 8 },
    { name: "Design", rating: 7 },
    { name: "Leadership", rating: 9 },
  ],
  socials = {}, // Example: { linkedin: "url", github: "url", instagram: "url", website: "url" }
}) => {
  // Mapping social names to icons
  const socialIcons = {
    linkedin: faLinkedin,
    github: faGithub,
    instagram: faInstagram,
    website: faGlobe,
    itchio: faItchIo,
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Blue top div */}
      <div className="bg-blue-500 rounded-2xl w-64 h-64 border-white border-2 z-10 flex items-center justify-center text-white text-xl font-bold">
        <img src={picture} className="rounded-2xl" />
      </div>

      {/* Gray card */}
      <div className="bg-gray-700 rounded-2xl w-96 h-auto border-white border-2 -mt-32 p-6 text-center">
        <div className="p-14"></div>
        <div className=" text-white font-bold text-xl">
          {name} <br /> {role}
        </div>

        <p className="text-left my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet
          non.
        </p>

        {/* Skills */}
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2">
              <div className="text-white text-sm w-24 text-left">
                {skill.name}
              </div>
              <div className="flex-1 bg-gray-500 rounded-full h-4 relative">
                <div
                  className="bg-amber-300 h-4 rounded-full"
                  style={{ width: `${(skill.rating / 10) * 100}%` }}
                ></div>
              </div>
              <div className="text-white text-sm w-8 text-right">
                {skill.rating}/10
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="text-white mt-5 flex justify-center gap-4">
          {Object.entries(socials).map(([key, url]) => {
            if (!url) return null; // skip if empty
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <FontAwesomeIcon icon={socialIcons[key]} size="2xl" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfficerProfile;
