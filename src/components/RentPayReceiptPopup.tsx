import React from 'react';

import { 
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonInput,
    IonLabel,
    createAnimation
} from '@ionic/react';

import { close } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const RentPayReceiptPopup: React.FC = () => {

    
    

    return (

        <IonGrid className="rent-pay-receipt-popup-wrapper">

            <div className="popup-title">
                <h4>Receipt</h4>
                {/* <IonButton className="close-popup-button" fill="clear">
                    <IonIcon icon={close} />
                </IonButton> */}
            </div> 

            <IonRow className="receipt-details">
                <IonCol size="6">
                    <IonLabel>Apartment</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"201"} name="receiptApartment" readonly></IonInput>
                </IonCol>

                <IonCol size="6">
                    <IonLabel>Rent Period</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"Jan. 1st - Jan. 30th, 2020"} name="receiptRentPeriod" readonly></IonInput>
                </IonCol>

                <IonCol size="6">
                    <IonLabel>Payment Method</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"Interac"} name="receiptPaymentMethod" readonly></IonInput>
                </IonCol>

                <IonCol size="6">
                    <IonLabel>Card Number</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"**** **** *123"} name="receiptCardNumber" readonly></IonInput>
                </IonCol>

                <IonCol size="6">
                    <IonLabel>Rent Cost</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"$900"} name="receiptRentCost" readonly></IonInput>
                </IonCol>

                <IonCol size="6">
                    <IonLabel>TPS</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"N/A"} name="receiptTPS" readonly></IonInput>
                </IonCol>

                <IonCol size="6">
                    <IonLabel>TVQ</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonInput mode="md" type="text" value={"N/A"} name="receiptTVQ" readonly></IonInput>
                </IonCol>
            </IonRow>

            <IonRow  className="receipt-amount">
                <IonCol size="12">
                    <IonLabel>Total Paid</IonLabel>
                </IonCol>
                <IonCol size="12">
                    <p className="total-rent-paid"><b>$900 CAD</b></p>
                </IonCol>
                <p className="rent-paid-date">Paid: <span className="paid-date">22/Jan/2020</span></p>
            </IonRow>

        </IonGrid> 
        // </IonPopover>
        
    );
};

export default RentPayReceiptPopup;