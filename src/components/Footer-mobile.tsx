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

const FooterMobile: React.FC = () => {

    const [popoverState, setShowPopover] = useState<{showPopover: boolean, event: Event | undefined}>({ showPopover: false, event: undefined });

    return (
        <IonFooter className="ion-hide-lg-up">
            <IonGrid>

                <IonRow>
                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-notification-button" fill="clear">
                            <IonIcon slot="icon-only" src="/assets/images/bell-icon.svg" />
                        </IonButton>
                    </IonCol>

                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-home-button" fill="clear">
                            <IonIcon slot="icon-only" src="/assets/images/home-icon.svg" />
                        </IonButton>
                    </IonCol>

                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-message-button" fill="clear">
                            <IonIcon slot="icon-only" src="/assets/images/mail_outline_black_24dp.svg" />
                        </IonButton>
                    </IonCol>

                    <IonPopover
                        cssClass='my-custom-class' 
                        mode="ios"
                        event={popoverState.event}
                        isOpen={popoverState.showPopover}
                        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                    >
                        <IonList className="footer-mobile-menu">
                            <IonItem>
                                <IonButton className="" fill="clear" href="#">
                                    <div className="">
                                        <IonIcon icon="/assets/images/swap-horizontal.svg"  />
                                        <span className="">Tenant Account</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" href="#">
                                    <div className="">    
                                        <IonIcon icon="/assets/images/ios-person.svg"  />
                                        <span className="">Account Settings</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" href="#">
                                    <div className="">    
                                        <IonIcon icon="/assets/images/bill-icon.svg"  />
                                        <span className="">Billing History</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" href="#">
                                    <div className="">    
                                        <IonIcon icon={settingsSharp}  />
                                        <span className="">Service Settings</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" href="#">
                                    <div className="">    
                                        <IonIcon />
                                        <span className="">FAQ</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" href="#">
                                    <div className="">    
                                        <IonIcon />
                                        <span className="">Logout</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                        </IonList>
                    </IonPopover>
                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton 
                            className="footer-menu-button" 
                            fill="clear"
                            onClick={
                                    (e) => {
                                    // e.persist();
                                    setShowPopover({ showPopover: true, event: e.nativeEvent })
                                }}
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