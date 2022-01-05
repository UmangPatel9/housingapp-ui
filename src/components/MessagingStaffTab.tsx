import React, {useState} from "react";

import { 
    IonButton, 
    IonGrid,
    IonRow, 
    IonCol,
  } from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const MessagingStaffTab: React.FC = () => {

    return (
        <div className="tab-content">

            <div className="posts-lists message-list">
                <h4>Today</h4>
                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.postDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                                <h6 className="staff-name">Julie Jhans</h6>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">I may need the key for the main door over the weekend what should I do?</h4>
                                <p className="post-date">Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>
                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.postDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                            <h6 className="staff-name">Adrew Grenier</h6>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">What day are we changing cleaning services to?</h4>
                                <p className="post-date">Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

            </div>

            <div className="posts-lists message-list">
                <h4>Yesterday</h4>
                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.postDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                            <h6 className="staff-name">Jean Trudeau</h6>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">The front door is stuck, this may be a security risk. we should schedule repairs asap...</h4>
                                <p className="post-date">Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

            </div>

            
        </div>
        
    );
};

export default MessagingStaffTab;