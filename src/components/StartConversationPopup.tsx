import React, {useState} from 'react';

import { 
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonInput,
    IonLabel,
    IonSearchbar
} from '@ionic/react';

import { close } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const StartConversationPopup: React.FC = () => {

    const [searchText, setSearchText] = useState('');

    return (

        <IonGrid className="start-conversation-popup-wrapper">

            <div className="popup-title">
                <h3>Start a <span>Conversation</span></h3>
            </div> 

            <div className="popup-content">

                <div className="search-box">
                    <IonSearchbar mode="ios" placeholder="Search Apt # or Contact name" value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}></IonSearchbar>
                </div>
                <IonRow  className="popup-buttons">
                    <IonCol size="6">
                        <IonButton className="" fill="outline" shape="round">
                            Exit
                        </IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton className="secondary-button" fill="outline" shape="round">
                            Confirm
                        </IonButton>
                    </IonCol>
                </IonRow>
            </div>

        </IonGrid> 
        // </IonPopover>
        
    );
};

export default StartConversationPopup;