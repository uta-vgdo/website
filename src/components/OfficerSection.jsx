import OfficerProfile from "./OfficerProfile";
import officersData from "../../constant//officerData.json";
import { useEffect, useRef } from "react";

const OfficerSection = () => {
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pb-12">
      <p className="text-white text-5xl text-center pt-24 font-bold">
        2025-2026 Officer Board!
      </p>
      <div className="flex flex-wrap justify-center gap-24 gap-y-4 mx-24">
        {officersData.map((officer, index) => (
          <OfficerProfile
            key={index}
            name={officer.name}
            picture={officer.picture}
            role={officer.role}
            skills={officer.skills}
            socials={officer.socials}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficerSection;
