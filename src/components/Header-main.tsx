import React, { useState } from 'react';

import { 
    IonHeader, 
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonButtons,
    IonBackButton,
    IonPopover,
    IonIcon,
    IonList,
    IonRadioGroup,
    IonListHeader,
    IonItem,
    IonLabel,
    IonRadio
} from '@ionic/react';

import { createOutline, addOutline } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const HeaderMain: React.FC = () => {

    const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

    const [changePropertypopoverState, setShowchangePropertyPopover] = useState({ showPopover: false, event: undefined });

    const inputChangeHandler = (event: CustomEvent) => {

    };

    return (
        
        <IonHeader className="inner-main-header">
            <IonGrid>
                <IonRow className="">

                    <IonButtons slot="start">
                        <IonBackButton icon="assets/images/back-arrow.svg" text="back" defaultHref="/" />
                    </IonButtons>

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
                        (e: any) => {
                        e.persist();
                        setShowPopover({ showPopover: true, event: e })
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
                    
                    <IonPopover
                        cssClass='change-property-popup'
                        event={changePropertypopoverState.event}
                        isOpen={changePropertypopoverState.showPopover}
                        onDidDismiss={() => setShowchangePropertyPopover({ showPopover: false, event: undefined })}
                    >
                        <p>Select a propeprty...</p>
                        <IonList>
                          <IonRadioGroup onIonChange={inputChangeHandler}>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                BL1 - Belvedaire 1
                                <p>10 Maisonneuve, Montreal</p>
                              </IonLabel>
                              <IonRadio 
                                value="BL1"
                              />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                4MS - 400 Maisonneuve
                                <p>400 Maisonneuve, Montreal</p>
                              </IonLabel>
                              <IonRadio value="4MS" />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                BL2 - Belvedaire 2
                                <p>20 Maisonneuve, Montreal</p>
                              </IonLabel>
                              <IonRadio value="BL2" />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                1BR - 100 Berri
                                <p>400 Maisonneuve, Montreal</p>
                              </IonLabel>
                              <IonRadio value="1BR" />
                            </IonItem>

                          </IonRadioGroup>
                        </IonList>
                        <IonGrid>
                          <IonRow>
                            <IonCol size="6" className="login-btn">
                              <IonButton className="manage-property-btn" href="#" expand="block" shape="round" fill="solid" >
                                <div className="button-inner">
                                  <IonIcon icon={createOutline} />
                                  <span>Manage List of Properties</span>
                                </div>
                              </IonButton>
                            </IonCol>
                            <IonCol size="6" className="login-btn">
                              <IonButton className="add-property-btn secondary-button" href="#" expand="block" shape="round" fill="solid">
                                <div className="button-inner">
                                  <IonIcon icon={addOutline} />
                                  <span>Add a Property</span>
                                </div>
                              </IonButton>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                    </IonPopover>
                    <IonButton 
                        className="change-property" 
                        fill="clear" 
                        onClick={
                            (e: any) => {
                            e.persist();
                            setShowchangePropertyPopover({ showPopover: true, event: e })
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