import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdPerson,
  IoMdDocument,
  IoMdHeart,
  IoMdLogOut,
} from "react-icons/io";
import ProfileModal from "../home/profileModal";
import LoginModal from "../home/loginModal";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [username, setUsername] = useState("No user");

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAnchorEl(null);
  };

  const handleOpenProfileModal = (event) => {
    event.stopPropagation();
    setIsProfileModalOpen(true);
  };
  
  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };
  console.log(setUsername);

  return (
    <nav className="flex justify-between w-full px-4 py-3 sm:px-6 md:px-12 lg:px-24 lg:py-5">
      <div onClick={() => navigate("/dashboard")} className="cursor-pointer">
        <p className="text-xl font-bold lg:text-3xl">
          <span className="text-[#3689C7]">College</span>
          <span className="text-[#78B657]">Hunt</span>
        </p>
      </div>
      {isLoggedIn ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: { xs: 24, sm: 30, md: 36 },
                height: { xs: 24, sm: 30, md: 36 },
              }}
            >
              N
            </Avatar>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: 500 }}
            >
              {username}
            </Typography>
            <IconButton onClick={handleClick}>
              {anchorEl ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={handleOpenProfileModal}
              sx={{ width: 200, padding: "10px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoMdPerson style={{ marginRight: 8 }} />
                Profile
              </Box>
            </MenuItem>
            <ProfileModal
              isOpen={isProfileModalOpen}
              handleClose={handleCloseProfileModal}
            />
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/Kyc");
              }}
              sx={{ width: 200, padding: "10px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoMdDocument style={{ marginRight: 8 }} />
                KYC
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleClose}
              sx={{ width: 200, padding: "10px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoMdHeart style={{ marginRight: 8 }} />
                Favorites
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              sx={{ width: 200, padding: "10px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoMdLogOut style={{ marginRight: 8 }} />
                Logout
              </Box>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <LoginModal onLogin={() => setIsLoggedIn(true)} />
      )}
    </nav>
  );
}
