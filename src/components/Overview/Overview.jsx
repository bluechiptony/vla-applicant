import React from "react";
import { LatestJobs } from "../Jobs/Jobs";
import "./overview.scss";

export const Overview = () => {
  return (
    <div>
      <h1>Overview Component</h1>

      <div className="three-column-grid">
        <LatestJobs></LatestJobs>
      </div>
    </div>
  );
};
