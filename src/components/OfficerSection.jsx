import OfficerProfile from "./OfficerProfile";

const OfficerSection = () => {
  return (
    <div id="officers" className="scroll-mt-24">
      <p className="text-white text-5xl text-center mt-24 font-bold">
        2025-2026 Officer Board!
      </p>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 mx-24">
        <OfficerProfile></OfficerProfile>
        <OfficerProfile></OfficerProfile>
        <OfficerProfile></OfficerProfile>
      </div>
    </div>
  );
};

export default OfficerSection;
