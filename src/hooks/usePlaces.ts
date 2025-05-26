/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

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
      NedelchoApart: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/NedelchoApart/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.NedelchoApart.title"),
        subtitle: t("places.NedelchoApart.subtitle"),
        description: t("places.NedelchoApart.description"),
      },
      Gard: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/Gard/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.Gard.title"),
        subtitle: t("places.Gard.subtitle"),
        description: t("places.Gard.description"),
      },
      Gost: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/Gost/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.Gost.title"),
        subtitle: t("places.Gost.subtitle"),
        description: t("places.Gost.description"),
      },
      Gostinyata: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/Gostinyata/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.Gostinyata.title"),
        subtitle: t("places.Gostinyata.subtitle"),
        description: t("places.Gostinyata.description"),
      },
      Spa: {
        getImages: () => {
          const imagesModules = import.meta.glob(
            "../assets/images/places/Spa/*.{png,jpg,jpeg,svg,webp}",
            { eager: true }
          );
          return Object.values(imagesModules).map((mod: any) => mod.default);
        },
        title: t("places.Spa.title"),
        subtitle: t("places.Spa.subtitle"),
        description: t("places.Spa.description"),
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language, t]
  );

  return data;
};
