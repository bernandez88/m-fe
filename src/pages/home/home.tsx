import { useTranslation } from 'react-i18next';

import { useAuthStore } from 'hooks';
import { msalRefreshRequest, msalSignOutRequest } from 'providers/msal-browser';

import HeroSection from '../../components/hero-section';

import { homeContainerStyles, homeTitleStyles } from './home-styles';

function Home() {
  const { t } = useTranslation();
  const { accessToken } = useAuthStore();

  const onRefreshClick = async () => {
    await msalRefreshRequest();
  };

  const onSignOutClick = async () => {
    await msalSignOutRequest();
  };

  return (
    <div className={homeContainerStyles()}>
      <HeroSection />

      <div className={homeTitleStyles()}>
        {t('title')}

        <button type="button" onClick={onRefreshClick}>
          Refresh
        </button>

        <button type="button" onClick={onSignOutClick}>
          Sign Out
        </button>

        <div>{accessToken}</div>
      </div>
    </div>
  );
}

export default Home;
