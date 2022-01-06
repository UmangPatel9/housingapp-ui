import React from 'react';

import { 
    IonButton,  
    IonItem, 
    IonList, 
    IonIcon
} from '@ionic/react';

import { settingsSharp } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const FooterMenuPoup: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => {
    return (
        <div className="footer-menu">
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
        </div>
    );
} 

export default FooterMenuPoup;