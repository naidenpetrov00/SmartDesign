import { useMemo } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";

export interface Place {
  getImages: () => string[];
  title: string;
  subtitle: string;
  description: string;
}

interface PlacesFolder {
  [key: string]: Place;
}

export const usePlaces = () => {
  const { t, i18n } = useTranslation();

  const data: PlacesFolder = useMemo(
    () => ({
      Adept: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/Adept/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.Adept.title"),
        subtitle: t("places.Adept.subtitle"),
        description: t("places.Adept.description"),
      },
      MeetingThePageHalfway: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/MeetingThePageHalfway/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.MeetingThePageHalfway.title"),
        subtitle: t("places.MeetingThePageHalfway.subtitle"),
        description: t("places.MeetingThePageHalfway.description"),
      },
      UrbanNest: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/UrbanNest/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.UrbanNest.title"),
        subtitle: t("places.UrbanNest.subtitle"),
        description: t("places.UrbanNest.description"),
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language, t]
  );

  return data;
};
