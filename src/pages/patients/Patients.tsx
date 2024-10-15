
import { useState } from "react";
import {
  Ashley,
  Brandon,
  Emily,
  Jessica,
  Kevin,
  Olivia,
  Ryan,
  Samantha,
  Tyler,
} from "../../assets";
import PatientsSidebar from "./components/PatientsSidebar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import ProfileSidebar from "./components/ProfileSidebar";

const navigation = [
  {
    name: "Emily Williams",
    href: "/overview",
    gender: "Female",
    age: "18",
    avatar: `${Emily}`,
    current: false,
  },
  {
    name: "Ryan Johnson",
    href: "/patients",
    gender: "Male",
    age: "45",
    avatar: `${Ryan}`,
    current: false,
  },
  {
    name: "Brandon Mitchell",
    href: "/patients",
    gender: "Male",
    age: "36",
    avatar: `${Brandon}`,
    current: false,
  },
  {
    name: "Jessica Taylor",
    href: "/patients",
    gender: "Female",
    age: "28",
    avatar: `${Jessica}`,
    current: true,
  },
  {
    name: "Samantha Johnson",
    href: "/patients",
    gender: "Female",
    age: "56",
    avatar: `${Samantha}`,
    current: false,
  },
  {
    name: "Ashley Martinez",
    href: "/patients",
    gender: "Female",
    age: "54",
    avatar: `${Ashley}`,
    current: false,
  },
  {
    name: "Olivia Brown",
    href: "/patients",
    gender: "Female",
    age: "32",
    avatar: `${Olivia}`,
    current: false,
  },
  {
    name: "Tyler Davis",
    gender: "Male",
    age: "19",
    avatar: `${Tyler}`,
    current: false,
  },
  {
    name: "Kevin Anderson",
    href: "/patients",
    gender: "Male",
    age: "30",
    avatar: `${Kevin}`,
    current: false,
  },
  {
    name: "Dylan Thompson",
    href: "/patients",
    gender: "Male",
    age: "36",
    avatar: `${Samantha}`,
    current: false,
  },
  {
    name: "Nathan Evans",
    href: "/patients",
    gender: "Male",
    age: "58",
    avatar: `${Samantha}`,
    current: false,
  },
  {
    name: "Mike Nolan",
    href: "/patients",
    gender: "Male",
    age: "31",
    avatar: `${Samantha}`,
    current: false,
  },
];

const Patients = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="">
        <PatientsSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
        />
        {/* Static sidebar for desktop */}
        <DiagnosisHistory />
        <ProfileSidebar />
      </div>
    </>
  );
};
export default Patients;
