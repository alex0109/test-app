import { Box, Typography } from "@mui/material";

import "./style.css";
import { FC, ReactNode } from "react";

interface BannerProps {
  title: string;
  icon: ReactNode;
}

export const Banner: FC<BannerProps> = ({ title, icon }) => {
  return (
    <Box className="banner-box">
      {icon}
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};
