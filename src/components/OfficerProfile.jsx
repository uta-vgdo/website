import {
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      display: false, // 👈 hides the legend
    },
  },
  scales: {
    r: {
      suggestedMin: 0, // start at 0
      suggestedMax: 10, // max value
      ticks: {
        display: false,
        stepSize: 1, // interval between circles
      },
      pointLabels: {
        color: "white", // label color
        font: {
          size: 10, // label font size
          weight: "bold",
        },
      },
      grid: {
        color: "rgba(255,255,255,0.2)", // optional: faint grid
      },
    },
  },
};

const OfficerProfile = ({
  name = "Marcos Slater",
  role = "President",
  picture = "",
  description = "",
  programming_rating = 5,
  art_rating = 5,
  audio_rating = 5,
  design_rating = 5,
  narrative_rating = 5,
  production_rating = 5,
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

  const data = {
    labels: [
      "Programming",
      "Art and Animation",
      "Music and Sound",
      "Game Design",
      "Narrativity",
      "Game Production",
    ],
    datasets: [
      {
        label: "Proficiency",
        data: [
          programming_rating,
          art_rating,
          audio_rating,
          design_rating,
          narrative_rating,
          production_rating,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Blue top div */}
      <div className="bg-gray-800 rounded-xl w-72 h-72 border-white border-2 z-10 flex items-center justify-center text-white text-xl font-bold">
        <img
          src={picture}
          className="w-60 h-60 -mt-4 rounded-2xl [clip-path:polygon(0_0,100%_0,100%_100%,45px_100%,0_calc(100%-45px))]"
        />
      </div>

      {/* Gray card */}
      <div className="bg-gray-700 rounded-2xl w-96 h-auto border-white border-2 -mt-32 p-6 text-center">
        <div className="p-14"></div>
        <div className=" text-white font-bold text-xl">
          {name} <br /> {role}
        </div>

        <p className="text-left text-white">{description}</p>

        {/* Skills */}
        <Radar data={data} options={options} className="-my-12" />

        {/* Social links */}
        <div className="text-white flex justify-center gap-4">
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
