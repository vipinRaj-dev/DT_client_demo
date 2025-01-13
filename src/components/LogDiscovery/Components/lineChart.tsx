import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';

interface LogEvent {
    timestamp: string;
    hostname: string;
    process: string;
    message: string;
    update_status: string;
}

interface LineChartProps {
    events: LogEvent[];
    activeTimeline: string;
}

const LineChart: React.FC<LineChartProps> = ({ events, activeTimeline }) => {

    console.log('events : ' , events ,'aactiveTimeline : ' , activeTimeline );
    
    const [chartData, setChartData] = useState<ChartData<'line'>>({ datasets: [] });

    useEffect(() => {
        // const currentTime = new Date().getTime();
        // const currentTime = new Date('2024-07-10T03:36:01').getTime();
        const currentTime = Date.now(); 
        console.log(`Current Time: ${new Date(currentTime).toLocaleString()}`); // Log current time
        let startTime: number;
        let interval: number;
        let timeFormatter: (date: Date) => string;

        // Determine the start time, interval size, and time formatter based on the active timeline
        switch (activeTimeline) {
            case '1m':
                startTime = currentTime - 1 * 60 * 1000; // 1 minute ago
                interval = 5 * 1000; // 5 seconds
                timeFormatter = (date) => `${date.getMinutes()}:${date.getSeconds()}`;
                break;
            case '5m':
                startTime = currentTime - 5 * 60 * 1000; // 5 minutes ago
                interval = 30 * 1000; // 30 seconds
                timeFormatter = (date) => `${date.getMinutes()}:${date.getSeconds()}`;
                break;
            case '30m':
                startTime = currentTime - 30 * 60 * 1000; // 30 minutes ago
                interval = 5 * 60 * 1000; // 5 minutes
                timeFormatter = (date) => `${date.getHours()}:${date.getMinutes()}`;
                break;
            case '1hr':
                startTime = currentTime - 60 * 60 * 1000; // 1 hour ago
                interval = 10 * 60 * 1000; // 10 minutes
                timeFormatter = (date) => `${date.getHours()}:${date.getMinutes()}`;
                break;
            case '4hr':
                startTime = currentTime - 4 * 60 * 60 * 1000; // 4 hours ago
                interval = 30 * 60 * 1000; // 30 minutes
                timeFormatter = (date) => `${date.getHours()}:${date.getMinutes()}`;
                break;
            case '1D':
                startTime = new Date(currentTime - 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0); // Start of yesterday
                interval = 2 * 60 * 60 * 1000; // 2 hours
                timeFormatter = (date) => `${date.getDate()}/${date.getMonth() + 1}`;
                break;
            case '30D':
                startTime = new Date(currentTime -30 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0); // Start of yesterday
                interval = 5 * 24 * 60 * 60 * 1000; // 2 hours
                timeFormatter = (date) => `${date.getDate()}/${date.getMonth() + 1}`;
                break;
            default:
                startTime = currentTime - 60 * 60 * 1000; // Default to 1 hour ago
                interval = 10 * 60 * 1000; // 10 minutes
                timeFormatter = (date) => `${date.getHours()}:${date.getMinutes()}`;
        }

        const intervalCounts: number[] = [];
        const intervalLabels: string[] = [];
        let currentIntervalTime = startTime;

        // Calculate the log counts for each interval
        while (currentIntervalTime <= currentTime) {
            const count = events.filter(event => {
                const eventTime = new Date(event.timestamp).getTime();
                return eventTime >= currentIntervalTime && eventTime < currentIntervalTime + interval;
            }).length;

            intervalCounts.push(count);
            intervalLabels.push(timeFormatter(new Date(currentIntervalTime)));
            currentIntervalTime += interval;
        }

        // Set the chart data with computed intervals and labels
        setChartData({
            labels: intervalLabels,
            datasets: [
                {
                    label: 'Log Count',
                    data: intervalCounts,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                },
            ],
        });
    }, [events, activeTimeline]);

    const options: ChartOptions<'line'> = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Log Count',
                },
                beginAtZero: true,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div style={{ height: '60vh', width: '100%' }}>
            <Line data={chartData} options={options} width={1000} />
        </div>
    );
};

export default LineChart;
