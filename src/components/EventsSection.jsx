import EventCard from "./EventCard";
import eventData from "../../constant/eventData.json";

const EventsSection = () => {
  return (
    <div id="event" className="lg:-scroll-m-80  text-white relative">
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          name={event.name}
          location={event.location}
          date={event.date}
          time={event.time}
          img_src={event.img_src}
        />
      ))}
    </div>
  );
};

export default EventsSection;
