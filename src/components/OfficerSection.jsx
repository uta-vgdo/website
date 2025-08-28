import OfficerProfile from "./OfficerProfile";
import { useEffect, useRef } from "react";

const OfficerSection = () => {
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <p className="text-white text-5xl text-center pt-24 font-bold">
        2025-2026 Officer Board!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-24">
        <OfficerProfile />
        <OfficerProfile />
        <OfficerProfile />
      </div>
    </div>
  );
};

export default OfficerSection;
