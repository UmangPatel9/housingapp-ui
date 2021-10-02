import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Index';
import ForgetPassword from './pages/Forget-Password';
import ResetPassword from './pages/Reset-Password';
import Signup from './pages/Signup';
import StaffSignup from './pages/Staff-signup';
import TenantSignup from './pages/Tenant-signup';
import ManagementDashboard from './pages/Management-dashboard';
import ManagementSignup from './pages/Management-signup';
import ManageProperties from './pages/Manage-properties';
import AddNewProperty from './pages/Add-new-property';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/index">
          <Home />
        </Route>
        <Route exact path="/">
          {/* <Redirect to="/index" /> */}
          <Home />
        </Route>
        <Route exact path="/forget-password">
          <ForgetPassword />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/management-signup">
          <ManagementSignup />
        </Route>
        <Route exact path="/staff-signup">
          <StaffSignup />
        </Route>
        <Route exact path="/tenant-signup">
          <TenantSignup />
        </Route>
        <Route exact path="/management-dashboard">
          <ManagementDashboard />
        </Route>
        <Route exact path="/manage-properties">
          <ManageProperties />
        </Route>
        <Route exact path="/add-new-property">
          <AddNewProperty />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
