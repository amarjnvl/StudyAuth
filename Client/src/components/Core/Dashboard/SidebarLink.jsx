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
            className={`relative flex items-center gap-3 px-4 py-2 rounded-md transition-all
                ${matchRoute(link?.path) ? "bg-gray-800 text-white font-medium shadow-lg" : "text-gray-400 hover:text-white hover:bg-gray-700"}
            `}
        >
            {/* Active Indicator Bar */}
            <span
                className={`absolute left-0 h-full w-1 rounded-r-md bg-yellow-400 transition-all
                    ${matchRoute(link?.path) ? "opacity-100" : "opacity-0"}
                `}
            ></span>

            {/* Icon & Text */}
            <div className="flex items-center gap-2">
                {Icon && <Icon className="text-lg" />}
                <span className="text-sm">{link?.name || "Unnamed Link"}</span>
            </div>
        </NavLink>
    );
};

export default SidebarLink;
