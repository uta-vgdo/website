import FadeIn from "./FadeIn.jsx";

const EventCard = ({ name, location, date, time, img_src }) => {
  return (
    <FadeIn>
      <div className="text-center py-5 h-screen">
        <p className="text-primary text-center text-lg">
          {name}
          <br></br>
          {location}
          <br></br>
          {date}
          <br></br>
          {time}
        </p>
        <img
          src={img_src}
          className="items-center object-contain w-full max-h-[80vh]"
        ></img>
      </div>
    </FadeIn>
  );
};

export default EventCard;
