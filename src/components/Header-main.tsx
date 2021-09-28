import React, { useState } from 'react';

import { 
    IonHeader, 
    IonToolbar,
    IonGrid,
    IonRow,
    IonImg,
    IonButton,
    IonButtons,
    IonBackButton,
    IonPopover,
    IonIcon
} from '@ionic/react';

import { mailOutline, personOutline } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const HeaderMain: React.FC = () => {

    const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

    return (
        
        <IonHeader className="inner-main-header">
            <IonGrid>
                <IonRow className="">

                    <IonButtons slot="start">
                        <IonBackButton icon="assets/images/back-arrow.svg" />
                    </IonButtons>

                    <div className="apart-logo">
                        <a href="/Home">
                            <IonImg className="logo" src="assets/images/aparto-logo.svg" />
                        </a>
                    </div>

                    <IonPopover
                        cssClass='my-custom-class'
                        event={popoverState.event}
                        isOpen={popoverState.showPopover}
                        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                    >
                        <p>This is popover content</p>
                    </IonPopover>
                    <IonButton className="notification-button" fill="clear" onClick={
                        (e: any) => {
                        e.persist();
                        setShowPopover({ showPopover: true, event: e })
                        }}
                    >
                        <IonIcon slot="icon-only" src="/assets/images/bell-icon.svg" />
                        <span className="notification-count">4</span>
                    </IonButton>

                    <IonButton className="message-button" fill="clear" href="#">
                        <IonIcon slot="icon-only" icon={mailOutline} />
                        {/* <span className="notification-count">4</span> */}
                    </IonButton>

                    <IonButton className="account-button" fill="clear" href="#">
                        <IonIcon slot="icon-only" icon={personOutline} />
                    </IonButton>
                    
                    <IonPopover
                        cssClass='change-property-popup'
                        event={popoverState.event}
                        isOpen={popoverState.showPopover}
                        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                    >
                        <p>This is popover content</p>
                    </IonPopover>
                    <IonButton 
                        className="change-property" 
                        fill="clear" 
                        onClick={
                            (e: any) => {
                            e.persist();
                            setShowPopover({ showPopover: true, event: e })
                        }}
                    >
                        <IonIcon slot="icon-only" src="/assets/images/icon-home.svg" />
                        <div className="proerty-name">BL1 <span className="ion-hide-lg-down">- Belvedaire 1</span></div>
                    </IonButton>

                </IonRow>
            </IonGrid>
        </IonHeader>
        
    );
};

export default HeaderMain;