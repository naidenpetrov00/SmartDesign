import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { AboutUsText } from "./AboutUsText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Hero } from "../ui/Heros/Hero";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { heroStyles } from "../ui/Heros/Hero.styles";
import { ourServicesStyles } from "./OurServices.styles";
import stelaPhoto from "../../assets/images/home/stela_photo.jpg";
import stelaPhotoPlaceHolder from "../../assets/images/home/stela_photo_placeholder.jpg";
import { useTranslation } from "react-i18next";
import { useTypesOfWork } from "../../hooks/useTypesOfWork";

export const OurServices = () => {
  const { t } = useTranslation();
  const typesOfWork = useTypesOfWork();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({
    opacity: 1,
    transform: "scale(1)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const distance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
      const maxDistance = windowHeight / 2 + rect.height / 2;

      const ratio = Math.min(distance / maxDistance, 1);

      const newOpacity = 1 - ratio * (isSmallScreen ? 0.6 : 0.3);
      const newScale = 1 - ratio * (isSmallScreen ? 0.3 : 0.2);

      setImageStyle({
        opacity: newOpacity,
        transform: `scale(${newScale})`,
        transition: "opacity 0.2s, transform 0.2s",
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  return (
    <React.Fragment>
      <Box sx={ourServicesStyles.logoContainer}>
        <Stack direction={"column"} alignItems={"center"} spacing={-6}>
          <Box ref={imageRef} sx={ourServicesStyles.imageAndTextContainer}>
            <Typography
              variant="h2"
              sx={heroStyles.titleBlack(theme, isSmallScreen)}
              fontFamily={"Comforter"}
              aria-label="Title in black"
            >
              {t("titles.aboutUs.black").toString()}
            </Typography>
            <LazyLoadImage
              title="Stela Photo"
              src={stelaPhoto}
              loading="eager"
              placeholderSrc={stelaPhotoPlaceHolder}
              alt="My photo"
              effect="opacity"
              width={isSmallScreen ? "200px" : "300px"}
              aria-describedby="stela-photo"
              style={imageStyle}
            />
          </Box>
          <AboutUsText />
        </Stack>
      </Box>
      <Hero
        // titleWhite={t("titles.ourServices.white").toString()}
        titleBlack={t("titles.ourServices.black").toString()}
        divider={false}
        aria-labelledby="our-services-hero"
      />
      <Box
        sx={ourServicesStyles.container}
        role="region"
        aria-labelledby="our-services-accordion"
      >
        {Object.entries(typesOfWork).map((work, index) => (
          <Accordion
            key={work[1].title}
            defaultExpanded={index === 0}
            sx={ourServicesStyles.accordion(theme)}
            aria-labelledby={`accordion-${index}`}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.text.primary }} />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                color="textPrimary"
                variant="h4"
                sx={{ fontSize: "2rem" }}
                fontFamily={"Comforter"}
              >
                {work[1].title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={ourServicesStyles.accordionDetails(theme)}>
              {work[1].details.map((d, detailIndex) => (
                <Typography
                  key={detailIndex}
                  color="textPrimary"
                  sx={ourServicesStyles.detailText}
                >
                  {d}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </React.Fragment>
  );
};
