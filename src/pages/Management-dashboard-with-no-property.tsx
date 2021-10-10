import React, {useRef} from "react";

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
  
const ManagementDashboardWithNoProperty: React.FC = () => {

    const openChangePropertyPopup = () => {
        let element: HTMLElement = document.getElementsByClassName('change-property')[0] as HTMLElement;
        element.click();
    };

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    return (
        <IonPage>
  
           <HeaderMain />
  
           <IonContent className="dashboard-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <h4>Hi John,</h4>
                            <p>You are presently managing the following property:</p>

                            <IonList className="property-list no-property-selected">
                                <div  className="property-list-item">
                                    <div  className="property-list-item-content">
                                        <div className="property-item-footer">
                                            {/* <h4>Add a property</h4> */}
                                            <IonButton 
                                                className="change-property-button" 
                                                fill="clear"
                                                expand="block" 
                                                onClick={openChangePropertyPopup}
                                            >
                                                <span>Add a property</span>
                                                <IonIcon src="/assets/images/add-property-con.svg" />
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

                <IonButton className="scroll-to-bottom-btn" onClick={scrollToBottom} fill="clear">
                    <IonIcon icon="assets/images/scroll-to-bottom-icon.svg" />
                </IonButton>
              
                <Footer />

            </IonContent>

            <FooterMobile />
      </IonPage>
    );
  };
  
  export default ManagementDashboardWithNoProperty;