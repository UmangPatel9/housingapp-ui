import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { 
    IonHeader, 
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonPopover,
    IonIcon,
    useIonPopover,
} from '@ionic/react';

import ChangePropertyPopover from './Change-Property-Popup';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const HeaderMain: React.FC = () => {
    
    let history = useHistory();
    
    const [popoverState, setShowPopover] = useState<{showPopover: boolean, event: Event | undefined}>({ showPopover: false, event: undefined });

    const [present, dismiss] = useIonPopover(ChangePropertyPopover, { onHide: () => dismiss() });

    const pageBack = () => {
      history.goBack();
    };

    return (
        
        <IonHeader className="inner-main-header">
            <IonGrid>
                <IonRow className="">

                    <IonButton className="back-buton" fill="clear"  onClick={pageBack}>
                        {/* <IonBackButton icon="assets/images/back-arrow.svg" text="back" defaultHref="/" /> */}
                        <IonIcon slot="icon-only" src="/assets/images/back-arrow.svg" />
                    </IonButton>

                    <div className="apart-logo">
                        <a href="/">
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
                    <IonButton className="notification-button ion-hide-lg-down" fill="clear" onClick={
                        (e) => {
                        // e.persist();
                        setShowPopover({ showPopover: true, event: e.nativeEvent })
                        }}
                    >
                        <IonIcon slot="icon-only" src="/assets/images/bell-icon.svg" />
                        <span className="notification-count">4</span>
                    </IonButton>

                    <IonButton className="message-button ion-hide-lg-down" fill="clear" href="#">
                        <IonIcon slot="icon-only" src="/assets/images/mail_outline_black_24dp.svg" />
                        {/* <span className="notification-count">4</span> */}
                    </IonButton>

                    <IonButton className="account-button ion-hide-lg-down" fill="clear" href="#">
                        <IonIcon slot="icon-only" src="/assets/images/ios-person.svg"/>
                    </IonButton>

                    <IonButton 
                        className="change-property" 
                        fill="clear" 
                        onClick={(e) =>
                          present({
                            event: e.nativeEvent,
                            cssClass: 'change-property-popup'
                          })
                        }
                    >
                        <IonIcon slot="icon-only" src="/assets/images/home-icon.svg" />
                        <div className="proerty-name">BL1 <span className="ion-hide-lg-down">- Belvedaire 1</span></div>
                    </IonButton>

                </IonRow>
            </IonGrid>
        </IonHeader>
        
    );
};

export default HeaderMain;