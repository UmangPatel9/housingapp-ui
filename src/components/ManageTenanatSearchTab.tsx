import React from "react";

import {  
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonInput,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

import { searchSharp, addSharp } from "ionicons/icons";

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ManageTenanatSearchTab: React.FC = () => {
    return (
        <div className="tab-content">

            <div className="find-digi-lease-block">

                <h6><b>Find</b> or <b>create</b> a Digi-Lease using the apartment number.</h6>

                <div className="search-box">
                    <IonLabel>Apartment #</IonLabel>
                    <IonInput mode="md" type="text" value={"204"}></IonInput>
                    <IonButton expand="full" fill="solid" shape="round">
                        <div className="">    
                            <IonIcon icon={searchSharp}  />
                            <span className="">Search</span>
                        </div>
                    </IonButton>
                </div>

            </div>

            

            <div className="digi-lease-search-results-box">
                <h6>Here are all the lease results for <b><u>Apt 204a</u></b></h6>
                
                <div className="search-result-box">
                    <h5>Upcoming</h5>
                    <div className="lease-renewal">
                         <IonGrid className="">
                            <IonRow className="ion-align-items-center">
                                <IonCol size="1" className="">
                                    <IonIcon icon="assets/images/exclamation-mark.svg"  />
                                </IonCol>
                                <IonCol size="10" className="">
                                    <div className="renewal-lease-info">
                                        <h6><u>Lease Renewal.</u></h6>
                                        <p>This lease expires on <b>Dec. 30th 2020.</b></p>
                                        <p>Please Tap here to propose new lease</p>
                                    </div>
                                </IonCol>
                                <IonCol size="1" className="">
                                    <IonIcon icon="assets/images/plus-icon.svg" />
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                     </div>
                </div>

            </div>
        </div>
        
        
    );
};

export default ManageTenanatSearchTab;