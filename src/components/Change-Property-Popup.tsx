import React from 'react';

import { 
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonList,
    IonRadioGroup,
    IonItem,
    IonLabel,
    IonRadio
} from '@ionic/react';

import { createOutline, addOutline, close } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const ChangePropertyPopover: React.FC <{  onHide: () => void; }>= ({ onHide }) => {

    const inputChangeHandler = (event: CustomEvent) => {

    };

    return (
                    
        // <IonPopover
        //     cssClass='change-property-popup'
        //     event={changePropertypopoverState.event}
        //     isOpen={changePropertypopoverState.showPopover}
        //     onDidDismiss={() => setShowchangePropertyPopover({ showPopover: false, event: undefined })}
        // >
        <IonGrid className="change-property-popup-wrapper">
            <IonButton className="close-popup-button" onClick={onHide} fill="clear">
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
                        <IonButton className="manage-property-btn" routerLink={Routes.manageProperties} expand="block" shape="round" fill="solid" >
                            <div className="button-inner">
                                <IonIcon icon={createOutline} />
                                <span>Manage List of Properties</span>
                            </div>
                        </IonButton>
                    </IonCol>
                    <IonCol size="6" className="login-btn">
                        <IonButton className="add-property-btn secondary-button" routerLink={Routes.addNewProperty} expand="block" shape="round" fill="solid">
                            <div className="button-inner">
                                <IonIcon icon={addOutline} />
                                <span>Add a Property</span>
                            </div>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonGrid> 
        // </IonPopover>
        
    );
};

export default ChangePropertyPopover;