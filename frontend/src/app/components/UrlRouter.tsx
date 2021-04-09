import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { createBrowserHistory } from 'history';
import {
  ManageVoicingsView,
  LoadVoicingsEffect,
} from 'src/voicings/components';
import { QuizView } from 'src/quiz/components';

type PropsT = {};

export const history = createBrowserHistory();

export const UrlRouter: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <Router history={history}>
      <LoadVoicingsEffect />
      <Switch>
        <Route path="/quiz">
          <QuizView />
        </Route>
        <Route path="/voicings">
          <Switch>
            <Route path="/voicings/manage-voicings/">
              <ManageVoicingsView />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
});
