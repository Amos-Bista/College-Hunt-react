import { Box, Stack } from "@mui/material";
import React from "react";
import CollegeHero from "../components/collegeProfile/hero";

const CollegeProfile = () => {
  return (
    <Stack>
      {/* hero */}
      <Box>
        <CollegeHero/>
      </Box>
      {/* collegeInfo */}
      <Box> Collegeinfo</Box>
      {/* tabs */}
      <Box>tabs</Box>
    </Stack>
  );
};

export default CollegeProfile;
