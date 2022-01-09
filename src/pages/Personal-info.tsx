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
} from '@ionic/react';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
  
const PersonalInfo: React.FC<{ path: string }> = ({path}) => {

    const methods = useForm();
    const { register, trigger, handleSubmit, getValues, formState: { errors } } = methods;

    const onSubmit = (data: any) => {
        console.log(data);
    };
   
    return (
        <IonPage>
  
           <HeaderMain pageTitle="Personal Info" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content my-account-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <IonGrid>
                                        <IonRow>
                                        <IonCol size="12" sizeMd="6" className="email-field">
                                        <div className="form-field">
                                            <IonLabel className="form-lable">First Name*</IonLabel>
                                            <IonInput
                                                mode="md"
                                                type="text"   
                                                {...register('firstName', {
                                                    required: 'First name is a required field'
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstName"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </div>

                                        <div className="form-field">
                                            <IonLabel className="form-lable">Last Name*</IonLabel>
                                            <IonInput
                                                mode="md"
                                                type="text" 
                                                {...register('lastName', {
                                                    required: 'Last name is a required field'
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="lastName"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </div>

                                        <div className="form-field">
                                            <IonLabel className="form-lable">Telephone:</IonLabel>
                                            <IonInput
                                                mode="md"
                                                type="number" 
                                                {...register('telephone', {
                                                    minLength: 6, maxLength: 12,
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="telephone"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </div>

                                        <div className="form-field">
                                            <div className="label-with-tooltip">
                                                <IonLabel className="form-lable">Lease Code (Optional):</IonLabel>
                                                <div className="tooltip" title="Add Lease code.">!</div>
                                            </div>
                                            <IonInput
                                                mode="md"
                                                type="number" 
                                                {...register('telephone', {
                                                    minLength: 6, maxLength: 12,
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="number"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </div>

                                        <div className="form-field">
                                            <IonButton className="secondary-button" type="submit" shape="round" fill="outline">
                                                Update
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
  
  export default PersonalInfo;