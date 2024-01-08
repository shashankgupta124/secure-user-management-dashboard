import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouterProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

// Add a PrivateRoute component to protect the DashboardPage
interface PrivateRouteProps extends RouterProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.user.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Redirect from="/" to="/signin" />
      </Switch>
    </Router>
  );
};

export default App;
