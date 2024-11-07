"use client";
import { getAllEvents } from '@hhs/lib/kommunity';
import React, { useEffect, useState } from 'react';

interface Venue {
    id: string;
    name: string;
    address: string;
    lat: string;
    lng: string;
    is_zoom_active: boolean | null;
}

interface Event {
    id: string;
    name: string;
    detail: string;
    start_date: { date: string };
    end_date: { date: string };
    venue: Venue;
}

// Custom useMount hook
function useMount(callback: () => void) {
    useEffect(() => {
        callback();
    }, []);
}

interface IcalProps {
    className?: string;
}

const Ical: React.FC<IcalProps> = ({ className }) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Use the custom useMount hook to fetch events
    useMount(() => {
        getAllEvents('past')
            .then((data: { data: Event[] }) => {
                setEvents(data ? data.data : []);
                console.log(data);
            })
            .catch((err: Error) => {
                setError(err.message || 'Failed to fetch events');
                console.error(err);
            });
    });

    const generateICal = () => {
        let icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//HappyHackingSpace//HHS//EN
METHOD:PUBLISH
X-PUBLISHED-TTL:PT1H
`;

        events.forEach((event) => {
            icsContent += `
BEGIN:VEVENT
UID:${event.id}
SUMMARY:${event.name}
DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}
DTSTART:${event.start_date.date.replace(/[-:.]/g, '')}
DTEND:${event.end_date.date.replace(/[-:.]/g, '')}
LOCATION:${event.venue.name}, ${event.venue.address}
DESCRIPTION:${event.detail.replace(/<[^>]*>?/gm, '')}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT10M
DESCRIPTION:Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
`;
        });

        icsContent += 'END:VCALENDAR';

        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'events.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={className}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {events.length > 0 ? (
                <div>
                    <button onClick={generateICal} className='h-10 font-semibold px-2 border border-input bg-primary text-primary-foreground flex items-center justify-center'>Import events to Calendar</button>
                </div>
            ) : (
                <p>No past events found.</p>
            )}
        </div>
    );
};

export default Ical;
