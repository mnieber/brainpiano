import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import { Route, Router, Switch } from 'react-router-dom';
import { StoreProvider } from '/src/app/components/StoreProvider';
import { QuizStateProvider, QuizView } from '/src/quiz/components';

type PropsT = {};

export const history = createBrowserHistory();

export const UrlRouter = observer((props: PropsT) => {
  const RouterAny = Router as any;
  const SwitchAny = Switch as any;
  const RouteAny = Route as any;

  return (
    <RouterAny history={history}>
      <SwitchAny>
        <RouteAny path="">
          <StoreProvider>
            <QuizStateProvider>
              <QuizView />
            </QuizStateProvider>
          </StoreProvider>
        </RouteAny>
      </SwitchAny>
    </RouterAny>
  );
});
