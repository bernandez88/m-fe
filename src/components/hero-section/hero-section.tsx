import { useTranslation } from 'react-i18next';

import { EditClipboardIcon, IconButton, IconButtonChevron, LogRevisionIcon } from 'assets/icons';
import { hangar1 } from 'assets/images';

import {
  buttonsContainerStyles,
  containerStyles,
  heroButtonIconStyles,
  heroButtonStyles,
  iconStyles,
  innerContainerStyles,
  separatorStyles,
  textStyles,
  titleStyles,
} from './hero-section-styles';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div
      className={containerStyles()}
      style={{
        backgroundImage: `url(${hangar1})`,
      }}>
      <div className={innerContainerStyles()}>
        <h1 className={titleStyles()}>{t('pages.home.my-workspace')}</h1>

        <div className={buttonsContainerStyles()}>
          <button type="button" className={heroButtonStyles()}>
            <EditClipboardIcon className={iconStyles()} />

            <span className={separatorStyles()}> </span>

            <p className={textStyles()}>{t('pages.home.create-revision')}</p>

            <IconButton className={heroButtonIconStyles()} />
          </button>

          <button type="button" className={heroButtonStyles()}>
            <LogRevisionIcon className={iconStyles()} />

            <span className={separatorStyles()} />

            <p className={textStyles()}>{t('pages.home.revision-log')}</p>

            <IconButtonChevron className={heroButtonIconStyles()} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
