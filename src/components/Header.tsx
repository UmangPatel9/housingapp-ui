import React from "react";

import { useHistory } from "react-router-dom";

import { 
    IonHeader, 
    IonImg,
    IonButton,
    IonIcon
} from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Header: React.FC<{ class: string; onBack: () => void }> = props => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };

    return (
        <IonHeader className="main-header">
            <IonButton className={props.class} fill="clear"  onClick={pageBack}>
                <IonIcon slot="icon-only" src="/assets/images/back-arrow.svg" />
            </IonButton>
            <IonButton className={props.class} fill="clear"  onClick={props.onBack}>
                <IonIcon slot="icon-only" src="/assets/images/back-arrow.svg" />
            </IonButton>
            <div className="main-logo">
                <a href="/">
                    <IonImg className="logo" src="assets/images/logo.svg" />
                </a>
            </div>
        </IonHeader>
        
    );
};

export default Header;