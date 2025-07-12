import React from "react";
import { useTranslation } from "react-i18next";

import { Box, useTheme, useMediaQuery } from "@mui/material";

import { Hero } from "../ui/Heros/Hero";
import { AboutUsText } from "./AboutUsText";

import { SvgIconColor } from "../../types/enums";

import SvgIcon from "../../assets/images/logo/SvgIcon";

import { ourServicesStyles } from "./OurServices.styles";

export const OurServices = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Box sx={ourServicesStyles.logoContainer}>
        <SvgIcon
          width={isSmallScreen ? "200" : "320"}
          color={SvgIconColor.black}
        />
        <AboutUsText />
      </Box>
      <Hero
        description={t("descriptions.ourServices")}
        titleWhite={t("titles.ourServices.white").toString()}
        titleBlack={t("titles.ourServices.black").toString()}
        divider={false}
        aria-labelledby="our-services-hero"
      />
    </React.Fragment>
  );
};
