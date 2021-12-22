import React, {useRef, useState} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonInput, 
    IonLabel, 
    IonButton, 
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAlert 
} from '@ionic/react';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const RentPayDetails: React.FC<{ path: string }> = ({path}) => {

    let history = useHistory();

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const [updateFileAlert, setUpdateFileAlert] = useState(false);
    const [updateFileNotificationSentAlert, setUpdateFileNotificationSentAlert] = useState(false);
    const [exitFileAlert, setExitFileAlert] = useState(false);

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Manage Rents"  logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">

                            <form>
                            <IonCard className="tenant-lease-details-card rent-pay-details-card">
                                <IonCardHeader>
                                    <IonCardTitle>Rent Pay Details</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <div className="tenant-lease-details-info rent-pay-info">
                                        <div>
                                            <IonLabel>Apaprtment</IonLabel>
                                            <IonInput mode="md" type="text" value={"502"} name="renyPayApartment" readonly></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Rent Period</IonLabel>
                                            <IonInput mode="md" type="text" value={"Dec. 1st, 2020 -> Dec.30th, 2020"} name="t1LastName" readonly></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Anticipated Pay</IonLabel>
                                            <IonInput mode="md" type="text" value={"$900"} name="anticipatedPay" readonly></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>New Anticipated Pay</IonLabel>
                                            <div className="paid-btn-wrap">
                                                <IonInput className="width-25" mode="md" type="text" value="" name="newanticipatedPay"></IonInput>
                                                <IonButton fill="outline">Mark as Paid</IonButton>
                                            </div>
                                        </div>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                            
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="ion-text-center">
                                    <IonButton 
                                        className="confirm-btn secondary-button"
                                        fill="outline" 
                                        shape="round"
                                        onClick={() =>
                                            setUpdateFileAlert(true)
                                        }
                                    >
                                        Confirm
                                    </IonButton>
                                    <IonAlert
                                        isOpen={updateFileAlert}
                                        onDidDismiss={() => setUpdateFileAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'Update File'}
                                        message={'<p>Are you sure you would like to update this file with new information?</p>'}
                                        buttons={[
                                            {
                                                text: 'Yes',
                                                cssClass: 'btn-primary',
                                                handler: () => {
                                                    setUpdateFileNotificationSentAlert(true)
                                                }
                                            },
                                            {
                                                text: 'No',
                                                role: 'cancel',
                                                cssClass: 'btn-outline',
                                                handler: () => {
                                                }
                                            }
                                            
                                        ]}
                                    />
                                    <IonAlert
                                        isOpen={updateFileNotificationSentAlert}
                                        onDidDismiss={() => setUpdateFileNotificationSentAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'Update File'}
                                        message={'<p>A notification of your update has been sent to all the tenants on this lease.</p>'}
                                        buttons={[
                                            {
                                                text: 'Close',
                                                role: 'cancel',
                                                cssClass: 'btn-primary',
                                                handler: () => {
                                                }
                                            }
                                            
                                        ]}
                                    />

                                    <IonButton 
                                        className="exit-file-btn" 
                                        routerLink={Routes.manageRents} 
                                        fill="solid" 
                                        shape="round"
                                    >
                                        Exit File
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            </form>

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

export default RentPayDetails;