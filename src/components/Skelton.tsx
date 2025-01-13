import React from "react";

interface SkeletonLineProps {
  width: string;
  height: string;
}

interface SkeletonCircleProps {
  size: string;
}

export const SkeletonLine: React.FC<SkeletonLineProps> = ({ width, height }) => (
  <div className={`animate-pulse rounded`} style={{ background: "#b9b5b5", width, height, marginTop: "16px" }}></div>
);

export const SkeletonCircle: React.FC<SkeletonCircleProps> = ({ size }) => (
  <div className={`animate-pulse ${size} rounded-full`} style={{ background: "#b9b5b5" }} ></div>
);
