import React from "react";

import { 
    IonFooter, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonButton,
    IonIcon
} from '@ionic/react';

import { menuOutline } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const FooterMobile: React.FC = () => {
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

                    <IonCol className="footer-bottom-col" size="3">
                        <IonButton className="footer-menu-button" fill="clear">
                            <IonIcon slot="icon-only" icon={menuOutline} />
                        </IonButton>
                    </IonCol>
                </IonRow>

            </IonGrid>
        </IonFooter>
        
    );
};

export default FooterMobile;