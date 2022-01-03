import React, { useRef} from "react";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonButton, 
    IonIcon
} from '@ionic/react';

import { alertCircleSharp } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const NotificationHistory: React.FC<{ path: string }> = ({path}) => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Notification History"  logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content notification-history" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <p>Here's the list of your notification history</p>
                                
                                    <div className="notification-list">
                                        <h6>Urgent</h6>
                                        <IonRow className="">
                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                            <div className="notification-box red-notification">
                                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.leaseRenewalProposal}></IonButton>
                                                <div className="notofication-content">
                                                    <div className="notification-box-header">
                                                        <h6>Lease <span>Renewal</span></h6>
                                                        {/* <div className="icon">!</div> */}
                                                        <IonIcon icon={alertCircleSharp} />
                                                    </div>
                                                    <p>Your lease ends <b>Sept. 03, 2020</b>. Tap here to see details.</p>
                                                    <span className="notification-date">Jan. 1st, 2021</span>                                  
                                                </div>
                                            </div>
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                            <div className="notification-box red-notification">
                                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                                                <div className="notofication-content">
                                                    <div className="notification-box-header">
                                                        <h6>Rent <span>Overdue</span></h6>
                                                        <IonIcon icon={alertCircleSharp} />
                                                    </div>
                                                    <p>Payment for the month of <b>Nov, 2020</b> is overdue. Tap here to pay now.</p>
                                                    <span className="notification-date">Jan. 1st, 2021</span>                                  
                                                </div>
                                            </div>
                                            </IonCol>
                                        </IonRow>
                                        
                                        <h6>Today</h6>
                                        <IonRow className="">
                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                            <div className="notification-box yellow-notification">
                                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                                                <div className="notofication-content">
                                                    <div className="notification-box-header">
                                                        <h6>Rent <span>Reminder</span></h6>
                                                        {/* <div className="icon">!</div> */}
                                                        <IonIcon slot="icon-only" src="/assets/images/Pay-Rent-icon-only.svg" />
                                                    </div>
                                                    <p>Payment for the month of <b>Jan, 2021</b> is due soon. Tap here to see details.</p>
                                                    <span className="notification-date">Jan. 1st, 2021</span>                                  
                                                </div>
                                            </div>
                                            </IonCol>
                                        </IonRow>
                                        <h6>31-12-2021</h6>
                                        <IonRow className="">
                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                            <div className="notification-box yellow-notification">
                                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                                                <div className="notofication-content">
                                                    <div className="notification-box-header">
                                                        <h6>Rent <span>Reminder</span></h6>
                                                        {/* <div className="icon">!</div> */}
                                                        <IonIcon slot="icon-only" src="/assets/images/Pay-Rent-icon-only.svg" />
                                                    </div>
                                                    <p>Payment for the month of <b>Dec, 2020</b> is due soon. Tap here to see details.</p>
                                                    <span className="notification-date">Dec. 31st, 2020</span>                                  
                                                </div>
                                            </div>
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                            <div className="notification-box yellow-notification">
                                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                                                <div className="notofication-content">
                                                    <div className="notification-box-header">
                                                        <h6>Rent <span>Reminder</span></h6>
                                                        {/* <div className="icon">!</div> */}
                                                        <IonIcon slot="icon-only" src="/assets/images/Pay-Rent-icon-only.svg" />
                                                    </div>
                                                    <p>Payment for the month of <b>Nov, 2020</b> is due soon. Tap here to see details.</p>
                                                    <span className="notification-date">Dec. 31st, 2020</span>                                  
                                                </div>
                                            </div>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                
                            </div>
                            
                        </IonCol>
                        {/* dashboar content end */}


                        {/* dashboar posts start */}
                        <IonCol  className="dashboard-posts" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                            
                        </IonCol>
                        {/* dashboar post end */}
    
                    </IonRow>
                </IonGrid>

                <IonButton className="scroll-to-bottom-btn" onClick={scrollToBottom} fill="clear">
                    <IonIcon icon="assets/images/double-arrow-down.svg" />
                </IonButton>
              
                <Footer />

            </IonContent>

            <FooterMobile />
      </IonPage>
            
        
        
    );
};

export default NotificationHistory;