import React, {useState} from "react";

import { 
    IonButton, 
    IonGrid,
    IonRow, 
    IonCol
  } from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const MessagingTenantsTab: React.FC = () => {

    return (
        <div className="tab-content">

            <div className="posts-lists message-list">
                <h4>Today</h4>
                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.postDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                                <span>Apt #</span>
                                <h3>401</h3>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">Where could we leave our furnitures for disposal?</h4>
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
                                <span>Apt #</span>
                                <h3>502</h3>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">Do we have to wear masks in the hallway</h4>
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
                                <span>Apt #</span>
                                <h3>705</h3>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">I heard a very loud noise yesterday on my balcony, I think there might be a racoon. Not sure if...</h4>
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
                                <span>Apt #</span>
                                <h3>567</h3>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">I heard a very loud noise yesterday on my balcony,</h4>
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
                                <span>Apt #</span>
                                <h3>808</h3>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">I heard a very loud noise yesterday on my balcony, I think there might be a racoon. Not sure if...</h4>
                                <p className="post-date">Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

            </div>

            
        </div>
        
    );
};

export default MessagingTenantsTab;