import React, {useState} from "react";

import {  
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    useIonPopover,
    createAnimation,
    IonModal
} from '@ionic/react';

import { searchSharp, close } from "ionicons/icons";

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const ManageRequestsPlannedTab: React.FC = () => {

    return (
        <div className="tab-content">


            <div className="digi-lease-search-results-box">

                <div className="request-box">
                    <div className="search-result-box-title">
                        <h4 className="request-date">Today</h4>
                        <div className="selected-filter">Date Scheduled</div>
                    </div>
                    <div className="request-box-info">
                        <IonButton 
                            className="view-lease-info-button" fill="clear" expand="full" shape="round">
                        </IonButton>
                        <IonGrid className="">
                            <IonRow className="">
                                <IonCol size="6" className="request-title-col">
                                    <h5 className="request-title">Water Leakage</h5>
                                </IonCol>
                                <IonCol size="6" className="request-status-col">
                                    <div className="request-status pending">Pending</div>
                                </IonCol> 
                                <IonCol size="4" className="request-details-col">
                                    <h6>Scheduled Date</h6>
                                    <p>Feb. 5, 2020</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Time</h6>
                                    <p>10:00am</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Apt</h6>
                                    <p>504</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                    </div>

                    <div className="request-box-info">
                        <IonButton 
                            className="view-lease-info-button" fill="clear" expand="full" shape="round">
                        </IonButton>
                        <IonGrid className="">
                            <IonRow className="">
                                <IonCol size="6" className="request-title-col">
                                    <h5 className="request-title">Water Leakage</h5>
                                </IonCol>
                                <IonCol size="6" className="request-status-col">
                                    <div className="request-status confirmed">Confirmed</div>
                                </IonCol> 
                                <IonCol size="4" className="request-details-col">
                                    <h6>Scheduled Date</h6>
                                    <p>Feb. 5, 2020</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Time</h6>
                                    <p>10:00am</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Apt</h6>
                                    <p>504</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                    </div>                   
                </div>

                <div className="request-box">
                    <div className="search-result-box-title">
                        <h4 className="request-date">Yesterday</h4>
                        <div className="selected-filter">Date Scheduled</div>
                    </div>
                    <div className="request-box-info">
                        <IonButton 
                            className="view-lease-info-button" fill="clear" expand="full" shape="round">
                        </IonButton>
                        <IonGrid className="">
                            <IonRow className="">
                                <IonCol size="6" className="request-title-col">
                                    <h5 className="request-title">Water Leakage</h5>
                                </IonCol>
                                <IonCol size="6" className="request-status-col">
                                    <div className="request-status pending">Pending</div>
                                </IonCol> 
                                <IonCol size="4" className="request-details-col">
                                    <h6>Scheduled Date</h6>
                                    <p>Feb. 5, 2020</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Time</h6>
                                    <p>10:00am</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Apt</h6>
                                    <p>504</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                    </div>
                </div>

                <div className="request-box">
                    <div className="search-result-box-title">
                        <h4 className="request-date">Jan. 1<sup>st</sup> 2022</h4>
                        <div className="selected-filter">Date Scheduled</div>
                    </div>
                    <div className="request-box-info">
                        <IonButton 
                            className="view-lease-info-button" fill="clear" expand="full" shape="round">
                        </IonButton>
                        <IonGrid className="">
                            <IonRow className="">
                                <IonCol size="6" className="request-title-col">
                                    <h5 className="request-title">Water Leakage</h5>
                                </IonCol>
                                <IonCol size="6" className="request-status-col">
                                    <div className="request-status pending">Pending</div>
                                </IonCol> 
                                <IonCol size="4" className="request-details-col">
                                    <h6>Scheduled Date</h6>
                                    <p>Feb. 5, 2020</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Time</h6>
                                    <p>10:00am</p>
                                </IonCol>
                                <IonCol size="4" className="request-details-col">
                                    <h6>Apt</h6>
                                    <p>504</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                    </div>
                </div>

            </div>
            
        </div>
        
        
    );
};

export default ManageRequestsPlannedTab;