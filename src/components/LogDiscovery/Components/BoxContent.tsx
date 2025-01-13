import React from "react";
import { capitalise } from "../utils/capitalise";

interface BoxContentProps {
  title: string;
  content: string;
}

const BoxContent: React.FC<BoxContentProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-md p-3 space-y-2">
      <h1 className="text-TealText font-semibold">{capitalise(title)}</h1>
      <p className="text-slate-400">{capitalise(content)}</p>
    </div>
  );
};

export default BoxContent;
