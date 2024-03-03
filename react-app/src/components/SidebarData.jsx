import { MdHomeFilled } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

export const SidebarData = [
    {
        title:"Home",
        icon: <MdHomeFilled />,      
        link: "/home",
        cName: 'nav-text'
    },
    {
        title:"About Us",
        icon: <FaUserCheck />,      
        link: "/about",
        cName: 'nav-text'
    },
    {
        title:"Products",
        icon: <FaBoxOpen />,      
        link: "/about",
        cName: 'nav-text'
    },
];
