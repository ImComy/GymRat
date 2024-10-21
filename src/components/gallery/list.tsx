import React from 'react';
import EventCard from './card';

const events = [
  { date: '2024-10-25', year: 2024 },
  { date: '2024-10-23', year: 2024 },
  { date: '2024-10-21', year: 2024 },
  { date: '2024-10-15', year: 2024 },
  { date: '2024-09-05', year: 2024 },
  { date: '2024-08-20', year: 2024 },
  { date: '2024-06-15', year: 2024 },
  { date: '2023-10-20', year: 2023 },
  { date: '2023-06-10', year: 2023 },
  { date: '2023-05-15', year: 2023 },
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const day = date.getDate();
  const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';

  return `${formattedDate}${suffix}`;
};

const groupEventsByTimeRange = (events: Array<{ date: string; year: number }>) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDayNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const groupedEvents: Record<string, Array<{ date: string; year: number }>> = {};

  events.forEach(event => {
    const eventDate = new Date(event.date);
    const timeDiff = eventDate.getTime() - today.getTime();

    let timeRange = '';

    if (timeDiff < 0 && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear) {
      timeRange = 'This Month';
    } else if (timeDiff < 0) {
      timeRange = 'Past Events';
    } else if (eventDate.toDateString() === today.toDateString()) {
      timeRange = 'Today';
    } else if (eventDate.getTime() < today.getTime() + 7 * 24 * 60 * 60 * 1000) {
      timeRange = 'This Week';
    } else if (eventDate.getTime() < firstDayNextMonth.getTime()) {
      timeRange = 'This Month';
    } else {
      timeRange = 'Upcoming Events';
    }

    if (!groupedEvents[timeRange]) {
      groupedEvents[timeRange] = [];
    }
    groupedEvents[timeRange].push(event);
  });

  return groupedEvents;
};

const sortedEvents = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const groupedEvents = groupEventsByTimeRange(sortedEvents);

const EventGallery: React.FC = () => {
  const orderedTimeRanges = ['Today', 'This Week', 'This Month', 'Past Events'];

  return (
    <div className="flex justify-center items-center p-4">
      <div className="max-w-screen-lg w-full">
        {orderedTimeRanges.map((timeRange) =>
          groupedEvents[timeRange] ? (
            <div key={timeRange} className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-black font-bold font-[Inter]">{timeRange}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedEvents[timeRange].map((event, index) => (
                  <EventCard key={index} date={formatDate(event.date)} year={event.year.toString()} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default EventGallery;
