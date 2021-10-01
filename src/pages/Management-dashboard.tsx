import { 
    IonContent, 
    IonPage, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonList,
    IonIcon
} from '@ionic/react';
  
import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
  
const ManagementDashboard: React.FC = () => {

    const openChangePropertyPopup = () => {
        let element: HTMLElement = document.getElementsByClassName('change-property')[0] as HTMLElement;
        element.click();
    };

    return (
        <IonPage>
  
           <HeaderMain />
  
           <IonContent className="dashboard-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <h4>Hi John,</h4>
                            <p>You are presently managing the following property:</p>

                            <IonList className="property-list">
                                <div  className="property-list-item">
                                    <div  className="property-list-item-content">
                                        <h4 className="property-name">BL1 - Belvedaire 1</h4>
                                        <p className="property-address">2030 Maisonneuve Ouest , Maisonneuve ouest</p>
                                        <div className="property-item-footer">
                                            <p className="property-owner">Concierge: Jean Francois G.</p>
                                            <IonButton 
                                                className="change-property-button" 
                                                fill="clear" 
                                                onClick={openChangePropertyPopup}
                                            >
                                                <span>Change</span>
                                                <IonIcon src="/assets/images/exchange-icon.svg" />
                                            </IonButton>
                                        </div>
                                    </div>
                                </div>
                            </IonList>
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
  
  export default ManagementDashboard;