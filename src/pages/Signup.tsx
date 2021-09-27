import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem, IonList, IonRadioGroup, IonListHeader, IonRadio } from '@ionic/react';
import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Signup: React.FC = () => {
  return (
    <IonPage>

        <Header />

        <IonContent fullscreen>
            <IonGrid>
                <IonRow className="login-form-row">
                    <IonCol size="10" sizeMd="6" sizeLg="6">
                        {/* <p>What are you registering as?</p> */}
                        <IonList>
                          <IonRadioGroup>
                            <IonListHeader>
                              <IonLabel>
                              What are you registering as?
                              </IonLabel>
                            </IonListHeader>

                            <IonItem>
                              <IonLabel>
                                Tenant
                                <p>I am (or plan on) renting an apartment, condos or houses.</p>
                              </IonLabel>
                              <IonRadio value="tenant" />
                            </IonItem>

                            <IonItem>
                              <IonLabel>
                                Management
                                <p>I am plan to add and manage properties or apartments to rent.</p>
                              </IonLabel>
                              <IonRadio value="management" />
                            </IonItem>

                            <IonItem>
                              <IonLabel>
                                Staff
                                <p>I am staff member for a property.</p>
                              </IonLabel>
                              <IonRadio value="staff" />
                              
                            </IonItem>

                          </IonRadioGroup>
                        </IonList>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>

    </IonPage>
  );
};

export default Signup;