import React, {useRef, useState, useEffect} from "react";

import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonSegment,
    IonSegmentButton,
    IonSlides,
    IonSlide,
    IonButton,
    IonIcon,
    createAnimation,
    IonModal
} from '@ionic/react';

import { chevronForwardOutline } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';
  
const MyAccount: React.FC<{ path: string }> = ({path}) => {

    return (
        <IonPage>
  
           <HeaderMain pageTitle="My Account" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content my-account-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <IonRow className="my-account-links">
                                    <IonCol className="" size="12" sizeMd="12" sizeLg="6" sizeXl="6">
                                        <IonButton className="my-account-button" fill="outline" expand="block"  routerLink={Routes.billingInfo}>
                                            <div className="button-inner">
                                                <span className="">Billing Info</span>
                                                <IonIcon icon={chevronForwardOutline}  />
                                            </div>
                                        </IonButton>
                                        <IonButton className="my-account-button" fill="outline" expand="block"  routerLink={Routes.personalInfo}>
                                            <div className="button-inner">
                                                <span className="">Personal Info</span>
                                                <IonIcon icon={chevronForwardOutline}  />
                                            </div>
                                        </IonButton>
                                        <IonButton className="my-account-button" fill="outline" expand="block"  routerLink={Routes.passwordChange}>
                                            <div className="button-inner">
                                                <span className="">Password Change</span>
                                                <IonIcon icon={chevronForwardOutline}  />
                                            </div>
                                        </IonButton>
                                        <IonButton className="my-account-button" fill="outline" expand="block"  routerLink={Routes.notifications}>
                                            <div className="button-inner">
                                                <span className="">Notification</span>
                                                <IonIcon icon={chevronForwardOutline}  />
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </div>

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
  
  export default MyAccount;