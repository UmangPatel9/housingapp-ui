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
    IonList,
    IonRadioGroup,
    IonItem,
    IonLabel,
    IonRadio
} from '@ionic/react';

import ChangePropertyPopover from './Change-Property-Popup';

import { createOutline, addOutline, close } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const HeaderMain: React.FC<{ pageTitle: string; logoHide: string; }> = props => {
    
    let history = useHistory();
    
    const [popoverState, setShowPopover] = useState<{showPopover: boolean, event: Event | undefined}>({ showPopover: false, event: undefined });

    const [changeProperty, setChangeProperty] = useState({ showPopover: false, event: undefined });

    const [present, dismiss] = useIonPopover(ChangePropertyPopover, { onHide: () => dismiss() });

    const pageBack = () => {
      history.goBack();
    };

    const inputChangeHandler = (event: CustomEvent) => {

    };

    const closePopup = () => {
        setChangeProperty({ showPopover: false, event: undefined })
    };

    return (
        
        <IonHeader className="inner-main-header">
            <IonGrid>
                <IonRow className="">

                    <IonButton className="back-buton" fill="clear"  onClick={pageBack}>
                        <IonIcon slot="icon-only" src="/assets/images/back-arrow.svg" />
                    </IonButton>

                    <div className="apart-logo">
                        <IonButton className={props.logoHide} routerLink="/" fill="clear">
                            <IonImg className="logo" src="assets/images/aparto-logo.svg" />
                        </IonButton>
                    </div>

                    <h2 className="header-page-title">{props.pageTitle}</h2>

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

                    <IonButton className="message-button ion-hide-lg-down" fill="clear" routerLink="#">
                        <IonIcon slot="icon-only" src="/assets/images/mail_outline_black_24dp.svg" />
                        {/* <span className="notification-count">4</span> */}
                    </IonButton>

                    <IonButton className="account-button ion-hide-lg-down" fill="clear" routerLink="#">
                        <IonIcon slot="icon-only" src="/assets/images/ios-person.svg"/>
                    </IonButton>
                        
                    <IonPopover
                        cssClass='change-property-popup'
                        event={changeProperty.event}
                        isOpen={changeProperty.showPopover}
                        onDidDismiss={() => setChangeProperty({ showPopover: false, event: undefined })}
                    >
                        <IonGrid className="change-property-popup-wrapper">
                            <IonButton className="close-popup-button" fill="clear" onClick={closePopup}>
                                <IonIcon icon={close} />
                            </IonButton>   
                            <IonList>
                                <p>Select a propeprty...</p>
                                <IonRadioGroup onIonChange={inputChangeHandler}>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        BL1 - Belvedaire 1
                                        <p>10 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="BL1" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        4MS - 400 Maisonneuve
                                        <p>400 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="4MS" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        BL2 - Belvedaire 2
                                        <p>20 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="BL2" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        1BR - 100 Berri
                                        <p>400 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="1BR" />
                                </IonItem>

                                </IonRadioGroup>
                            </IonList>

                            <IonGrid>
                                <IonRow>
                                    <IonCol size="6" className="login-btn">
                                        <IonButton className="manage-property-btn secondary-button" routerLink={Routes.manageProperties} expand="block" shape="round" fill="outline" onClick={closePopup}>
                                            <div className="button-inner">
                                                <IonIcon icon={createOutline} />
                                                <span>Manage List of Properties</span>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol size="6" className="login-btn">
                                        <IonButton className="add-property-btn" routerLink={Routes.addNewProperty} expand="block" shape="round" fill="outline" onClick={closePopup}>
                                            <div className="button-inner">
                                                <IonIcon icon={addOutline} />
                                                <span>Add a Property</span>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonGrid>
                    </IonPopover>

                    <IonButton 
                        className="change-property" 
                        fill="clear" 
                        // onClick={(e) =>
                        //   present({
                        //     event: e.nativeEvent,
                        //     cssClass: 'change-property-popup'
                        //   })
                        // }
                        onClick={
                            (e: any) => {
                              e.persist();
                              setChangeProperty({ showPopover: true, event: e })
                        }}
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