import React from "react";

import {  
    IonLabel, 
    IonButton, 
    IonGrid,
    IonRow, 
    IonCol, 
    IonList,
    IonItem,
    IonAvatar
  } from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ManageTenantGeneralTab: React.FC = () => {
    return (

        <div className="tab-content">
            <div className="requires-renewal-proposal-block">
                <h5 className="title-with-line">Requires Renewal Proposal (14)</h5>
                <IonGrid className="">
                    <IonRow className="">
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid">
                                <div>
                                    <span>Apt#</span>
                                    <h2>812</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid">
                                <div>
                                    <span>Apt#</span>
                                    <h2>812</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid">
                                <div>
                                    <span>Apt#</span>
                                    <h2>812</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid">
                                <div>
                                    <span>Apt#</span>
                                    <h2>812</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </div>
        
    );
};

export default ManageTenantGeneralTab;