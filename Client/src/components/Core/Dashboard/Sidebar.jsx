import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import SidebarLink from "./SidebarLink";
import ConfirmationModal from "../../common/ConfirmationModal";
import { logout } from "../../../services/operations/authAPI";
import { sidebarLinks } from "../../../data/dashboard-links";

function Sidebar() {
  const [confirmationModal, setConfirmationModal] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white w-64 shadow-lg">
      {/* Sidebar Links */}
      <div className="flex-grow overflow-y-auto space-y-2 p-4">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.id} link={link} />
        ))}
      </div>

      {/* Settings Link */}
      <div className="border-t border-gray-700 p-4">
        <SidebarLink
          link={{ name: "Settings", path: "/dashboard/settings" }}
          iconName="VscSettingsGear"
        />
      </div>

      {/* Logout Button */}
      <button
        onClick={() =>
          setConfirmationModal({
            text1: "Are you sure you want to logout?",
            text2: "You will be redirected to the login page.",
            btn1Text: "Logout",
            btn2Text: "Cancel",
            btn1Handler: () => {
              dispatch(logout(navigate));
              setConfirmationModal(null);
            },
            btn2Handler: () => setConfirmationModal(null),
          })
        }
        className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-all"
      >
        <VscSignOut className="text-xl" />
        <span>Logout</span>
      </button>

      {/* Confirmation Modal */}
      {confirmationModal && (
        <ConfirmationModal
          text1={confirmationModal.text1}
          text2={confirmationModal.text2}
          btn1Text={confirmationModal.btn1Text}
          btn1Handler={confirmationModal.btn1Handler}
          btn2Text={confirmationModal.btn2Text}
          btn2Handler={confirmationModal.btn2Handler}
        />
      )}
    </div>
  );
}

export default Sidebar;
