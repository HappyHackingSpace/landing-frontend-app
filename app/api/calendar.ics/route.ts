import { getAllEvents } from '@hhs/lib/kommunity';
import IcalCalendar, { ICalEventStatus, ICalAlarmType } from 'ical-generator';

interface Venue {
  id: string;
  name: string;
  address: string;
  lat: string;
  lng: string;
  is_zoom_active: boolean | null;
}

interface EventData {
  id: string;
  name: string;
  detail: string;
  start_date: { date: string };
  end_date: { date: string };
  venue: Venue;
}

export async function GET(req: Request): Promise<Response> {
  try {

    const past = await getAllEvents('past');
    const upcoming = await getAllEvents('upcoming');
    const data = [...past.data, ...upcoming.data];
    const events: EventData[] = data as EventData[];

    const calendar = IcalCalendar({
      prodId: { company: 'HappyHackingSpace', product: 'HHS', language: 'EN' },
      timezone: 'UTC',
    });

    // Add all events to calendar
    events.forEach((event) => {
      calendar.createEvent({
        start: new Date(event.start_date.date),
        end: new Date(event.end_date.date),
        summary: event.name,
        description: event.detail.replace(/<[^>]*>?/gm, ''),
        location: `${event.venue.name}, ${event.venue.address}`,
        status: ICalEventStatus.CONFIRMED,
        alarms: [
          {
            type: ICalAlarmType.display,
            trigger: 10 * 60, // 10 minutes before
            description: 'Reminder',
          },
        ],
      });
    });

    return new Response(calendar.toString(), {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="events.ics"',
      },
    });

  } catch (err) {
    console.error(err);
    return new Response('Failed to fetch events', {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
