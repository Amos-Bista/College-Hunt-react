import { useState } from "react";
import { FiEdit2, FiSave } from "react-icons/fi";
import { MdFileUpload } from "react-icons/md";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Profile from "../assets/home/profile.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: { xs: "90%", sm: "90%", md: "80%", lg: "60%", xl: "45%" },
  borderRadius: "20px",
};

const EditableField = ({ label, value, isEditing, labelWidth = "w-[22%]" }) => {
  return (
    <div className="flex items-center justify-start pb-2 mb-2">
      <p
        className={`font-semibold lg:text-lg md:text-base text-sm ${labelWidth}`}
      >
        {label}:
      </p>
      {isEditing ? (
        <input
          type="text"
          className="border border-gray-300 w-[50%] p-2 px-3 rounded-md lg:text-lg md:text-base text-sm"
          placeholder={value}
        />
      ) : (
        <p className="lg:text-lg md:text-base text-sm lg:border-b border-black w-[55%] lg:w-[51%] 2xl:w-[45%] overflow-hidden  whitespace-nowrap p-2">
          {value}
        </p>
      )}
    </div>
  );
};

export default function ProfileModal({ isOpen, handleClose }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            {Profile.map((profile, index) => (
              <div key={index}>
                <div className="flex flex-col items-center justify-center p-4 my-4 space-x-5 bg-white md:flex-row rounded-xl">
                  <div className="w-[50%] md:w-1/3 ml-8 items-center justify-center flex">
                    <div className="relative w-full h-auto mb-4">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-auto rounded-full"
                      />
                      {isEditing && (
                        <div
                          className="absolute inset-0 flex items-center justify-center transition duration-200 ease-in-out bg-black rounded-full cursor-pointer bg-opacity-40 hover:bg-opacity-55"
                          onClick={() =>
                            document.getElementById("imageUpload").click()
                          }
                        >
                          <MdFileUpload className="w-6 h-6 text-white" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="imageUpload"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  // Do nothing with the image for now
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative w-full px-5 pt-4 pb-2 md:w-2/3 lg:pl-16">
                    {isEditing ? (
                      <button
                        className="absolute bottom-0 p-2 right-2 md:top-0 md:right-1 sm:bottom-auto"
                        onClick={handleSaveClick}
                      >
                        <FiSave size={22} />
                      </button>
                    ) : (
                      <button
                        className="absolute bottom-0 p-2 right-2 md:top-0 md:right-1 sm:bottom-auto"
                        onClick={handleEditClick}
                      >
                        <FiEdit2 size={22} />
                      </button>
                    )}
                    <h2 className="pb-2 mb-2 text-2xl font-semibold ">
                      {profile.name}
                    </h2>

                    <EditableField label="Email" value={profile.email} />

                    <EditableField
                      label="Phone"
                      value={profile.phone}
                      isEditing={isEditing}
                    />
                    <EditableField
                      label="Address"
                      value={profile.Address}
                      isEditing={isEditing}
                    />
                    <EditableField
                      label="DOB"
                      value={profile.DOB}
                      isEditing={isEditing}
                    />
                  </div>
                </div>
                {isEditing && (
                  <div className="flex flex-col w-full p-6 my-1 border-t border-gray-300 md:items-center md:justify-center pl-11 md:pl-0 rounded-b-2xl">
                    <h1 className="pb-6 text-lg font-semibold">
                      Change your password
                    </h1>
                    <div className="flex flex-col w-[85%] md:w-[70%]">
                      <EditableField
                        label="Old Password"
                        value=""
                        isEditing={isEditing}
                        labelWidth="w-[47%] md:w-[40%]"
                      />
                      <EditableField
                        label="New Password"
                        value=""
                        isEditing={isEditing}
                        labelWidth="w-[47%] md:w-[40%]"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        </Box>
      </Modal>
    </div>
  );
}
