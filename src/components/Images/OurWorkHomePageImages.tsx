import { Hero } from '../ui/Heros/Hero';
import { LinkButton } from '../ui/Buttons/LinkButton/LinkButton';
import { OurWorkImages } from './Slider/OurWorkImages';
import React from 'react';
import { paths } from '../../config/paths';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const OurWorkHomePageImages = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Hero
        // titleWhite={t('titles.ourWork.white').toString()}
        titleBlack={t('titles.ourWork.black').toString()}
        divider={false}
        aria-label={t('titles.ourWork.white')}
      />
      <OurWorkImages homePage={true} />
      <LinkButton
        backgroundColor={theme.palette.secondary.main}
        to={paths.ourWork.path}
        aria-label={t('buttons.checkMore')}
      >
        {t('buttons.checkMore')}
      </LinkButton>
    </React.Fragment>
  );
};
