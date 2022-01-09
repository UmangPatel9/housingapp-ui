import React, {useRef, useState, useEffect} from "react";

import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonToggle
} from '@ionic/react';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

import { FormProvider, useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
  
const ServiceSettings: React.FC<{ path: string }> = ({path}) => {

    const [interactPaymentsToggle, setinteractPaymentsToggle] = useState(true);
    const [creditCardPaymentsToggle, setCreditCardPaymentsToggle] = useState(true);
    const [requestsServicesToggle, setRequestsServicesToggle] = useState(true);

    const methods = useForm();
    const { register, trigger, handleSubmit, getValues, control, setValue, formState: { errors } } = methods;

    const onSubmit = (data: any) => {
        console.log(data);
    };
   
    return (
        <IonPage>
  
           <HeaderMain pageTitle="Services Settings" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content services-settings" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                
                                <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <IonGrid>
                                        <IonRow>
                                        <IonCol size="12" sizeMd="6" className="email-field">

                                        <p>Here's the list of services offered by your administration.</p>
                                        <div className="form-field toggle-button-field">
                                            <IonLabel className="form-lable">Interact Payments</IonLabel>
                                            <IonToggle mode="ios" checked={interactPaymentsToggle} onIonChange={(e) => setinteractPaymentsToggle(e.detail.checked)} />
                                        </div>

                                        <div className="form-field toggle-button-field">
                                            <IonLabel className="form-lable">Credir Card Payments</IonLabel>
                                            <IonToggle mode="ios" checked={creditCardPaymentsToggle} onIonChange={(e) => setCreditCardPaymentsToggle(e.detail.checked)} />
                                        </div>

                                        <div className="form-field toggle-button-field">
                                            <IonLabel className="form-lable">Requests Payments</IonLabel>
                                            <IonToggle mode="ios" checked={requestsServicesToggle} onIonChange={(e) => setRequestsServicesToggle(e.detail.checked)} />
                                        </div>

                                        <div className="form-field">
                                            <IonButton className="secondary-button" type="submit" shape="round" fill="outline">
                                                Save
                                            </IonButton>
                                        </div>

                                        </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </form>
                                </FormProvider>
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
  
  export default ServiceSettings;