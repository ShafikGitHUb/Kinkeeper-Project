import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ContextProvider } from "../../context/Context";

const Stats = () => {
  const { showCallInfo, showTextInfo, showVideoInfo } =
    useContext(ContextProvider);

  const data = [
    { name: "Call", value: showCallInfo.length },
    { name: "Text", value: showTextInfo.length },
    { name: "Video", value: showVideoInfo.length },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];


  const isAllZero =
    showCallInfo.length === 0 &&
    showTextInfo.length === 0 &&
    showVideoInfo.length === 0;

  const finalData = isAllZero
    ? [
        { name: "Call", value: 0 },
        { name: "Text", value: 0 },
        { name: "Video", value: 0 },
      ]
    : data;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">

      <PieChart width={400} height={400}>
        <Pie
          data={finalData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={60}
          paddingAngle={5}
          label
        >
          {finalData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

      {isAllZero && (
        <p className="text-gray-400 mt-4">
          No real activity yet (showing demo chart)
        </p>
      )}
    </div>
  );
};

export default Stats;