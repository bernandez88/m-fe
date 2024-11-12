import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { SiMicrosoft } from 'react-icons/si';

import { Images } from 'assets';
import { Button } from 'components';
import { msalLoginRequest } from 'providers/msal-browser';

import {
  footerText,
  headerStyles,
  leftSection,
  logoContainer,
  mainContainer,
  rightSection,
  subheaderStyles,
  textContainer,
  welcomeHeaderStyle,
} from './styles';

function Login() {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const onLogInClick = async () => {
    setLoading(true);
    await msalLoginRequest();
    setLoading(false);
  };

  return (
    <div className={mainContainer()}>
      <div className={leftSection()}>
        <div className={logoContainer()}>
          <img src={Images.mrohMainLogo} alt="Logo" width={150} height={23} />
        </div>

        <div className={textContainer()}>
          <span className={welcomeHeaderStyle()}>{t('pages.login.welcome')}</span>

          <h1 className={headerStyles()}>{t('pages.login.revenue-forecast')}</h1>

          <h2 className={headerStyles()}>{t('pages.login.system')}</h2>

          <h4 className={subheaderStyles()}>{t('pages.login.subheader')}</h4>

          <Button onClick={onLogInClick} startAdornment={<SiMicrosoft />} loading={loading} className="w-[354px]" size="large">
            {t('pages.login.log-in-microsoft')}
          </Button>
        </div>

        <div className={footerText()}>{`@${new Date().getFullYear()} ${t('pages.login.all-rights-reserved')}`}</div>
      </div>

      <div className={rightSection()} style={{ backgroundImage: `url('${Images.loginBackground}')` }} />
    </div>
  );
}

export default Login;
