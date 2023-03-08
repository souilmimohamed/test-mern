import { RiDashboardFill } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { BiCut, BiFolder } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
export const API_ENDPOINT = "http://localhost:5000/";
export const Menus = [
  { title: "Dashbord", icon: <RiDashboardFill /> },
  { title: "Customer Service", icon: <BsBriefcase />, spacing: true },
  { title: "Material Management", icon: <BiCut /> },
  { title: "Master Data", icon: <BiFolder /> },
  { title: "Administration", icon: <GiSettingsKnobs /> },
];
