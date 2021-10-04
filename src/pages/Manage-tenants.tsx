import { 
    IonContent, 
    IonPage, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
  
import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';
import ManageTenantGeneralTab from '../components/ManageTenanatGeneralTab';
import ManageTenanatSearchTab from '../components/ManageTenanatSearchTab';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
  
const ManageTenants: React.FC = () => {

    const openChangePropertyPopup = () => {
        let element: HTMLElement = document.getElementsByClassName('change-property')[0] as HTMLElement;
        element.click();
    };

    return (
        <IonPage>
  
           <HeaderMain />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                        <IonReactRouter>
                            <IonPage id="main">
                                <IonTabs>

                                    <IonRouterOutlet>
                                        <Route path="/:tab(manage-tenants-general)" component={ManageTenantGeneralTab} exact={true} />
                                        <Route path="/:tab(manage-tenants-search)" component={ManageTenanatSearchTab} exact={true} />
                                        <Route exact path="/Manage-tenants" render={() => <Redirect to="/manage-tenants-general" />} />
                                    </IonRouterOutlet>

                                    <IonTabBar slot="top">
                                        <IonTabButton tab="manage-tenanats-general" href="/manage-tenants-general">
                                            <IonLabel>General</IonLabel>
                                        </IonTabButton>
                                        <IonTabButton tab="tab2" href="/manage-tenants-search">
                                            <IonLabel>Search</IonLabel>
                                        </IonTabButton>
                                        
                                    </IonTabBar>

                                </IonTabs>
                            </IonPage>
                            </IonReactRouter> 
                        </IonCol>
                        {/* dashboar content end */}


                        {/* dashboar posts start */}
                        <IonCol  className="dashboard-posts" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                            
                        </IonCol>
                        {/* dashboar post end */}
    
                    </IonRow>
                </IonGrid>
              
                <Footer />

            </IonContent>

            <FooterMobile />
      </IonPage>
    );
  };
  
  export default ManageTenants;