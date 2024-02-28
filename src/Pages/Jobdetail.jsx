import React from "react";
import jobListData from "../data/data.json";
import { Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';

export const Jobdetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
//   const params = useParams();
//   params.jobID = jobID;
const jobData = jobListData.find(job => id == job.id)

const handleclick = () => {
alert ("Thank you for your application!");
navigate ('/home')
};
    
return (
    <>
    
          <div className="min-h-[80vh] relative">
        <div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-10">
            <Link to ="/home">
          <button className="absolute top-0 left-0 mt-4 ml-4 bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
            Back
          </button>
          </Link>
          <div className="flex items-center mb-4 mt-8">
            <img src={jobData.logo} className="w-12 h-12 mr-4" alt="Company Logo" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">{jobData.position}</h1>
              <p className="text-[#787878]">{jobData.company}</p>
            </div>
          </div>
          {jobData.new && (
            <span className="bg-cyan-dark text-white py-1 px-2 rounded-full mr-2">
            NEW!
            </span>
          )}
          {jobData.featured && (
          <div className="flex items-center">
          <span className="bg-[#111111] text-white py-1 px-2 rounded-full">
            FEATURED
          </span>  
          </div>
        )}
          <hr className="my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Job Description</h2>
              <p className="text-[#787878]">{jobData.description}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Requirements</h2>
              <div className="flex flex-wrap">
                <span className="bg-[#0f1e32] text-white py-1 px-2 rounded-full mr-2 mb-2">
                 {jobData.role}
                </span>
                {/* {currentItems.map((job, id) => (
                <Joblist
                  key={id}
                  jobData={job}
                  applyFilter={applyFilter}
                />
              ))} */}
                
                 {jobData.languages.map((languages,id) => (
                    <span className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
                        {languages}
                        </span>
                 ))}
                
                {jobData.tools.map((tools, id) => (
                    <span className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
                        {tools}
                        </span>
                ))}
               
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex items-center text-gray-600">
            <p className="mr-4">{jobData.postedAt}</p>
            <p className="mr-4">{jobData.contract}</p>
            <p>{jobData.location}</p>
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={handleclick} className="bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
)
};