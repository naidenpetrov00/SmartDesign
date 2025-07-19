import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export const useTypesOfWork = () => {
  const { t, i18n } = useTranslation();

  const typesOfWork = useMemo(
    () => ({
      conceptLight: {
        title: t("typesOfWork.conceptLight.title"),
        details: [
          t("typesOfWork.conceptLight.details.0"),
        ],
      },
      conceptDetail: {
        title: t("typesOfWork.conceptDetail.title"),
        details: [
          t("typesOfWork.conceptDetail.details.0"),
        ],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return typesOfWork;
};
