import { Slider } from "./Slider";
import { usePlaces } from "../../../hooks/usePlaces";
import { Grid } from "@mui/material";

export const OurWorkImages = ({ homePage = false }: { homePage?: boolean }) => {
  const places = usePlaces();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8 }}
      sx={{ ml: 2, mr: 2, mt: 2, mb: 2 }}
      aria-label="Gallery of our work"
    >
      {Object.entries(places)
        .slice(0, homePage ? 2 : undefined)
        .map(([folder, place]) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={folder} role="listitem">
            <Slider place={place} />
          </Grid>
        ))}
    </Grid>
  );
};
