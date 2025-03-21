import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Logo.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../Services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import { logout } from "../../services/operations/authAPI"

function Navbar() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation()
    const dispatch = useDispatch()

    const [subLinks, setSubLinks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ; (async () => {
            setLoading(true)
            try {
                const res = await apiConnector("GET", categories.CATEGORIES_API)
                setSubLinks(res.data.data)
            } catch (error) {
                console.log("Could not fetch Categories.", error)
            }
            setLoading(false)
        })()
    }, [])

    // console.log("sub links", subLinks)

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    return (
        <div
            className={`flex h-14 items-center justify-center border-b-[1px] border-b-[#2C333F] ${location.pathname !== "/" ? "bg-[#161D29]" : ""
                } transition-all duration-200`}
        >
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" width={160} height={32} loading="lazy" style={{ filter: "brightness(1.2)" }} />
                </Link>
                {/* Navigation links */}
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6 text-[#DBDDEA]">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {link.title === "Catalog" ? (
                                    <>
                                        <div
                                            className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName") ? "text-yellow-300" : "text-[#DBDDEA]"
                                                }`}
                                        >
                                            <p>{link.title}</p>
                                            <BsChevronDown />

                                            {/* Dropdown Menu */}
                                            <div className="invisible absolute left-[50%] top-[100%] z-[1000] flex w-[200px] 
                                -translate-x-[50%] translate-y-2 flex-col rounded-lg bg-white p-4 text-black 
                                opacity-0 shadow-lg transition-all duration-150 group-hover:visible 
                                group-hover:translate-y-3 group-hover:opacity-100 lg:w-[300px]">

                                                {/* Small Half Rectangle / Arrow */}
                                                <div className="absolute left-[50%] top-0 h-4 w-4 -translate-x-[50%] -translate-y-[50%] rotate-45 bg-white"></div>

                                                {/* Dropdown Content */}
                                                {loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ) : subLinks && subLinks.length ? (
                                                    subLinks
                                                        .filter((subLink) => subLink?.courses?.length > 0)
                                                        .map((subLink, i) => (
                                                            <Link
                                                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                                                className="rounded-lg py-1 pl-1 text-black hover:bg-gray-300 hover:text-black"
                                                                key={i}
                                                            >
                                                                <p>{subLink.name}</p>
                                                            </Link>
                                                        ))
                                                ) : (
                                                    <p className="text-center">No Courses Found</p>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link to={link?.path}>
                                        <p
                                            className={`${matchRoute(link?.path) ? "text-yellow-300" : "text-[#DBDDEA]"
                                                }`}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Login / Signup / Dashboard */}
                <div className="hidden items-center gap-x-4 md:flex">
                    {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                        <Link to="/dashboard/cart" className="relative">
                            <AiOutlineShoppingCart className="text-2xl text-[#AFB2BF]" />
                            {totalItems > 0 && (
                                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-[#424854] text-center text-xs font-bold text-yellow-300">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    )}
                    {token === null ? (
                        <div className="flex gap-4">
                            <Link to={"/login"}>
                                <button className="px-4 py-2 bg-[#001D3D] text-[#fff] rounded-md hover:bg-[#001C39] transition">
                                    Log In
                                </button>
                            </Link>
                            <Link to={"/sign-up"}>
                                <button className="px-4 py-2 bg-[#037957] text-[#fff] rounded-md hover:bg-[#026144] transition">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <button
                            onClick={() => dispatch(logout())}
                            className="px-4 py-2 bg-red-600 text-[#fff] rounded-md hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    )}
                </div>
                <button className="mr-4 md:hidden">
                    <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </button>
            </div>
        </div>
    )
}

export default Navbar