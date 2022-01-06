import React, { useState } from "react";

import { 
    IonFooter, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonButton,
    IonIcon,
    IonPopover,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel
} from '@ionic/react';

import { menuOutline, settingsSharp } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const FooterMobile: React.FC = () => {

    const [popoverState, setShowPopover] = useState<{showPopover: boolean, event: Event | undefined}>({ showPopover: false, event: undefined });

    const openNotificationPopup = () => {
        let element: HTMLElement = document.getElementsByClassName('notification-button')[0] as HTMLElement;
        element.click();
    };

    const openAccountPopup = () => {
        let element: HTMLElement = document.getElementsByClassName('account-button')[0] as HTMLElement;
        element.click();
    };

    return (
        <IonFooter className="ion-hide-lg-up">
            <IonGrid>

                <IonRow>
                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-notification-button" fill="clear" onClick={openNotificationPopup}>
                            <IonIcon slot="icon-only" src="/assets/images/bell-icon.svg" />
                        </IonButton>
                    </IonCol>

                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-home-button" fill="clear" routerLink={Routes.managementDashboard}>
                            <IonIcon slot="icon-only" src="/assets/images/home-icon.svg" />
                        </IonButton>
                    </IonCol>

                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-message-button" fill="clear" routerLink={Routes.messaging}>
                            <IonIcon slot="icon-only" src="/assets/images/mail_outline_black_24dp.svg" />
                        </IonButton>
                    </IonCol>

                    {/* <IonPopover
                        cssClass='footer-menu' 
                        mode="ios"
                        event={popoverState.event}
                        isOpen={popoverState.showPopover}
                        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                    >
                        <IonList className="footer-mobile-menu">
                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#">
                                    <div className="">
                                        <IonIcon icon="/assets/images/swap-horizontal.svg"  />
                                        <span className="">Tenant Account</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#">
                                    <div className="">    
                                        <IonIcon icon="/assets/images/ios-person.svg"  />
                                        <span className="">Account Settings</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#">
                                    <div className="">    
                                        <IonIcon icon="/assets/images/bill-icon.svg"  />
                                        <span className="">Billing History</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#">
                                    <div className="">    
                                        <IonIcon icon={settingsSharp}  />
                                        <span className="">Service Settings</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink={Routes.faq}>
                                    <div className="">    
                                        <IonIcon />
                                        <span className="">FAQ</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#">
                                    <div className="">    
                                        <IonIcon />
                                        <span className="">Logout</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                        </IonList>
                    </IonPopover> */}
                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton 
                            className="footer-menu-button" 
                            fill="clear"
                            onClick={openAccountPopup}
                        >
                            <IonIcon slot="icon-only" icon={menuOutline} />
                        </IonButton>
                    </IonCol>
                </IonRow>

            </IonGrid>
        </IonFooter>
        
    );
};

export default FooterMobile;