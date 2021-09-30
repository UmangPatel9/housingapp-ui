import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem, IonList, IonRadioGroup, IonListHeader, IonRadio } from '@ionic/react';
import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Signup: React.FC = () => {

  // const [selected, setSelected] = useState<string>();
  var radioButtonValue = "";
  let history = useHistory();
  const inputChangeHandler = (event: CustomEvent) => {
    if(event.detail.value && event.detail.value === "tenant") {
      console.log('tanant selected');
      radioButtonValue = "tenant";
    }
    else if(event.detail.value && event.detail.value === "management") {
      console.log('management selected');
      radioButtonValue = "management";
    }
    else if(event.detail.value && event.detail.value === "staff") {
      console.log('staff selected');
      radioButtonValue = "staff";
    }
  };
  

  const pageRediect = () => {
    if ( radioButtonValue == "tenant" ) {
      console.log('tenant checked');
      history.push("/Tenant-signup");
    }
    else if ( radioButtonValue == "management" ) {
      console.log('management checked');
      history.push("/Management-signup");
    }
    else if ( radioButtonValue == "staff" ) {
      console.log('staff checked');
      history.push("/Staff-signup");
    }
  };

  return (
    <IonPage>

        <Header />

        <IonContent fullscreen>
            <IonGrid>
                <IonRow className="signup-form login-form-row ">
                    <IonCol size="10" sizeMd="6" sizeLg="6">
                        {/* <p>What are you registering as?</p> */}
                        <IonList>
                          <IonRadioGroup value="tenant" onIonChange={inputChangeHandler}>
                            <IonListHeader>
                              <IonLabel>
                                What are you registering as?
                              </IonLabel>
                            </IonListHeader>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                Tenant
                                <p>I am (or plan on) renting an apartment, condos or houses.</p>
                              </IonLabel>
                              <IonRadio mode="md" value="tenant" />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                Management
                                <p>I am plan to add and manage properties or apartments to rent.</p>
                              </IonLabel>
                              <IonRadio mode="md" value="management" />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                Staff
                                <p>I am staff member for a property.</p>
                              </IonLabel>
                              <IonRadio mode="md" value="staff" />
                              
                            </IonItem>

                          </IonRadioGroup>
                        </IonList>

                        
                    </IonCol>

                    <IonCol size="8" sizeMd="4" sizeLg="4">
                      <IonButton className="secondary-button" type="submit" expand="block" shape="round" fill="outline" onClick={pageRediect}>
                          Continue
                      </IonButton>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>

    </IonPage>
  );
};

export default Signup;