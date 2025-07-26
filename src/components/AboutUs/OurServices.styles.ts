import { darken, type SxProps, type Theme } from "@mui/material";

interface OurServicesStyles {
  detailText: SxProps<Theme> | undefined;
  container: SxProps;
  logoContainer: SxProps;
  imageAndTextContainer: SxProps;
  accordion: (theme: Theme) => SxProps;
  accordionDetails: (theme: Theme) => SxProps;
}

export const ourServicesStyles: OurServicesStyles = {
  container: { borderBottomLeftRadius: 16 },
  accordion: (theme) => ({
    mt: 0.5,
    marginLeft: {
      md: 32,
    },
    marginRight: {
      md: 32,
    },
    backgroundColor: darken(theme.palette.primary.light, 0.1),
    borderRadius: "16px !important",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.8)",
  }),
  accordionDetails: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    // borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  }),
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 8,
  },
  detailText: {
    whiteSpace: "pre-line",
  },
  imageAndTextContainer: { zIndex: -1, textAlign: "center" },
};
