import React, {useEffect, useRef, useState} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonButton, 
    IonIcon,
    IonLabel,
    IonInput,
    IonDatetime
} from '@ionic/react';

import { attachOutline } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const CreatePosts: React.FC<{ path: string }> = ({path}) => {

    let history = useHistory();

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const [selectedDate, setSelectedDate] = useState<string>('');

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Manage Posts"  logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <div className="manage-posts-wrapper">
                                    <div className="tenant-lease-details-info lease-info">
                                        <div>
                                            <IonLabel>Number of Tenants in Apartment</IonLabel>
                                            <IonInput className="width-25" mode="md" type="text" value={"2"} name="numberOfTenants"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Current Lease price</IonLabel>
                                            <IonInput className="width-50 lease-price" mode="md" type="text" value={"900"} name="currentLeasePrice"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Lease Start Date*</IonLabel>
                                            <div className="date-picker width-50">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseStartDate" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                        <div>
                                            <IonLabel>Lease End Date*</IonLabel>
                                            <div className="date-picker width-50">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseEndDate" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lease-scan-block">
                                        <IonLabel>Lease Scans</IonLabel>
                                        <div className="upload-photo-block">
                                            <IonButton className="upload-photo-btn" fill="solid" shape="round">
                                                <IonIcon icon={attachOutline} />
                                            </IonButton>
                                            <IonButton className="take-photo-btn" fill="solid" shape="round">
                                                <IonIcon icon="assets/images/add-photo.svg" />
                                            </IonButton>
                                        </div>
                                        
                                    </div>

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

export default CreatePosts;