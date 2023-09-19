import React from "react";

function EventResourceCard({ event }) {
  return (
    <div className="card">
      
      <h2>{event.title}</h2>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {event.image && (
      <img 
      src={event.image} 
      style={{ width: 300, height: 300 }}
      />
      )}
      </div>

      <p><h3>{event.album}</h3></p>
      <p>{event.description}</p>
      
      <p>Streams: {event.streams}</p>
      
    </div>
  );
}

export default EventResourceCard;
