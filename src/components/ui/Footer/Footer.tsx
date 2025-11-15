import { useMediaQuery, useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import Contacts from "../Card/Contacts";
import Container from "@mui/material/Container";
import { Copyright } from "../Copyright";
import { LinkButtonUnderline } from "../Buttons/LinkButton/LinkButtonUnderline";
import SvgIcon from "../../../assets/images/logo/SvgIcon";
import { SvgIconColor } from "../../../types/enums";
import Typography from "@mui/material/Typography";
import { footerStyles } from "./Footer.styles";
import { usePaths } from "../../../hooks/usePaths";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const paths = usePaths();
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={footerStyles.footer}>
      <Container sx={footerStyles.container}>
        <Box sx={footerStyles.boxContainer} color="primary.contrastText">
          <Box sx={footerStyles.boxContent}>
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <SvgIcon width="160" color={SvgIconColor.white} />
              {/* <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 3 }}
              >
                {t("footer.contactUs")}
              </Typography> */}
              {/* <Typography variant="body2" sx={{ mb: 2 }}>
                {t("footer.reachOut")}
              </Typography> */}
              <Contacts />
            </Box>
          </Box>
          <Box sx={footerStyles.navigation}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "medium", mt: isSmallScreen ? 3 : 0 }}
            >
              {t("footer.navigation")}
            </Typography>
            <Box
              component="nav"
              role="navigation"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {Object.values(paths).map((path, index) => (
                <div key={index}>
                  <LinkButtonUnderline
                    to={path.path}
                    aria-label={`Navigate to ${path.label}`}
                  >
                    {path.label}
                  </LinkButtonUnderline>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={footerStyles.boxSocial}>
          <div>
            <Copyright />
          </div>
          {/* <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left" }}
          >
            {socialLinks.map(({ href, icon, label }) => (
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                size="small"
                href={href}
                aria-label={`Visit Smart Projects on ${label}`}
                sx={{ alignSelf: "center" }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack> */}
        </Box>
      </Container>
    </Box>
  );
};
