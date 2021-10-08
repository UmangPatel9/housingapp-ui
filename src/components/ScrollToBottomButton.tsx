import React, {useRef} from "react";

import { 
    IonButton, 
    IonIcon
} from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const scrollToBottomButton: React.FC<{ classRef: string; }> = props => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    return (
        <IonButton className="scroll-to-bottom-btn" onClick={scrollToBottom} fill="clear">
            <IonIcon icon="assets/images/scroll-to-bottom-icon.svg" />
        </IonButton>
    );
}

export default scrollToBottomButton;