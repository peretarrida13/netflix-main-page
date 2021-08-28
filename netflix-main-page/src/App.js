import { Switch, Route } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={MainPage}/>
        <Route path='/*' component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default App;
