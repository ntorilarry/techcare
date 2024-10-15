import React from "react";
import { Download } from "../../../assets";

const LabResults = () => {
  const results = [
    {
      title: "Blood Tests",
    },
    {
      title: "CT Scans",
    },
    {
      title: "Radiology Reports",
    },
    {
      title: "X-Rays",
    },
    {
      title: "Urine Test",
    },
  ];
  return (
    <div>
      {" "}
      <div className="p-6 bg-white">
        <div>
          <p className="text-xl font-bold text-gray-900">Lab Results</p>
        </div>

        <div className="flow-root mt-4">
          <div className=" divide-y divide-gray-200">
            {results.map((data, index) => (
              <div className="py-2">
                <div
                  key={index}
                  className="flex items-center justify-between space-x-5"
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">
                      {data.title}
                    </p>
                  </div>

                  <img
                    src={Download}
                    className=" my-auto"
                    aria-hidden="true"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabResults;
