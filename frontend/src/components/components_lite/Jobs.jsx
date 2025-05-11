import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (!searchedQuery || !searchedQuery.value) {
      setFilterJobs(allJobs);
      return;
    }

    const filteredJobs = allJobs.filter((job) => {
      switch (searchedQuery.type) {
        case "Experience": {
          const jobExperience = parseInt(job.experienceLevel);
          return jobExperience >= searchedQuery.value.min && 
                 jobExperience <= searchedQuery.value.max;
        }
        case "Salary": {
          const jobSalary = parseInt(job.salary?.replace("LPA", "").trim());
          return jobSalary >= searchedQuery.value.min && 
                 jobSalary <= searchedQuery.value.max;
        }
        case "Location":
          return job.location?.toLowerCase() === searchedQuery.value.toLowerCase();
        case "Technology":
          return job.title?.toLowerCase().includes(searchedQuery.value.toLowerCase()) ||
                 job.description?.toLowerCase().includes(searchedQuery.value.toLowerCase());
        default:
          return true;
      }
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>

          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    key={job.id}
                  >
                    <Job1 job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;