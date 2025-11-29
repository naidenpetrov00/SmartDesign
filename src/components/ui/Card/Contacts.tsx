import {
  Box,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { contactsCardStyles } from "./ContactsCard.styles";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" aria-labelledby="manager-name">
          {t('common.name')}
        </Typography>

        <Box
          sx={contactsCardStyles.contactContainer}
          aria-labelledby="email-contact"
        >
          <EmailIcon />
          <Link
            href="mailto:contact@stelapopova.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email инж. Емануил Виденов"
          >
            contact@stelapopova.com
          </Link>
        </Box>
        <Box
          sx={contactsCardStyles.contactContainer}
          aria-labelledby="phone-contact"
        >
          <CallIcon />
          <Link
            href="tel:+359898248285"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Call инж. Емануил Виденов"
          >
            +359 89 824 8285
          </Link>
        </Box>
        {isSmallScreen && <Divider color="white" />}
      </Grid>
    </Grid>
  );
};

export default Contacts;
