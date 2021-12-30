import React, {useState} from "react";

import {  
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonInput,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const RentsPayHistoryTab: React.FC = () => {

    return (
        <div className="tab-content">

            <div className="digi-lease-search-results-box">
                <p>Here is the list of your <b>piad months</b></p>

                <div className="search-result-box">
                    <h3>2020</h3>
                    <IonGrid className="">
                        <IonRow className="paid-rents-list">
                            <IonCol size="12" sizeXl="6">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Paid</span>: $900 CAD</p>
                                                <h4>October</h4>
                                                <p>01/10/2021</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-period-block ion-text-right">
                                                <IonButton className="secondary-button view-receipt-button"  shape="round" fill="outline">View Receipt</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid> 
                                </div>                                   
                            </IonCol>

                            <IonCol size="12" sizeXl="6">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Paid</span>: $900 CAD</p>
                                                <h4>November</h4>
                                                <p>01/11/2021</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-period-block ion-text-right">
                                                <IonButton className="secondary-button view-receipt-button"  shape="round" fill="outline">View Receipt</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>  
                                </div>                                  
                            </IonCol>

                            <IonCol size="12" sizeXl="6">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Paid</span>: $900 CAD</p>
                                                <h4>December</h4>
                                                <p>01/12/2021</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-period-block ion-text-right">
                                                <IonButton className="secondary-button view-receipt-button"  shape="round" fill="outline">View Receipt</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </div>                                    
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                                <IonButton className="show-more-button" expand="full" shape="round" fill="solid">More</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>

            </div>
            
        </div>
        
        
    );
};

export default RentsPayHistoryTab;