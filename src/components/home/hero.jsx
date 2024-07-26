import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Form from "./loginModal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "55%",
  borderRadius: "20px",
};

function Hero() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleClose = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <div className="relative flex flex-col-reverse items-center justify-between overflow-x-hidden border border-gray-200 md:flex-row-reverse shadow-hero">
        <div className="w-full md:w-[50%]">
          <img
            src="https://wallpaperaccess.com/full/1209519.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 md:hidden">
            <div className="p-8 text-center text-white">
              <p className="text-xl font-bold">
                Unlocking Nepal&apos;s best colleges
                <br />
                Where excellence meets opportunity
              </p>
              <p className="hidden pt-1 text-md md:block">
                All courses have been curated and reviewed
                <br />
                to help you decide your next course.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block bg-white w-full md:w-[50%]">
          <div className="p-8 md:pl-12 lg:pl-[15%]">
            <p className="text-xl font-bold md:text-2xl lg:text-4xl">
              Unlocking Nepal&apos;s best colleges
              <br className="hidden md:block" />
              Where excellence meets opportunity
            </p>
            <br className="hidden md:block" />
            <p className="pt-1 text-md md:text-xl lg:text-2xl">
              All courses have been curated and reviewed
              <br className="hidden md:block" />
              to help you decide your next course.
            </p>
            <div className="flex mt-20 space-x-9">
              <button
                onClick={handleOpen}
                className="flex items-center justify-center h-[50px] w-[122px]  bg-[rgba(160,207,215,1)] rounded-[8px] font-poppins font-extrabold text-[20px] leading-[30px] tracking-[0.06em] text-white hover:bg-gray-400 transition"
              >
                Login
              </button>

              <button className="flex items-center justify-center h-[50px] w-[146px]  bg-[rgba(160,215,172,1)] rounded-[8px] font-poppins font-extrabold text-[20px] leading-[30px] tracking-[0.06em] text-white hover:bg-gray-400 transition">
                <Link to="/signin" className="flex items-center">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        open={isLoginModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Form />
        </Box>
      </Modal>
    </div>
  );
}

export default Hero;
