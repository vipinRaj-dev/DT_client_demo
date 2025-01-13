import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register chart.js components
Chart.register(...registerables);

interface LogEntry {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
}
 
interface BarChartProps {
  logs: LogEntry[];
  activeTimeline: string;
}

const BarChart: React.FC<BarChartProps> = ({ logs, activeTimeline }) => {
  const chartRef = useRef<Chart<'bar'>>(null);

  // Helper function to parse the timeline into milliseconds
  const parseTimeline = (timeline: string): number => {
    const timeMap: { [key: string]: number } = {
      "1m": 60 * 1000,
      "5m": 5 * 60 * 1000,
      "30m": 30 * 60 * 1000,
      "1hr": 60 * 60 * 1000,
      "4hr": 4 * 60 * 60 * 1000,
      "1D": 24 * 60 * 60 * 1000,
    };
    return timeMap[timeline] || 60 * 1000; // Default to 1 minute
  };

  // Function to fix the timestamp format
  const fixTimestampFormat = (timestamp: string): string => {
    return timestamp.replace(/\s*:\s*/g, ':');
  };

  // Parse logs timestamps into Date objects after fixing the format
  const logsWithDate = logs.map((log) => ({
    ...log,
    date: new Date(fixTimestampFormat(log.timestamp)),
  }));

  // Sort logs by date in ascending order
  logsWithDate.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Get the start time of the earliest log
  const startTime = logsWithDate[0]?.date || new Date();
  const timelineMs = parseTimeline(activeTimeline);

  // Group logs by the active timeline interval
  const groupedLogs = logsWithDate.reduce((acc, log) => {
    const timeGroup = Math.floor((log.date.getTime() - startTime.getTime()) / timelineMs);
    if (!acc[timeGroup]) acc[timeGroup] = [];
    acc[timeGroup].push(log);
    return acc;
  }, {} as { [key: number]: LogEntry[] });

  // Generate labels and values for the chart
  const labels: string[] = [];
  const values: number[] = [];

  Object.keys(groupedLogs).forEach((key) => {
    const groupStart = new Date(startTime.getTime() + parseInt(key) * timelineMs);
    labels.push(groupStart.toLocaleString()); // Show full date and time
    values.push(groupedLogs[parseInt(key)].length);
  });

  // Sort labels and values based on values (ascending order)
  const sortedData = labels.map((label, index) => ({
    label,
    value: values[index],
  })).sort((a, b) => a.value - b.value);

  const sortedLabels = sortedData.map((item) => item.label);
  const sortedValues = sortedData.map((item) => item.value);

  const chartData = {
    labels: sortedLabels,
    datasets: [
      {
        label: `Logs for ${activeTimeline}`,
        data: sortedValues,
        backgroundColor: '#0097ac',
        borderRadius: 10,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [logs, activeTimeline]);

  return (
    <div style={{ width: '49vw', height: '37vh' }}>
      <Bar
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: (context) => `Count: ${context.raw}`,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date and Time', // Display title for x-axis
              },
            },
            y: {
              title: {
                display: true,
                text: 'Log Count', // Display title for y-axis
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
