import React from 'react';
import MainHeader from './MainHeader';
import LoadingIndicator from 'app/client/components/LoadingIndicator';
import GoogleAnalytics from 'modules/_lib/analytics/components/GoogleAnalytics';

import styles from 'styles/main/MainLayout.css';

export default function MainLayout(props) {
  return (
    <div>
      <MainHeader />

      <div className={ styles.mainContainer }>
        {props.children}
      </div>

      <LoadingIndicator />

      <GoogleAnalytics />
    </div>
  );
}

export default MainLayout;
