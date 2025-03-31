import React from 'react';
import * as Icons from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, matchPath } from 'react-router-dom';

const SidebarLink = ({ link, iconName }) => {
    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return route ? matchPath({ path: route }, location.pathname) !== null : false;
    };

    return (
        <NavLink
            to={link?.path || "#"}
            className={`${matchRoute(link?.path) ? "bg-[#2C333F] text-[#C5C7D4] opacity-100" : "opacity-50"}`}
        >
            <span
                className={` absolute bg-yellow-300 ${matchRoute(link?.path) ? "opacity-100" : "opacity-50"}`}
            >
            </span>

            <div>
                {Icon && <Icon />}
                <span>{link?.name || "Unnamed Link"}</span>
            </div>
        </NavLink>
    )
}

export default SidebarLink