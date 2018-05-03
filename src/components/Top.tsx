import React from 'react';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Link } from 'react-router-dom';

import pages from 'pages';

type TopProps = {} & InjectedTranslateProps;

const Top: React.SFC<TopProps> = ({ t }) => (
  <>
    <ul>
      <li>
        <Link to={pages.top.path}>{t('top.title')}</Link>
      </li>
    </ul>
  </>
);

export default translate()(Top);
