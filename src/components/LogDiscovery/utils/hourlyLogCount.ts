import { DetailedLogInformation } from "../Constants";

export const getHourlyLogCounts = (logs: DetailedLogInformation[]) => {
  const hourlyCounts: { [key: string]: number } = {};

  console.log("logs : ", logs);

  logs.forEach((log) => {
    const hour = new Date(log.timestamp).getHours();
    if (hourlyCounts[hour]) {
      hourlyCounts[hour]++;
    } else {
      hourlyCounts[hour] = 1;
    }
  });

  return hourlyCounts;
};
