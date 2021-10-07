import React from "react";

import { 
    IonFooter, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonList, 
    IonItem,
    IonButton
} from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Footer: React.FC = () => {
    return (
        <IonFooter className="ion-hide-lg-down">
            <IonGrid>
                <IonRow>
                    <IonCol className="footer-top-col" size="12">
                        <IonList>
                            <IonItem>
                                <IonButton className="page-link" routerLink="/" fill="clear">Contact Us</IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="page-link" routerLink="/" fill="clear">About</IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="page-link" routerLink="/" fill="clear">Terms of Use</IonButton>
                            </IonItem>
                        </IonList>
                        
                    </IonCol>

                    <IonCol className="footer-bottom-col" size="12">
                        <p className="ion-text-center"> All rights reserved.</p>
                    </IonCol>
                   
                </IonRow>

            </IonGrid>
        </IonFooter>
        
    );
};

export default Footer;