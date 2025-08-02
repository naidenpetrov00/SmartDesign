import { Box, Divider, Link, Paper, Stack, Typography } from "@mui/material";

import Contacts from "./Contacts";
import InstagramIcon from "@mui/icons-material/Instagram";
import { contactsCardStyles } from "./ContactsCard.styles";
import { useTranslation } from "react-i18next";

export const ContactsCard = () => {
  const { t } = useTranslation();

  return (
    <Box sx={contactsCardStyles.container}>
      <Paper variant="elevation" elevation={24} sx={contactsCardStyles.paper}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.25rem",
            textAlign: "center",
          }}
          gutterBottom
        >
          {t("pages.contacts.getInTouch")}
        </Typography>
        <Stack gap={2} sx={contactsCardStyles.stack}>
          <Contacts />
          <Divider color="white" />
          <Box
            sx={contactsCardStyles.contactContainer}
            aria-labelledby="social-media-contact"
          >
            <InstagramIcon />
            <Link
              href="https://instagram.com/smartprojects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SmartProjects on Instagram"
            >
              @instagram
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
