import { Box, Divider } from "@mui/material";

import { OurServices } from "./OurServices";
import { aboutUsStyles } from "./AboutUs.styles";

const AboutUs = () => {
  return (
    <Box sx={aboutUsStyles.container} aria-labelledby="about-us-section">
      <OurServices />
      <Divider sx={aboutUsStyles.divider} />
      {/* <Box sx={aboutUsStyles.contactsContainer}>
        <Hero
          // titleWhite={t("titles.contactUs.white").toString()}
          titleBlack={t("titles.contactUs.black").toString()}
          description={t("descriptions.contactUs").toString()}
          divider={false}
          aria-labelledby="hero-contact-description"
        />
        <LinkButton
          to={paths.contacts.path}
          backgroundColor={theme.palette.secondary.main}
          aria-label="Go to contacts page"
        >
          {t("buttons.contacts")}
        </LinkButton>
        <Divider sx={aboutUsStyles.divider} />
      </Box> */}
    </Box>
  );
};

export default AboutUs;
