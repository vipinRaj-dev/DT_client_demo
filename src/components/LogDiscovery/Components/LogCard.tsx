import containerImg from "../../../assets/logContainerImage.png"
import { LogEntry } from "../Constants";
import { useNavigate } from "react-router-dom";

interface LogCardProps {
  log: LogEntry;
}

const LogCard = ({ log }: LogCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detailedLog/${log.cluster}`)}
      className="flex space-x-3 bg-white w-[45%] rounded-lg p-2 mt-2 hover:cursor-pointer"
    >
      <div className=" w-1/6">
        <img src={containerImg} alt="containerImg" />
      </div>
      <div className="w-5/6">
        <h1>Cluster No : {log.cluster}</h1>
        <p className="text-slate-400 text-sm tracking-wide">
          Log Source: {log.hostname}
        </p>
        <p>Count : {log.count}</p>

        <div
          className="tooltip tooltip-bottom w-full text-left"
          data-tip={log['Cluster Sample']}
        >
          <p className="truncate hover:cursor-pointer">Cluster Sample : {log['Cluster Sample']}</p>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
