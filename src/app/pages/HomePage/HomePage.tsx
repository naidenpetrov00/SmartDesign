import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Box, Stack } from "@mui/material";

import AboutUs from "../../../components/AboutUs/AboutUs";
import { PhraseRotator } from "../../../components/ui/Text/PhraseRotator";
import { LanguageSelector } from "../../../components/ui/Buttons/LanguageSelector";
import { OurWorkHomePageImages } from "../../../components/Images/OurWorkHomePageImages";

import homePhoto from "../../../assets/images/home/home2.png";
import homePhotoPlaceHolder from "../../../assets/images/home/home2-transformed.png";

import { homePageStyles } from "./HomePage.styles";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box component="main" aria-labelledby="home-page-main-content">
      <Helmet>
        <title>{t("metatags.homePage.title")}</title>
        <meta
          name="description"
          content={t("metatags.homePage.description")!}
        />
        <link rel="canonical" href="https://smart-projects.bg/" />
      </Helmet>
      <Stack direction={"column"}>
        <Box sx={homePageStyles.container}>
          <LazyLoadImage
            title="HomePageBuilings"
            src={homePhoto}
            loading="eager"
            placeholderSrc={homePhotoPlaceHolder}
            alt="Beautiful city skyline with modern buildings in the background"
            effect="opacity"
            width="100%"
            height="100%"
            style={homePageStyles.lazyImage}
            aria-describedby="home-page-background-image"
          />
          <PhraseRotator />
        </Box>
        <LanguageSelector aria-label="Select language" />
      </Stack>
      <Box component="section" aria-labelledby="about-us-section">
        <AboutUs />
      </Box>
      <Box component="section" aria-labelledby="our-work-section">
        <OurWorkHomePageImages />
      </Box>
    </Box>
  );
};
