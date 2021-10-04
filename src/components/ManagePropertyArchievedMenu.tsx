import React, { useState } from 'react';

import { 
    IonContent, 
    IonPage, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonList,
    IonIcon,
    IonPopover,
    IonItem,
} from '@ionic/react';

import { ellipsisVerticalSharp } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ManagePropertyArchievedMenu: React.FC = () => {

    const [popoverState, setShowPopover] = useState<{showPopover: boolean, event: Event | undefined}>({ showPopover: false, event: undefined });

    return (
        <div>
            <IonPopover
                cssClass='manage-property-more-menu'
                mode="ios"
                event={popoverState.event}
                isOpen={popoverState.showPopover}
                onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
            >   
                <IonList>
                    <IonItem>
                        <IonButton fill="clear" href="#">Restore</IonButton>
                    </IonItem>
                </IonList>
            </IonPopover>

            <IonButton 
            className="manage-property-more-menu-button" 
            fill="clear" 
            onClick={
                (e) => {
                    // e.persist();
                    setShowPopover({ showPopover: true, event: e.nativeEvent })
                }}
            >
                <IonIcon slot="icon-only" icon={ellipsisVerticalSharp} />
            </IonButton>
        </div>
    );
};

export default ManagePropertyArchievedMenu;