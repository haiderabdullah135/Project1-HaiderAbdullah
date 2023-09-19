import React from "react";
import EventResourceCard from "./EventResourceCard";
import { eventsAndResources } from "../data";

function CommunityBoard() {
  return (
    <div className="community-board">
      {eventsAndResources.map((event) => (
        <EventResourceCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default CommunityBoard;
