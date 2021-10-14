import React, {useRef, useState} from "react";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonList,
    IonInput, 
    IonDatetime,
    IonLabel, 
    IonButton, 
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem
} from '@ionic/react';

import { close, attachOutline, chevronDown } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const AddNewLease: React.FC = () => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const [selectedDate, setSelectedDate] = useState<string>('');

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Manage Leases"  logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <IonRow className="apartment-lease-code-info">
                                <IonCol className="apartment-number" size="4" sizeMd="4" sizeLg="4" sizeXl="3">
                                    <IonLabel>Apartment #</IonLabel>
                                    <IonInput mode="md" type="text" value={"502"} name="apprtmentNumber" readonly></IonInput>
                                </IonCol>
                                <IonCol className="lease-code-info" size="8" sizeMd="8" sizeLg="7" sizeXl="6">
                                    <div className="lease-code">
                                        <IonLabel>Lease Code</IonLabel>
                                        <IonInput mode="md" type="text" value={"Z123 1234 1234"}  name="leaseCode" readonly></IonInput>
                                    </div>
                                </IonCol>
                            </IonRow>

                            <form>
                            <IonCard className="tenant-lease-details-card">
                                <IonCardHeader>
                                    <IonCardTitle>Tenant Details</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <div className="tenant-lease-details-info tenants-info">
                                        <div className="tenant-title-wrap">
                                            <h4>Tenant 1</h4>
                                        </div>
                                        <div>
                                            <IonLabel>First Name*</IonLabel>
                                            <IonInput mode="md" type="text" value="" name="t1FirstName"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Last Name*</IonLabel>
                                            <IonInput mode="md" type="text" value="" name="t1LastName"></IonInput>
                                        </div>
                                    </div>
                                    <IonButton fill="solid" shape="round">
                                            <IonIcon icon="assets/images/plus-icon-gray.svg" />
                                            <span className="">Add Another Tenant</span>
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="tenant-lease-details-card">
                                <IonCardHeader>
                                    <IonCardTitle>Lease Details</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <div className="tenant-lease-details-info lease-info">
                                        <div>
                                            <IonLabel>Number of Tenants in Apartment</IonLabel>
                                            <IonInput className="width-25" mode="md" type="text" value="" name="numberOfTenants"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Current Lease price</IonLabel>
                                            <IonInput className="width-50" mode="md" type="text" value="" name="currentLeasePrice"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Lease Start Date*</IonLabel>
                                            <div className="date-picker">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseStartDate" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                        <div>
                                            <IonLabel>Lease End Date*</IonLabel>
                                            <div className="date-picker">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseEndDate" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lease-scan-block">
                                        <IonLabel>Lease Scans</IonLabel>
                                        <div className="uploaded-file">
                                            <p className="uploaded-file-name"></p>
                                        </div>
                                        <div className="uploaded-file">
                                            <p className="uploaded-file-name"></p>
                                        </div>
                                        <div className="upload-photo-block">
                                            <IonButton className="upload-photo-btn" fill="solid" shape="round">
                                                <IonIcon icon={attachOutline} />
                                            </IonButton>
                                            <IonButton className="take-photo-btn" fill="solid" shape="round">
                                                <IonIcon icon="assets/images/add-photo.svg" />
                                            </IonButton>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>
                            
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="ion-text-center">
                                    <IonButton className="submit-new-lease-btn" routerLink="#" fill="outline" shape="round">Submit</IonButton>
                                    <IonButton className="cancle-btn" routerLink="#" fill="solid" shape="round">Cancle</IonButton>
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

export default AddNewLease;