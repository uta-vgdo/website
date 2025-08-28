import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shoutoutnna from "/assets/shoutoutnna.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const OfficerProfile = ({
  name = "Marcos Slater",
  role = "President",
  skills = [
    { name: "Programming", rating: 8 },
    { name: "Programming", rating: 8 },
    { name: "Programming", rating: 8 },
    { name: "Programming", rating: 8 },
  ],
}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Blue top div */}
      <div className="bg-blue-500 rounded-2xl w-64 h-64 border-white border-2 z-10 flex items-center justify-center text-white text-xl font-bold">
        <img src={shoutoutnna} className="rounded-2xl"></img>
      </div>

      {/* Gray card */}
      <div className="bg-gray-700 rounded-2xl w-96 h-110 border-white border-2 -mt-32 p-6 text-center">
        <div className="mb-28 text-white font-bold text-xl"></div>
        {name}
        <br></br>
        {role}
        <p className="text-left my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet
          non.
        </p>
        {/* Skills as 3-column row */}
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2">
              {/* Name on the left */}
              <div className="text-white text-sm w-24 text-left">
                {skill.name}
              </div>

              {/* Skill bar in the middle */}
              <div className="flex-1 bg-gray-500 rounded-full h-4 relative">
                <div
                  className="bg-amber-300 h-4 rounded-full"
                  style={{ width: `${(skill.rating / 10) * 100}%` }}
                ></div>
              </div>

              {/* Rating on the right */}
              <div className="text-white text-sm w-8 text-right">
                {skill.rating}/10
              </div>
            </div>
          ))}
        </div>
        <div className="text-white mt-5 flex justify-center">
          <a
            href="https://www.linkedin.com/nnannaejim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl"></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/nnannaejim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl"></FontAwesomeIcon>
          </a>{" "}
          <a
            href="https://www.linkedin.com/nnannaejim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfficerProfile;
