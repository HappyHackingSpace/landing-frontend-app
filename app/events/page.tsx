"use client";
import * as React from "react";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import { getAllEvents } from "@hhs/lib/kommunity";
import Link from "next/link";
import Subtitle from "@hhs/components/custom/subtitle";
import { Button } from "@hhs/components/shadcn/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@hhs/components/shadcn/tabs";

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"upcoming" | "past">(
    "upcoming"
  );
  const [events, setEvents] = React.useState<{
    upcoming: EventDataProps[];
    past: EventDataProps[];
  }>({
    upcoming: [],
    past: [],
  });
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  React.useEffect(() => {
    getAllEvents(activeTab, currentPage).then((data: EventsProps) => {
      if (data) {
        setEvents((prev) => ({
          ...prev,
          [activeTab]: data.data || [], // Set data to events state
        }));
        setTotalPages(data.total ? Math.ceil(data.total / data.per_page) : 1); // Set total pages
      }
    });
  }, [activeTab, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <LandingLayoutView>
      <Subtitle>List of our events</Subtitle>
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger
            value="upcoming"
            onClick={() => {
              setActiveTab("upcoming");
              setCurrentPage(1);
            }}
          >
            Upcoming Events
          </TabsTrigger>
          <TabsTrigger
            value="past"
            onClick={() => {
              setActiveTab("past");
              setCurrentPage(1);
            }}
          >
            Past Events
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {events.upcoming.length > 0 ? (
            events.upcoming.map((event, index) => (
              <Link key={index} href={`/events/${event.slug}`} legacyBehavior>
                <a>
                  <div className="flex items-center space-x-4 mb-4 hover:bg-gray-100 p-4 rounded-lg transition-all hover:text-primary">
                    <div>
                      <h2 className="font-semibold">{event.name}</h2>
                      <p>{event.start_date_humanity.date}</p>
                      <p>{event.venue.address}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          ) : (
            <p>No upcoming events found.</p>
          )}
        </TabsContent>
        <TabsContent value="past">
          {events.past.map((event, index) => (
            <Link key={index} href={`/events/${event.slug}`} legacyBehavior>
              <a>
                <div className="flex items-center space-x-4 mb-4 hover:bg-gray-100 p-4 rounded-lg transition-all hover:text-primary">
                  <div>
                    <h2 className="font-semibold">{event.name}</h2>
                    <p>{event.start_date_humanity.date}</p>
                    <p>{event.venue.address}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </TabsContent>
      </Tabs>
      
      {totalPages > 1 && (
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>
            Page {currentPage} of {isNaN(totalPages) ? "N/A" : totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </LandingLayoutView>
  );
};

export default EventsPage;