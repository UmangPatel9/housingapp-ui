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
  
const PasswordChange: React.FC<{ path: string }> = ({path}) => {

    const methods = useForm();
    const { register, trigger, handleSubmit, getValues, formState: { errors } } = methods;

    const onSubmit = (data: any) => {
        console.log(data);
    };
   
    return (
        <IonPage>
  
           <HeaderMain pageTitle="Password Change" logoHide="hide-logo" />
  
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
                                            <IonLabel className="form-lable">Email*</IonLabel>
                                            <IonInput
                                                mode="md"
                                                type="email"
                                                {...register('email', {
                                                    required: 'Email is a required field',
                                                    pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: 'invalid email address'
                                                    }
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="email"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </div>

                                        <div className="form-field">
                                        <IonLabel className="form-lable">Password*</IonLabel>
                                            <IonInput 
                                                mode="md"
                                                type="password" 
                                                {...register('password1', {
                                                    required: 'Password is Required',
                                                    pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i,
                                                    message: 'Password should be minimum 8 characters and maximum 12 characters long, with 1 upparcase and 1 special character.'
                                                    }
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="password1"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </div>

                                        <div className="form-field">
                                            <IonLabel className="form-lable">Confirm Password*</IonLabel>
                                            <IonInput 
                                                mode="md"
                                                type="password" 
                                                {...register('password2', {
                                                    // required: true,
                                                    validate: {
                                                    noMatch: (value: string) => {
                                                        return value !== getValues("password1")
                                                            ? "Passwords do not match"
                                                            : undefined;
                                                    },
                                                    },
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="password2"
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
  
  export default PasswordChange;