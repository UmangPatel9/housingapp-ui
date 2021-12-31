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
import ManagementDashboardWithNoProperty from './pages/Management-dashboard-with-no-property';
import ManagementSignup from './pages/Management-signup';
import ManageProperties from './pages/Manage-properties';
import AddNewProperty from './pages/Add-new-property';
import ManageTenants from './pages/Manage-tenants';
import LeaseInfo from './pages/Lease-info';
import EditLeaseInfo from './pages/Edit-lease-info';
import AddNewLease from './pages/Add-new-lease';
import LeaseRenewalProposal from './pages/lease-renewal-proposal';
import ManageRents from './pages/Manage-rents';
import RentPayDetails from './pages/Rent-pay-details';
import TenantDashboard from './pages/Tenant-dashboard';
import PayRents from './pages/Pay-rent';
import PaymentMethod from './pages/Payment-method';
import ManagePosts from './pages/Manage-posts';
import CreatePosts from './pages/Create-post';

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

export const Routes = {
  indexURL: '/index',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password',
  signup: '/signup',
  managementSignup: '/management-signup', 
  staffSignup: '/staff-signup', 
  tenantSignup: '/tenant-signup',
  managementDashboard: '/management-dashboard',
  managementDashboardWithNoProperty: '/management-dashboard-with-no-property',
  manageProperties: '/manage-properties',
  addNewProperty: '/add-new-property',
  manageTenants: '/manage-tenants',
  leaseInfo: '/lease-info',
  editLeaseInfo: '/edit-lease-info',
  addNewLease: '/add-new-lease',
  leaseRenewalProposal: '/lease-renewal-proposal',
  manageRents: '/manage-rents',
  rentPayDetails: '/rent-pay-details',
  tenantDahsboard: '/tenant-dashboard',
  payRents: '/pay-rents',
  paymentMethod: '/payment-method',
  managePosts: '/manage-posts',
  createPosts: '/create-posts'
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path={Routes.indexURL}>
          <Home />
        </Route>
        <Route exact path="/">
          {/* <Redirect to="/index" /> */}
          <Home />
        </Route>
        <Route exact path={Routes.forgetPassword}>
          <ForgetPassword />
        </Route>
        <Route exact path={Routes.resetPassword}>
          <ResetPassword />
        </Route>
        <Route exact path={Routes.signup}>
          <Signup />
        </Route>
        <Route exact path={Routes.managementSignup}>
          <ManagementSignup />
        </Route>
        <Route exact path={Routes.staffSignup}>
          <StaffSignup />
        </Route>
        <Route exact path={Routes.tenantSignup}>
          <TenantSignup />
        </Route>
        <Route exact path={Routes.managementDashboard}>
          <ManagementDashboard path={Routes.managementDashboard} />
        </Route>
        <Route exact path={Routes.managementDashboardWithNoProperty}>
          <ManagementDashboardWithNoProperty path={Routes.managementDashboardWithNoProperty} />
        </Route>
        <Route exact path={Routes.manageProperties}>
          <ManageProperties path={Routes.manageProperties} />
        </Route>
        <Route exact path={Routes.addNewProperty}>
          <AddNewProperty path={Routes.addNewProperty} />
        </Route>
        <Route exact path={Routes.manageTenants}>
          <ManageTenants path={Routes.manageTenants} />
        </Route>
        <Route exact path={Routes.leaseInfo}>
          <LeaseInfo path={Routes.leaseInfo} />
        </Route>
        <Route exact path={Routes.editLeaseInfo}>
          <EditLeaseInfo path={Routes.editLeaseInfo} />
        </Route>
        <Route exact path={Routes.addNewLease}>
          <AddNewLease path={Routes.addNewLease} />
        </Route>
        <Route exact path={Routes.leaseRenewalProposal}>
          <LeaseRenewalProposal path={Routes.leaseRenewalProposal} />
        </Route>
        <Route exact path={Routes.manageRents}>
          <ManageRents path={Routes.manageRents} />
        </Route>
        <Route exact path={Routes.rentPayDetails}>
          <RentPayDetails path={Routes.rentPayDetails} />
        </Route>
        <Route exact path={Routes.tenantDahsboard}>
          <TenantDashboard path={Routes.tenantDahsboard} />
        </Route>
        <Route exact path={Routes.payRents}>
          <PayRents path={Routes.payRents} />
        </Route>
        <Route exact path={Routes.paymentMethod}>
          <PaymentMethod path={Routes.paymentMethod} />
        </Route>
        <Route exact path={Routes.managePosts}>
          <ManagePosts path={Routes.managePosts} />
        </Route>
        <Route exact path={Routes.createPosts}>
          <CreatePosts path={Routes.createPosts} />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
