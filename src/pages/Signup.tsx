import React, { useRef, useState } from "react";

import { useHistory } from "react-router-dom";
import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem, IonList, IonRadioGroup, IonListHeader, IonRadio } from '@ionic/react';

import { FormProvider, useForm, FieldErrors } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const TENANT = "tenant"
const MANAGEMENT = "management"
const STAFF = "staff"

const Signup: React.FC = () => {

  const [userType, setUserType] = useState<string>();
  const methods = useForm({ mode: "all"});
  const { register, handleSubmit, formState: { errors } } = methods;


  // const [selected, setSelected] = useState<string>();
  let history = useHistory();
  const inputChangeHandler = (event: CustomEvent) => {
    console.log(event?.detail?.value);
    setUserType(event?.detail?.value); 

    // if(event.detail.value && event.detail.value === "tenant") {
    //   console.log('tanant selected');
    //   radioButtonValue = "tenant";
    // }
    // else if(event.detail.value && event.detail.value === "management") {
    //   console.log('management selected');
    //   radioButtonValue = "management";
    // }
    // else if(event.detail.value && event.detail.value === "staff") {
    //   console.log('staff selected');
    //   radioButtonValue = "staff";
    // }

  };

  const onSubmit = (data: any) => {
    console.log('submit button clicked' , data);
    // if(userType) {
      history.push(`/${userType}-signup`);
    // }
  };
  

  const pageRediect = () => {
    if(userType) {
      history.push(`/${userType}-signup`);
    }
    
    // switch(userType) {
    //   case TENANT: {
    //     history.push("/Tenant-signup");
    //     break;
    //   }
    //   case MANAGEMENT: {
    //     history.push("/Management-signup");
    //     break;
    //   }
    //   case STAFF: {
    //     history.push("/Staff-signup");
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
       
    // }

    // if ( radioButtonValue == "tenant" ) {
    //   console.log('tenant checked');
    //   history.push("/Tenant-signup");
    // }
    // else if ( radioButtonValue == "management" ) {
    //   console.log('management checked');
    //   history.push("/Management-signup");
    // }
    // else if ( radioButtonValue == "staff" ) {
    //   console.log('staff checked');
    //   history.push("/Staff-signup");
    // }
  };

  const doNothing = () => {

  }

  return (
    <IonPage>

        <Header class="with-back-arrow" onBack={doNothing} />

        <IonContent fullscreen>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            
            <IonGrid>
                <IonRow className="signup-form login-form-row ">
                    <IonCol size="10" sizeMd="6" sizeLg="6">
                        {/* <p>What are you registering as?</p> */}
                        <IonList>
                          <IonRadioGroup 
                            defaultValue={TENANT} 
                            onIonChange={inputChangeHandler}
                            {...register('radioGrp', { required: 'Please make a selection' })}
                          >
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
                              <IonRadio mode="md" value={TENANT} />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                Management
                                <p>I am plan to add and manage properties or apartments to rent.</p>
                              </IonLabel>
                              <IonRadio mode="md" value={MANAGEMENT} />
                            </IonItem>

                            <IonItem className="user-select-item">
                              <IonLabel>
                                Staff
                                <p>I am staff member for a property.</p>
                              </IonLabel>
                              <IonRadio mode="md" value={STAFF} />
                              
                            </IonItem>

                          </IonRadioGroup>
                        </IonList>

                        
                    </IonCol>

                    <ErrorMessage
                      errors={errors}
                      name="radioGrp"
                      as={<div className="error-message" style={{ color: 'red' }} />}
                    />

                    <IonCol size="8" sizeMd="4" sizeLg="4">
                      <IonButton className="secondary-button" type="submit" expand="block" shape="round" fill="outline">
                          Continue
                      </IonButton>
                    </IonCol>

                </IonRow>
            </IonGrid>
            </form>
              </FormProvider>
        </IonContent>

    </IonPage>
  );
};

export default Signup;