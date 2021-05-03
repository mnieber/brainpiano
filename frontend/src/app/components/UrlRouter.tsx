import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { createBrowserHistory } from 'history';
import { QuizView } from 'src/quiz/components';
import { QuizStateProvider } from 'src/quiz/components';

type PropsT = {};

export const history = createBrowserHistory();

export const UrlRouter: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/quiz">
          <QuizStateProvider>
            <QuizView />
          </QuizStateProvider>
        </Route>
      </Switch>
    </Router>
  );
});
