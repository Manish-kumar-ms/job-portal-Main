import React, { useEffect, useState } from "react";
import JobCards from "./JobCards";
import axios from "axios";

import { useSelector } from "react-redux";
import { JOB_API_ENDPOINT } from "@/utils/data";

const LatestJobs = () => {
  //const allJobs = useSelector((state) => state.jobs?.allJobs || []); // Safely access allJobs
  const [allJobs, setAllJobs]= useState([]); 

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`${JOB_API_ENDPOINT}/get`);
      setAllJobs(response.data.jobs);
    };
    fetchJobs(); 
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h2>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6) 
            .map((job) =>
              job?._id ? (
                <JobCards key={job._id} job={job}></JobCards>
              ) : (
                <span key={Math.random()}>Invalid Job Data</span>
              )
            )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
