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

import RentPayReceiptPopup from "./RentPayReceiptPopup";

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const ManageRentsSearchTab: React.FC = () => {

    // const [present, dismiss] = useIonPopover(RentPayReceiptPopup, { onHide: () => dismiss() });
    const [showModal, setShowModal] = useState(false);

    const enterAnimation = (baseEl: any) => {
        const backdropAnimation = createAnimation()
          .addElement(baseEl.querySelector('ion-backdrop')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
    
        const wrapperAnimation = createAnimation()
          .addElement(baseEl.querySelector('.modal-wrapper')!)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' }
          ]);
    
        return createAnimation()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
    }
    
    const leaveAnimation = (baseEl: any) => {
        return enterAnimation(baseEl).direction('reverse');
    }

    return (
        <div className="tab-content">

            <div className="find-digi-lease-block">

                <h6>Find an apartment and manage its rent.</h6>

                <div className="search-box">
                    <IonLabel>Apartment #</IonLabel>
                    <IonInput mode="md" type="text" value={"502"}></IonInput>
                    <IonButton expand="full" fill="solid" shape="round">
                        <div className="">    
                            <IonIcon icon={searchSharp}  />
                            <span className="">Search</span>
                        </div>
                    </IonButton>
                </div>

            </div>

            <div className="digi-lease-search-results-box">
                <h6><b>Payment history</b> for <b><u>Apt 502</u></b></h6>

                <div className="search-result-box">
                    <h5>Upcoming (Current Lease)</h5>
                    <div className="tenants-lease-info tenants-lease-payment-info ">
                        <IonButton className="edit-lease-info-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails}></IonButton>
                         <IonGrid className="">
                            <IonRow className="">
                                <IonCol size="3" sizeMd="3" sizeLg="2" sizeXl="2" className="rent-price-block due-block">
                                    <h6>Due:</h6>
                                    <p>$910</p>
                                </IonCol>
                                <IonCol size="4" sizeMd="3" sizeLg="2" sizeXl="2" className="payment-date-block">
                                    <h6>Due Date:</h6>
                                    <p>Feb. 1st 2021</p>
                                </IonCol>
                                <IonCol size="5" sizeMd="6" sizeLg="8" sizeXl="8" className="rent-period-block">
                                    <h6>Rent Period:</h6>
                                    <p>Jan. 1st <IonIcon icon="assets/images/arrow-right.svg" />Jan. 30th</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                    </div>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton className="show-more-button" expand="full" shape="round" fill="solid">More</IonButton>
                        </IonCol>
                    </IonRow>
                </div>

                <div className="search-result-box">
                    <h5>Past</h5>
                    <div className="tenants-lease-info tenants-lease-payment-info ">
                        {/* <IonButton 
                            className="view-lease-info-button"
                            fill="clear" 
                            expand="full" 
                            shape="round"
                            onClick={() =>
                                present({
                                  cssClass: 'rent-pay-receipt-popup'
                                })
                            }
                        >
                        </IonButton> */}
                        <IonButton 
                            className="view-lease-info-button" 
                            fill="clear" 
                            expand="full" 
                            shape="round" 
                            onClick={() => setShowModal(true)}
                        >
                        </IonButton>
                        <IonGrid className="">
                            <IonRow className="">
                                <IonCol size="3" sizeMd="3" sizeLg="2" sizeXl="2" className="rent-price-block paid-block">
                                    <h6>Paid:</h6>
                                    <p>$900</p>
                                </IonCol>
                                <IonCol size="4" sizeMd="3" sizeLg="2" sizeXl="2" className="payment-date-block">
                                    <h6>Pay Date:</h6>
                                    <p>Jan. 1st 2021</p>
                                </IonCol>
                                <IonCol size="5" sizeMd="6" sizeLg="8" sizeXl="8" className="rent-period-block">
                                    <h6>Rent Period:</h6>
                                    <p>Dec. 1st <IonIcon icon="assets/images/arrow-right.svg" />Dec. 30th</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>                                    
                     </div>
                     <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton className="show-more-button" expand="full" shape="round" fill="solid">More</IonButton>
                        </IonCol>
                    </IonRow>

                    <IonModal isOpen={showModal} enterAnimation={enterAnimation} leaveAnimation=        {leaveAnimation} cssClass="rent-pay-receipt-popup">
                            <IonButton className="close-popup-button" fill="clear" onClick={() => setShowModal(false)}> 
                                <IonIcon icon={close} />
                            </IonButton>
                            <RentPayReceiptPopup />
                            {/* <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton> */}
                    </IonModal>
                    

                </div>

            </div>
            
        </div>
        
        
    );
};

export default ManageRentsSearchTab;