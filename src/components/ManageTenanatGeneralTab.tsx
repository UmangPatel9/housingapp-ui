import React from "react";

import { 
    IonButton, 
    IonGrid,
    IonRow, 
    IonCol
} from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ManageTenantGeneralTab: React.FC = () => {
    return (
        <div className="tab-content">
            <div className="apartments-list-block requires-renewal-proposal-block">
                <h5 className="title-with-line">Requires Renewal Proposal (14)</h5>
                <IonGrid className="">
                    <IonRow className="apartments-list">
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>812</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>407</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>300</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>621</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton className="show-more-button" expand="full" shape="round" fill="solid">More</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>

            <div className="apartments-list-block unoccupied-apartments-block">
                <h5 className="title-with-line">Unoccupied Apartments (7)</h5>
                <IonGrid className="">
                    <IonRow className="apartments-list">
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>502</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>312</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>300</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>621</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton className="show-more-button" expand="full" shape="round" fill="solid">More</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </div>
        
    );
};

export default ManageTenantGeneralTab;