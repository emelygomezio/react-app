import { MdHomeFilled } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

export const SidebarData = [
    {
        title:"Home",
        icon: <MdHomeFilled />,      
        link: "/",
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
        link: "/products",
        cName: 'nav-text'
    },
    {
        title:"Add Product",
        icon: <FaBoxOpen />,      
        link: "/addproduct",
        cName: 'nav-text'
    },
];
