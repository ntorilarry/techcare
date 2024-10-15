import React from "react";

const DiagnosisList = () => {
  const diagnosisList = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
  ];
  return (
    <div>
      <div className="mt-6  bg-white">
        <p className="font-bold text-primary p-4 text-xl">Diagnosis List</p>
        <table className="min-w-full lg:divide-y lg:divide-gray-200">
          <thead className="hidden lg:table-header-group  bg-[#F6F7F8] rounded-full">
            <tr>
              <td className="px-6 py-4 text-sm font-bold text-primary whitespace-normal">
                Problem/Diagnosis
              </td>

              <td className="px-6 py-4 text-sm font-bold text-primary whitespace-normal">
                Description
              </td>

              <td className="px-6 py-4 text-sm font-bold text-primary whitespace-normal">
                Status
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {diagnosisList.map((data, index) => (
              <tr key={index}>
                <td className="hidden px-6 py-4 text-sm font-medium text-primary lg:table-cell whitespace-nowrap">
                  {data.problem}
                </td>

                <td className="hidden px-6 py-4 text-sm font-medium text-primary lg:table-cell whitespace-nowrap">
                  {data.description}
                </td>

                <td className="hidden px-6 py-4 text-sm font-medium text-primary lg:table-cell whitespace-nowrap">
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosisList;
