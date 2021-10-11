import React, {useState} from "react";

import { 
    IonButton, 
    IonGrid,
    IonRow, 
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAlert 
  } from '@ionic/react';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ManageRentsGeneralTab: React.FC = () => {

    const [rentReminderAlert, setRentReminderAlert] = useState(false);
    const [rentReminderSentAlert, setRentReminderSentAlert] = useState(false);
    const [customMessageAlert, setCustomMessageAlert] = useState(false);
    const [customMessageAlertSentAlert, setCustomMessageAlertSentAlert] = useState(false);

    return (
        <div className="tab-content">

            <div className="apartments-list-block requires-renewal-proposal-block">
                <h5 className="title-with-line">Pending Payment (7)</h5>

                <IonCard className="tenants-rent-details-card">
                    <IonCardHeader>
                        <IonCardTitle>Actions</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>

                        <IonButton 
                            className="set-reminder-btn" 
                            routerLink="#" 
                            fill="outline" 
                            shape="round"
                            onClick={() =>
                                setRentReminderAlert(true)
                            }
                        >
                            Send Reminder
                        </IonButton>
                        <IonAlert
                            isOpen={rentReminderAlert}
                            onDidDismiss={() => setRentReminderAlert(false)}
                            cssClass='orange-alert'
                            mode='md'
                            header={'Rent Reminder'}
                            message={'<p>Are you sure you would like to send the reminder to all those that are Pending Payment?</p>'}
                            buttons={[
                                {
                                    text: 'Yes',
                                    cssClass: 'btn-primary',
                                    handler: () => {
                                        setRentReminderSentAlert(true)
                                    }
                                },
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'btn-outline',
                                    handler: () => {
                                        
                                    }
                                }
                                
                            ]}
                        />
                        <IonAlert
                            isOpen={rentReminderSentAlert}
                            onDidDismiss={() => setRentReminderSentAlert(false)}
                            cssClass='orange-alert'
                            mode='md'
                            header={'Rent reminder'}
                            message={'<p>Reminder sent successfully.</p><p>All the tenants with pending rents have been notified.</p>'}
                            buttons={[
                                {
                                    text: 'Close',
                                    role: 'cancel',
                                    cssClass: 'btn-primary',
                                    handler: () => {
                                    }
                                }
                                
                            ]}
                        />

                        <IonButton 
                            className="set-reminder-btn" 
                            routerLink="#" 
                            fill="outline" 
                            shape="round"
                            onClick={() =>
                                setCustomMessageAlert(true)
                            }
                        >
                            Send Custom Message 
                        </IonButton>
                        <IonAlert
                            isOpen={customMessageAlert}
                            onDidDismiss={() => setCustomMessageAlert(false)}
                            cssClass='orange-alert'
                            mode='md'
                            header={'Custom Reminder'}
                            message={'<p>Send a custom reminder using a message box below.</p>'}
                            inputs={[
                                {
                                  name: 'customRemiderMessageBox',
                                  type: 'textarea',
                                  label: 'Radio 2',
                                  cssClass: 'custom-reminder-message-box'
                                },
                            ]}
                            buttons={[
                                {
                                    text: 'Send',
                                    cssClass: 'btn-outline',
                                    handler: () => {
                                        setCustomMessageAlertSentAlert(true)
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'btn-outline',
                                    handler: () => {
                                        
                                    }
                                }
                                
                            ]}
                        />
                        <IonAlert
                            isOpen={customMessageAlertSentAlert}
                            onDidDismiss={() => setCustomMessageAlertSentAlert(false)}
                            cssClass='orange-alert'
                            mode='md'
                            header={'Rent reminder'}
                            message={'<p>Reminder sent successfully.</p><p>All the tenants with pending rents have been notified.</p>'}
                            buttons={[
                                {
                                    text: 'Close',
                                    role: 'cancel',
                                    cssClass: 'btn-primary',
                                    handler: () => {
                                    }
                                }
                                
                            ]}
                        />

                    </IonCardContent>
                </IonCard>

                <IonGrid className="">
                    <IonRow className="apartments-list">
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton routerLink="/rent-pay-details" expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>812</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton routerLink="/rent-pay-details" expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>407</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton routerLink="/rent-pay-details" expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>300</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                        <IonCol size="6" sizeMd="6" sizeLg="6" sizeXl="3" className="">
                            <IonButton routerLink="/rent-pay-details" expand="full" fill="solid" shape="round">
                                <div>
                                    <span>Apt#</span>
                                    <h2>621</h2>
                                </div>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="3" className="">
                            <IonButton className="show-more-button" expand="full" shape="round" fill="solid">More</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>

            
        </div>
        
    );
};

export default ManageRentsGeneralTab;