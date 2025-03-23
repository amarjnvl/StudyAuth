import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

export default function ProfileDropdown() {
    const user = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setOpen(false));


    // console.log("ProfileDropdown User:", user);
    if (!user) return null;
    // const reduxState = useSelector((state) => state);
    // console.log("Redux State:", reduxState);


    return (
        <button className="relative flex items-center gap-2" onClick={() => setOpen(!open)}>
            <img
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className="w-8 h-8 rounded-full object-cover border border-gray-700 shadow-md"
            />
            <AiOutlineCaretDown className="text-white text-sm transition-transform duration-300" />

            {open && (
                <div
                    ref={ref}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md border border-gray-700"
                >
                    <Link
                        to="/dashboard/my-profile"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition"
                    >
                        <VscDashboard className="text-lg" />
                        Dashboard
                    </Link>

                    <div
                        onClick={() => {
                            dispatch(logout(navigate));
                            setOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-700 transition"
                    >
                        <VscSignOut className="text-lg text-red-400" />
                        Logout
                    </div>
                </div>
            )}
        </button>
    );
}
