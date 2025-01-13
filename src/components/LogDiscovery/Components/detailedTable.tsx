import React, { useState } from 'react';

type Event = {
    timestamp: string;
    hostname: string;
    process: string;
    message: string;
    [key: string]: any;
    update_status: string; // Ensure this property is included
};

type LogTableProps = {
    events: Event[];
    onRowClick: (process: string) => void;
    onAskAI: (event: Event) => void; // Updated to accept the full Event object
};

const LogTable: React.FC<LogTableProps> = ({ events, onRowClick, onAskAI }) => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof Event; direction: 'ascending' | 'descending' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(events.length / itemsPerPage);
    const [selectedMessage, setSelectedMessage] = useState<Event | null>(null);

    const getSortedEvents = (events: Event[]) => {
        if (sortConfig !== null) {
            return [...events].sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue == null && bValue == null) return 0;
                if (aValue == null) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (bValue == null) return sortConfig.direction === 'ascending' ? 1 : -1;

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return events;
    };

    const getPaginatedEvents = (events: Event[]) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return events.slice(startIndex, startIndex + itemsPerPage);
    };

    const sortedEvents = React.useMemo(() => getSortedEvents(events), [events, sortConfig]);
    const paginatedEvents = React.useMemo(() => getPaginatedEvents(sortedEvents), [sortedEvents, currentPage]);

    const handleSort = (key: keyof Event) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const page = Math.max(1, Math.min(totalPages, parseInt(event.target.value) || 1));
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col">
            <div className="h-[70vh] overflow-y-auto">
                <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-[#D7E0E3] border-b sticky top-0 z-10">
                            <th onClick={() => handleSort('timestamp')} className="py-3 px-4 text-left text-gray-800 cursor-pointer select-none">
                                Timestamp {sortConfig?.key === 'timestamp' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                            </th>
                            <th onClick={() => handleSort('hostname')} className="py-3 px-4 text-left text-gray-800 cursor-pointer select-none">
                                Hostname {sortConfig?.key === 'hostname' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                            </th>
                            <th onClick={() => handleSort('process')} className="py-3 px-4 text-left text-gray-800 cursor-pointer select-none">
                                Process {sortConfig?.key === 'process' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                            </th>
                            <th onClick={() => handleSort('level')} className="py-3 px-4 text-left text-gray-800 cursor-pointer select-none">
                                Level {sortConfig?.key === 'level' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                            </th>
                            <th onClick={() => handleSort('message')} className="py-3 px-4 text-left text-gray-800 cursor-pointer select-none">
                                Message {sortConfig?.key === 'message' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                            </th>
                            {/* New column for the Ask AI button */}
                            <th className="py-3 px-4 text-left text-gray-800">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedEvents.map((event, index) => (
                            <tr
                                key={index}
                                className={`border-b hover:bg-gray-100 cursor-pointer ${selectedMessage?.message === event.message ? 'bg-gray-200' : ''}`}
                                onClick={() => {
                                    onRowClick(event.process);
                                    setSelectedMessage(event); // Set selected event
                                    console.log('Clicked message:', event); // Log the message here
                                }}
                            >
                                <td className="py-2 px-4">{event.timestamp}</td>
                                <td className="py-2 px-4">{event.hostname}</td>
                                <td className="py-2 px-4">{event.process}</td>
                                <td className="py-2 px-4">{event.level}</td>
                                <td className="py-2 px-4">{event.message}</td>
                                {/* Render the Ask AI button only for the selected row */}
                                <td className="py-2 px-4">
                                    {selectedMessage?.message === event.message && (
                                        <button
                                            onClick={() => onAskAI(selectedMessage)} // Pass the selected event
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Ask AI
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300'}`}
                >
                    Previous
                </button>
                <div className='flex w-[20vw] items-center justify-between'>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="page-input" className="text-gray-700">
                            Go to page:
                        </label>
                        <input
                            id="page-input"
                            type="number"
                            min="1"
                            max={totalPages}
                            value={currentPage}
                            onChange={handlePageChange}
                            className="w-16 px-2 py-1 text-center border border-gray-300 rounded"
                        />
                    </div>
                    <span className="text-gray-700">
                        Page {currentPage} of {totalPages}
                    </span>
                </div>
                <button
                    onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-gray-200 rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LogTable;
