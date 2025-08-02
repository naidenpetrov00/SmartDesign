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

const Contacts = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
          Стела Попова
        </Typography>

        <Box
          sx={contactsCardStyles.contactContainer}
          aria-labelledby="email-contact"
        >
          <EmailIcon />
          <Link
            href="mailto:e.videnov@smart-projects.bg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email инж. Емануил Виденов"
          >
            stela.popova@gmail.com
          </Link>
        </Box>
        <Box
          sx={contactsCardStyles.contactContainer}
          aria-labelledby="phone-contact"
        >
          <CallIcon />
          <Link
            href="tel:+359883393977"
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
