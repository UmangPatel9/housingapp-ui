import React, {useRef, useState, useEffect} from "react";

import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonAlert,
    IonTextarea,
    IonIcon,
    IonButton
} from '@ionic/react';

import { sendSharp, happyOutline } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';
  
const Chat: React.FC<{ path: string }> = ({path}) => {

    const [call, setCall] = useState(false);

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Messaging" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content chat-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <IonRow className="chat-header">
                                <IonCol className="sender-details" size="12" sizeMd="4" sizeLg="4" sizeXl="3">
                                    <h6>Messaging With</h6>
                                    <h5><b>Julie.J</b></h5>
                                    <p>(Management)</p>
                                </IonCol>
                                <IonCol className="chat-time ion-text-md-right" size="12" sizeMd="8" sizeLg="8" sizeXl="9">
                                    <h6>Office hours: <b>Mon-Fri, 10am-5pm</b></h6>
                                    <h6>Call Front Desk: <a className="sender-number" onClick={() => setCall(true)}>514-XXX-XXXX</a></h6>
                                </IonCol>
                                <IonAlert
                                    isOpen={call}
                                    onDidDismiss={() => setCall(false)}
                                    cssClass='orange-alert'
                                    mode='md'
                                    header={'Call Staff'}
                                    message={'<p>Do you want to call staff, with your phone number?</p>'}
                                    buttons={[
                                        {
                                            text: 'Yes',
                                            cssClass: 'btn-primary',
                                            handler: () => {
                                                console.log('Exit File Okay');
                                            }
                                        },
                                        {
                                            text: 'No',
                                            role: 'cancel',
                                            cssClass: 'btn-outline',
                                            handler: () => {
                                                console.log('Exit File Cancel');
                                            }
                                        }
                                        
                                    ]}
                                />
                            </IonRow>

                            <div className="chat-screens">
                                <div className="chat-date">2020-10-25</div>
                                <div className="message sender">
                                    <p>I may need the key for the main door over the weekend what should I do.</p>
                                    <span className="chat-time">Julie.D. - 10:00 a.m</span>
                                </div>
                                <div className="message">
                                    <p>Talk to James he will give you access.</p>
                                    <span className="chat-time">Boss B. - 10:00 a.m</span>
                                </div>
                                <div className="message sender">
                                    <p>Ok thank You.</p>
                                    <span className="chat-time">Julie.D. - 10:00 a.m</span>
                                </div>
                                <div className="message">
                                    <p>Don't for get to return the key.</p>
                                    <span className="chat-time">Boss B. - 10:00 a.m</span>
                                </div>
                                <div className="type-message">
                                    <IonButton className="emoji-popup-button" fill="clear" >
                                        <IonIcon icon={happyOutline} />
                                    </IonButton>
                                    <IonTextarea
                                        mode="md"
                                        className="form-control"
                                    />
                                    <IonButton className="send-message-button" fill="clear" >
                                        <IonIcon icon={sendSharp} />
                                    </IonButton>

                                    
                                </div>
                            </div>

                        </IonCol>
                        {/* dashboar content end */}


                        {/* dashboar posts start */}
                        <IonCol  className="dashboard-posts" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                            
                        </IonCol>
                        {/* dashboar post end */}
    
                    </IonRow>
                </IonGrid>
              
                <Footer />

            </IonContent>

            <FooterMobile />
      </IonPage>
    );
  };
  
  export default Chat;