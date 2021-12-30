import React, {useState} from "react";

import {  
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonAlert
} from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const RentsPayUpcomingTab: React.FC = () => {
    
    const [quickPayAlert, setQuickPayAlert] = useState(false);
    const [paymentCompleteAlert, setPaymentCompleteAlert] = useState(false);

    return (
        <div className="tab-content">

            <div className="digi-lease-search-results-box">
                <p>Here is the list of your <b>Upcoming rent payments</b></p>

                <div className="search-result-box">
                    <h3>2021</h3>
                    <IonGrid className="">
                        <IonRow className="due-rents-list">
                            <IonCol size="12" sizeMd="12">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Due</span>: $900 CAD</p>
                                                <h4>December</h4>
                                                <p>01/12/2021</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-pay-buttons ion-text-right">
                                                <IonButton className="secondary-button choose-payment-method-button"  shape="round" fill="outline" routerLink={Routes.paymentMethod}>Choose Payment Method</IonButton>
                                                <IonButton className="quick-pay-button"  shape="round" fill="outline" onClick={() => setQuickPayAlert(true)}>Quick Pay</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid> 
                                </div>                                   
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>

                <div className="search-result-box">
                    <h3>2022</h3>
                    <IonGrid className="">
                        <IonRow className="due-rents-list">
                            <IonCol size="12" sizeMd="12">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Due</span>: $900 CAD</p>
                                                <h4>January</h4>
                                                <p>01/01/2022</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-pay-buttons ion-text-right">
                                                <IonButton className="secondary-button choose-payment-method-button"  shape="round" fill="outline" routerLink={Routes.paymentMethod}>Choose Payment Method</IonButton>
                                                <IonButton className="quick-pay-button"  shape="round" fill="outline" onClick={() => setQuickPayAlert(true)}>Quick Pay</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid> 
                                </div>                                   
                            </IonCol>

                            <IonCol size="12" sizeMd="12">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Due</span>: $900 CAD</p>
                                                <h4>February</h4>
                                                <p>01/02/2022</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-pay-buttons ion-text-right">
                                                <IonButton className="secondary-button choose-payment-method-button"  shape="round" fill="outline" routerLink={Routes.paymentMethod}>Choose Payment Method</IonButton>
                                                <IonButton className="quick-pay-button"  shape="round" fill="outline" onClick={() => setQuickPayAlert(true)}>Quick Pay</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>  
                                </div>                                  
                            </IonCol>

                            <IonCol size="12" sizeMd="12">
                                <div className="tenants-lease-info tenants-lease-payment-info ">
                                    <IonGrid className="">
                                        <IonRow className="">
                                            <IonCol size="5" sizeMd="4" className="rent-price-block paid-block">
                                                <p><span>Due</span>: $900 CAD</p>
                                                <h4>March</h4>
                                                <p>01/03/2021</p>
                                            </IonCol>
                                            <IonCol size="7" sizeMd="8" className="rent-pay-buttons ion-text-right">
                                                <IonButton className="secondary-button choose-payment-method-button"  shape="round" fill="outline" routerLink={Routes.paymentMethod}>Choose Payment Method</IonButton>
                                                <IonButton className="quick-pay-button"  shape="round" fill="outline" onClick={() => setQuickPayAlert(true)}>Quick Pay</IonButton>
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

                    <IonAlert
                        isOpen={quickPayAlert}
                        onDidDismiss={() => setQuickPayAlert(false)}
                        cssClass='orange-alert'
                        mode='md'
                        header={'Quick Pay'}
                        message={'<p>Your defualt payment method is <b>PayPal</b>. Do you confirm to pay <b>$900</b> for the month of <b>December</b> 2021?</p>'}
                        buttons={[
                            {
                                text: 'Yes',
                                cssClass: 'btn-primary',
                                handler: () => {
                                    setPaymentCompleteAlert(true)
                                }
                            },
                            {
                                text: 'No',
                                role: 'cancel',
                                cssClass: 'btn-outline',
                                handler: () => {
                                    
                                }
                            }    
                        ]}
                    />

                    <IonAlert
                        isOpen={paymentCompleteAlert}
                        onDidDismiss={() => setPaymentCompleteAlert(false)}
                        cssClass='orange-alert rent-pay-alert'
                        mode='md'
                        header={'Payment Complete'}
                        message={'<p>Your payment has been <b>processed</b>.</p> <p>Thank you!</p> <p>A receipt will be <b>e-mailed</b> to you shortly.</p>'}
                        buttons={[
                            {
                                text: 'Return to Rent Page',
                                role: 'cancel',
                                cssClass: 'btn-primary',
                                handler: () => {
                                    
                                }
                            }    
                        ]}
                    />

                </div>

            </div>
            
        </div>
        
        
    );
};

export default RentsPayUpcomingTab;