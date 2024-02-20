import React from "react";
import NavBar from "@/components/user/Home/NavBar";
import { BsSave2 } from "react-icons/bs";
import Footer from "@/components/common/Footer";
import { IJob } from "../../../interface/IJob";
import { format, parseISO } from "date-fns";

interface JobDetailPageProps {
  job: IJob;
}

const JobDetailPageCom: React.FC<JobDetailPageProps> = ({ job }) => {
  const formattedCreatedAt = format(
    parseISO(job.createdAt ? job.createdAt : ""),
    "MMMM d, yyyy"
  );
  const formattedJobExpiry = format(parseISO(job.jobExpiry), "MMMM d, yyyy");

  return (
    <>
      <NavBar />
      <div className="bg-green-200 pb-10 w-full h-auto">
        <h1 className="text-2xl underline p-6 font-sans font-bold">
          Job <span className="text-blue-500"> Info </span>
        </h1>
        <div className="flex flex-col md:flex-row ml-5">
          <div className="w-full md:w-1/2 gap-6 flex items-center h-auto">
            <img className="w-10" src={job.companyId.logo} alt="logo" />
            <div className="flex flex-col">
              <div>
                <h1 className="font-sans font-semibold text-lg md:text-xl">
                  {job.jobTitle}
                </h1>
                <div className="flex items-center">
                  <p className="text-gray-600 text-sm font-sans">
                    {" "}
                    from {job.companyId.userName}
                  </p>
                  <p className="bg-green-600 text-sm ml-3 px-4 rounded text-white">
                    {job.jobType}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-8 mr-10 flex justify-end mt-4  md:mt-0">
            <div className="p-2 bg-gray-300 rounded">
              <BsSave2 className="bg-gray-300 " />
            </div>
            <div className="flex">
              <button className="bg-blue-500 px-6 md:px-10 ml-2 text-white text-sm md:text-base font-sans rounded">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-auto mt-4">
          <div className="w-full md:w-2/3">
            <h1 className="m-5 font-mono font-semibold text-lg md:text-xl">
              Job <span className="text-blue-700">Description</span>{" "}
            </h1>
            <div className="w-full mx-5 h-auto">
              <p>{job.jobDescription}</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
            <div className="bg-white shadow-sm  rounded-lg flex flex-col justify-around items-baseline w-full md:w-4/5 h-3/4">
              <div className="ml-8 my-4 ">
                <h2 className="font-semibold font-sans text-sm md:text-center">
                  Salary
                </h2>
                <p className="text-green-600 font-sans text-sm md:text-center">
                  {job.salary}
                </p>
              </div>
              <div className="my-4">
                <h2 className="font-semibold font-sans text-sm md:text-base">
                  Job Type
                </h2>
                <p className="text-green-600 font-sans text-sm md:text-base">
                  {job.jobType}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <h1 className="pt-4 px-5 font-semibold font-mono text-lg md:text-xl">
                Requirements:
              </h1>
              <div className="w-full mx-5">
                <ul className="ml-6 list-disc">
                  {job.requirements &&
                    job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
              <div className="bg-white shadow-sm rounded-lg pb-6 w-full md:w-4/5">
                <h1 className="font-semibold text-start font-sans m-4 text-sm md:text-base">
                  Job Overview
                </h1>
                <div className="text-start mx-3">
                  <p className="font-mono text-sm md:text-base">
                    Job Posted Date: <span>{formattedCreatedAt}</span>
                  </p>
                  <p className="font-mono text-sm md:text-base">
                    Job Expiry Date: <span>{formattedJobExpiry}</span>
                  </p>
                  <p className="font-mono text-sm md:text-base">
                    No of Vacancies: <span>{job.vacancy}</span>
                  </p>
                  <p className="font-mono text-sm md:text-base">
                    Category: <span>{job.category}</span>
                  </p>
                </div>
                <div className="bg-gray-400 w-full h-0.5 my-2"></div>
                <p className="font-mono text-sm ml-3 pt-2">
                  Share this Job :{" "}
                  <span className="underline text-blue-500 hover:text-blue-700 text-xs">
                    http://job/497349832y8932y
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-32 mt-4">
          <div className="">
            <div className="">
              <h1 className="pt-4 px-5 font-semibold font-mono text-lg md:text-xl">
                Skills:
              </h1>
              <div className="w-full mx-5">
                <ul className="ml-6 list-disc">
                  {job.skills &&
                    job.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetailPageCom;