import React from "react";
// import Moment from "react-moment";
import "./jobs.scss";

export const Jobs = () => {
  return (
    <div>
      <h1>Jobs Component</h1>
    </div>
  );
};

export const JobListItem = ({ title, date, active, company }) => {
  return (
    <div className="job-list-item">
      <div className="ov-two-column">
        <div>
          <span className="block overview-item-title">Job title</span>
          <span className="overview-item-text">{title}</span>
        </div>
        <div>
          <span className="block overview-item-title">Closing Date</span>
          <span className="overview-item-text">{/* <Moment format="YYYY/MM/DD">{date}</Moment> */}</span>
        </div>
      </div>
      <div className="ov-two-column">
        <div>
          <span className="block overview-item-title">Company</span>
          <span className="overview-item-text">{company}</span>
        </div>
        <div>
          <span className="block overview-item-title">Availability</span>
          <span className="overview-item-text">{active}</span>
        </div>
      </div>
    </div>
  );
};

export const LatestJobs = () => {
  const jobs = [
    { id: 1, title: "Application Developer", company: "Honey and co", date: 1589501246000, active: true },
    { id: 2, title: "Sales executive", company: "Chron Inc", date: 1594771646000, active: true },
    { id: 3, title: "Maketing Head", company: "Maya Resources", date: 1584230846000, active: false },
    { id: 4, title: "Process engineer", company: "Hronerger PLC", date: 1594771646000, active: true },
  ];
  return (
    <div className="overview-box bg-white">
      <div className="overview-title">
        <span className="overview-title-text text-vla">Latest Jobs</span>
      </div>
      <div className="overview-body">
        {jobs.map((job) => {
          return <JobListItem index={job.id} title={job.title} date={job.date} active={job.active} company={job.company} />;
        })}
      </div>
    </div>
  );
};
