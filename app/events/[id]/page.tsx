"use client";
import * as React from "react";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import { getEvent } from "@hhs/lib/kommunity";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import Subtitle from "@hhs/components/custom/subtitle";
import { Loader } from "@hhs/components/custom/loader";
import DOMPurify from "dompurify";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = React.useState<EventDataProps | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (id) {
      getEvent(id)
        .then((event) => setEvent(event.data))
        .catch((error) => {
          console.error(error);
          setError("Event not found or an error occurred.");
          
        });
    }
  }, [id]);

  if (error) return notFound()


  if (!event) return (
    <LandingLayoutView>
     <Loader/>
    </LandingLayoutView>
  );

  return (
    <LandingLayoutView>
      <Subtitle>Event: {event.name}</Subtitle>
      <Image
        src={event.highlight_photo}
        alt={event.name}
        width={800}
        height={400}
      />
      <div className="flex space-x-4 mb-8 mt-4">
        {event.venue && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(`${event.detail} Coordinates: <a href="https://www.google.com/maps/place/${event.venue.lat},${event.venue.lng}" target="_blank" alt="${event.name}">${event.venue.lat}, ${event.venue.lng}</a>`),
            }}
          />
        )}
      </div>
    </LandingLayoutView>
  );
};

export default EventDetailPage;