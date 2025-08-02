import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { DrawerNavigationButtons } from "./Buttons/DrawerNavigationButtons/DrawerNavigationButtons";
import { NavigationButtons } from "./Buttons/NavigationButtons";
import SvgIcon from "../../assets/images/logo/SvgIcon";
import { SvgIconColor } from "../../types/enums";
import { paths } from "../../config/paths";
import { useState } from "react";

export const Header = () => {
  const { pathname } = useLocation();
  const [drawerOpenState, setdrawerOpenState] = useState(false);

  const theme = useTheme();
  const underMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const bottomRadius = 16;
  return (
    <AppBar
      component="header"
      color="primary"
      sx={{
        borderBottomLeftRadius: bottomRadius,
        borderBottomRightRadius: bottomRadius,
      }}
    >
      <Toolbar>
        <Link
          className="noStyle"
          to={paths.home.path}
          aria-label={`navigate to ${paths.home.label}`}
        >
          <SvgIcon
            width="80"
            color={SvgIconColor.white}
            aria-label="SmartDesign logo"
          />
        </Link>
        {underMediumScreen ? (
          <DrawerNavigationButtons
            pathname={pathname}
            drawerOpenState={drawerOpenState}
            setdrawerOpenState={setdrawerOpenState}
          />
        ) : (
          <NavigationButtons pathname={pathname} />
        )}
      </Toolbar>
    </AppBar>
  );
};
