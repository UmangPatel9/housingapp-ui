import React, {useState} from "react";

import { 
    IonButton, 
    IonGrid,
    IonRow, 
    IonCol,
    IonImg
  } from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const TanatDahsboadTanatsTab: React.FC = () => {

    return (
        <div className="tab-content tenant-tab-content">

            <div className="posts-lists">

                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                                <div className="image-wrapper">
                                    <IonImg className="logo" src="assets/images/post1.png" />
                                </div>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">Toaster in great condition</h4>
                                <h2 className="post-price">$20</h2>
                                <p className="post-date">Posted: Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                                <div className="image-wrapper">
                                    <IonImg className="logo" src="assets/images/post2.png" />
                                </div>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">Toaster in great condition</h4>
                                <h2 className="post-price">FREE</h2>
                                <p className="post-date">Posted: Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                                <div className="image-wrapper">
                                    <IonImg className="logo" src="assets/images/post1.png" />
                                </div>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">Toaster in great condition</h4>
                                <h2 className="post-price">$20</h2>
                                <p className="post-date">Posted: Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

                <div className="posts-list-block">
                    <IonButton className="post-details-link-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                    <IonGrid className="">
                        <IonRow className="post-row">
                            <IonCol className="post-image">
                                <div className="image-wrapper">
                                    <IonImg className="logo" src="assets/images/post2.png" />
                                </div>
                            </IonCol>
                            <IonCol className="post-content">
                                <h4 className="post-title">Toaster in great condition</h4>
                                <h2 className="post-price">$20</h2>
                                <p className="post-date">Posted: Jun. 22, 2020</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>                                    
                </div>

            </div>
   
        </div>
        
    );
};

export default TanatDahsboadTanatsTab;