import React from "react";

import {  
    IonLabel, 
    IonButton,  
    IonCol, 
    IonList,
    IonItem,
    IonAvatar
  } from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const DashboardSidebar: React.FC = () => {
    return (

        <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
            <p className="ion-hide-lg-up">What would you like to do today?</p>

            <IonList className="sidebar-menu-list">
                <IonItem>
                    <IonButton className="dashboard-button" fill="clear" href="/manage-tenants">
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Manage-Lease-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label">Manage <b>Tenants</b> & <b>Leases</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="dashboard-button" fill="clear" href="#">
                        <div className="dashboard-button-inner">    
                            <IonAvatar>
                                <img src="assets/images/Pay-Rent-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label">Manage <b>Rents</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="dashboard-button" fill="clear" href="#">
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Repair-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label">Manage <b>Requests</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="dashboard-button" fill="clear" href="#">
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Posts-Home-Icon.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label">Manage <b>Posts</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="dashboard-button" slot="start" fill="clear" href="#">
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Staff-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label">Manage <b>Staff</b> accesses</IonLabel>
                        </div>
                    </IonButton>
                </IonItem>
            </IonList>
        </IonCol>
        
    );
};

export default DashboardSidebar;