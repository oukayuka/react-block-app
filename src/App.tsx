import React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import { compose, pure } from 'recompose';

import Top from 'components/Top';
import i18n from 'i18n';

type AppProps = {} & RouteComponentProps<{}> & InjectedTranslateProps;

const App: React.SFC<AppProps> = ({ t }) => (
  <>
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{t('top.title')}</title>
    </Helmet>
    <Switch>
      <Route path="/" exact={true} component={Top} />
      <Redirect to="/" />;
    </Switch>
  </>
);

export default compose<AppProps, {}>(translate(), pure)(App);
