import React from "react";
import {
  DateOfBirth,
  Gender,
  Insurance,
  JessicaProfile,
  Phone,
} from "../../../assets";
import LabResults from "./LabResults";

const ProfileSidebar = () => {
  const diagnosis = [
    {
      icon: DateOfBirth,
      title: "Date Of Birth",
      value: "August 23, 1996",
    },
    {
      icon: Gender,
      title: "Gender",
      value: "Female",
    },
    {
      icon: Phone,
      title: "Contact Info.",
      value: "(415) 555-1234",
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      value: "(415) 555-5678",
    },
    {
      icon: Insurance,
      title: "Insurance Provider",
      value: "Sunrise Health Assurance",
    },
  ];
  return (
    <div>
      <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto  px-4 py-6 mt-[4.5rem] sm:px-6 lg:px-8 xl:block">
        <div className="bg-white lg:max-w-none lg:col-span-2">
          <img
            className="object-cover w-48 h-48 p-4 mx-auto"
            src={JessicaProfile}
            alt=""
          />
          <p className="mt-2 text-center text-lg font-black tracking-wide text-primary ">
            Jessica Taylor
          </p>

          <div className="mt-6 space-y-2">
            {diagnosis.map((data, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <div className="p-2">
                  <div className="flex mx-auto items-start lg:items-center">
                    <img
                      className="object-cover rounded-lg shrink-0"
                      src={data.icon}
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-sm font-bold text-primary">
                        {data.title}
                      </p>
                      <p className="text-base font-extrabold text-primary">
                        {data.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className=" mx-auto flex mt-4 px-6 py-2 text-base font-bold  text-primary bg-[#01F0D0] rounded-full">
            Show All Information
          </button>

          <LabResults />
        </div>
      </aside>
    </div>
  );
};

export default ProfileSidebar;
