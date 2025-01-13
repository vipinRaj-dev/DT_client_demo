
import BoxContent from "./Components/BoxContent";
import { detailedLogPage } from "./Constants";
import Button from "./Components/ui/Button";
import { IoArrowBack } from "react-icons/io5";
import { getHourlyLogCounts } from "./utils/hourlyLogCount";
import CustomeBarChart, { HourlyLogCount } from "./Components/CustomeBarChart";

// import CustomeBarChart from "./Components/CustomeBarChart";
// import { HourlyLogCount } from "./Components/CustomeBarChart";

const DetailedLogCluster: React.FC = () => {
  const navigateBack = () => {
    window.history.back();
  };

  const hourlyLogCounts = getHourlyLogCounts(
    detailedLogPage.detailedLogCluster
  );

  const hourlyLogArray: HourlyLogCount[] = Object.entries(hourlyLogCounts)
    .map(([hour, count]) => ({
      hour: Number(hour),
      count: Number(count),
    }))
    .sort((a, b) => a.hour - b.hour);

  return (
    <>
      {/* <NavBar /> */}
      <div className=" p-5 h-screen">
        <div className="relative">
          <Button
            content="Back"
            type="reset"
            variant="back"
            onClick={navigateBack}
            icon={<IoArrowBack />}
            iconPosition="left"
            size="small"
          />
          <div className="flex gap-5 ">
            <div className="w-2/6 space-y-8 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-LightTealBackground">
              {detailedLogPage.summary.map((summary, index) => {
                const [title, content] = Object.entries(summary)[0];
                return (
                  <BoxContent key={index} title={title} content={content} />
                );
              })}
            </div>
            <div className="w-4/6  ">
              {/* time filter */}

              {/* <div className="flex  bg-DarkTealBackground text-white p-1 rounded-xl w-1/3 absolute right-3 top-3 ">
                {Object.keys(timelineDurations).map((timeline) => (
                  <div
                    key={timeline}
                    className={`flex w-[20%] h-[100%] justify-center items-center cursor-pointer ${
                      activeTimeline === timeline
                        ? "text-[#0097ac] bg-[#D7E0E3] rounded-[1vh]"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveTimeline(timeline as Timeline);
                    }}
                  >
                    {timeline}
                  </div>
                ))}
              </div> */}

              <div className="w-4/6">
                <CustomeBarChart chartData={hourlyLogArray} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[80%] mx-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-LightTealBackground ">
          <table className="table table-md ">
            <thead className="sticky top-0 bg-slate-200">
              <tr className="text-center">
                <th>Host Name</th>
                <th>Process</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {detailedLogPage.detailedLogCluster.map((info) => (
                <tr className="hover:bg-slate-200 ">
                  <td className="border-y-2 ">{info.hostname}</td>
                  <td className="border-y-2 ">{info.process}</td>
                  <td className="border-y-2">{info.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailedLogCluster;
