import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"


const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: userLoading } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (userLoading || profileLoading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  return (
    <div>
      <div>
        <div>
          {
            sidebarLinks.map((link) => {
              if (link.type && user?.accountType !== link.type) return null;

              return (
                <SidebarLink key={link.id} link={link} iconName={link.icon} />
              );
            })
          }
        </div>
        <div></div>
        <div>
          <SidebarLink link={{ name: 'Settings', path: '/dashboard/settings' }}
            iconName={'vscSettingsGear'}
          />

          <button
            onClick={() => setConfirmationModal(
              {
                text1: "Are you sure you want to logout?",
                text2: "You will be redirected to the login page",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null)
              }
            )}
          >

            <div>
              <VscSignOut />
              <span> Logout </span>
            </div>

          </button>
        </div>
      </div>
      {confirmationModal && <confirmationalModal modalData={confirmationModal} />}
    </div>
  )
}

export default Sidebar