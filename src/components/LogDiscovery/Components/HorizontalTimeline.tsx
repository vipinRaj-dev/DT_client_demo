import React from 'react';

type Event = Record<string, any>;

interface HorizontalTimelineProps {
  events: Event[];
}

const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({ events }) => {
  // Convert 't' field to Date objects (or use timestamp if 't' is missing)
  const timestamps = events.map(event => event.t ? new Date(event.t).getTime() : new Date(event.timestamp).getTime());

  // Normalize timestamps to calculate position percentages
  const minTime = Math.min(...timestamps);
  const maxTime = Math.max(...timestamps);

  return (
    <div className="relative flex flex-col items-center w-full mt-10">
      {/* Timeline Line */}
      <div className="relative w-full h-1 bg-gray-300">
        {events.map((event, index) => {
          const positionPercent = ((timestamps[index] - minTime) / (maxTime - minTime)) * 100;
          let colorClass = '';

          // Highlight "error" level logs in red
          switch (event.level) {
            case 'error':
              colorClass = 'bg-red-500 animate-pulse'; // Add 'animate-pulse' for blinking effect
              break;
            case 'warn':
              colorClass = 'bg-yellow-500';
              break;
            case 'info':
              colorClass = 'bg-blue-500';
              break;
            default:
              colorClass = 'bg-gray-400';
          }

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center"
              style={{ left: `${positionPercent}%`, transform: 'translateX(-50%)' }}
            >
              <div className={`w-4 h-4 rounded-full ${colorClass} cursor-pointer group relative -translate-y-1/2`}>
                {/* Tooltip */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-700 text-white text-xs rounded-md p-2 z-10">
                  <div><strong>Timestamp:</strong> {event.timestamp}</div>
                  <div><strong>Process:</strong> {event.process}</div>
                  <div><strong>Level:</strong> {event.level}</div>
                  <div><strong>Message:</strong> {event.message}</div>
                  <div><strong>Hostname:</strong> {event.hostname}</div>
                  <div><strong>Microsecond Timestamp:</strong> {event.t}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* X-Axis Labels */}
      <div className="relative w-full flex justify-between text-xs text-gray-700 mt-2">
        {events.map((event, index) => {
          const positionPercent = ((timestamps[index] - minTime) / (maxTime - minTime)) * 100;
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2"
              style={{ left: `${positionPercent}%` }}
            >
              {new Date(event.t || event.timestamp).toISOString().split('T')[1]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
