import { AgChartOptions } from "ag-charts-enterprise";
import { AgCharts } from "ag-charts-react";
import React from "react";
import "ag-charts-enterprise"; 



interface DataNode {
  name: string;
  children: { name: string; value: number }[];
}

interface Props {
  data: DataNode[];
  width: number;
  height: number;
}

const RunningAppsTreemap: React.FC<Props> = ({ data, width, height }) => {

  // const tooltipRenderer = (params: any): AgTooltipRendererResult => {
  //   const textColor = "#FFFFFF"; // Example text color
  //   const bgColor = "#333333"; // Example background color
  
  //   return {
  //     title: params?.datum?.name,
  //     content: `${params?.datum?.name}: ${params?.datum?.value}`,
  //     color: textColor,
  //     backgroundColor: bgColor,
  //   };
  // };
  console.log(data);
  const options: AgChartOptions = {
    data,
    series: [
      {
        type: "treemap",
        labelKey: "name",
        secondaryLabelKey: 'value',
        sizeKey: "value",
        sizeName: "Usage",
        colorKey: "value",
        colorName: "Intensity",
        colorRange: ["#3BB6C7","#006E74" ],
        tooltip: {
          enabled: true,
          // renderer: tooltipRenderer,
        },
      },
    ],
    // title: {
    //   text: "CPU and Memory Utilization", // Example title
    // },
    // subtitle: {
    //   text: "2024", // Example subtitle
    // },
  };

  return <AgCharts  options={options} style={{ width, height }} />;
};

export default RunningAppsTreemap;
