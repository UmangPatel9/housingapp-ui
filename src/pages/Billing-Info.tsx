import React, {useRef, useState, useEffect} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonLabel,
    IonInput,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonSlides,
    IonSlide,
    IonImg,
    IonDatetime,
    IonItem,
    IonCheckbox,
    IonAlert
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
  
const BillingInfo: React.FC<{ path: string }> = ({path}) => {

    const slider = useRef<any>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedDate1, setSelectedDate1] = useState<string>('');
    const [value, setValue] = useState("0");
    const [exitFileAlert, setExitFileAlert] = useState(false);
    const [exitFileAlert1, setExitFileAlert1] = useState(false);
    let history = useHistory();

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        loop: false,
        pagination: {
          el: null
        },
      
    };
  
    // a function to handle the segment changes
    const handleSegmentChange = async (e: any) => {
          await slider.current.lockSwipes(false);
          setValue(e.detail.value);
          slider.current!.slideTo(e.detail.value);
          await slider.current.lockSwipes(true);
    };
  
      // a function to handle the slider changes
    const handleSlideChange = async (event: any) => {
        let index: number = 0;
        await event.target.getActiveIndex().then((value: any) => (index=value));
        setValue(''+index)
    }

    const methods = useForm();
    const { register, handleSubmit, formState: { errors } } = methods;
 
    const onSubmit = (data: any) => {
       console.log(data);
    };
   
    return (
        <IonPage>
  
           <HeaderMain pageTitle="Default Payment Info" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content my-account-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                            <div className="choose-payment-method-block">
                                        <h4>Choose a payment method</h4>
                                        <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                                <IonSegmentButton className="posts-tab-button" value="0">
                                                    Paypal
                                                </IonSegmentButton>
                                                <IonSegmentButton value="1">
                                                    Credit Card
                                                </IonSegmentButton>
                                        </IonSegment>

                                        <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>

                                            <IonSlide>
                                                <FormProvider {...methods}>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <IonGrid className="ion-no-padding">
                                                        <IonRow className="ion-align-items-center credit-card-details">
                                                            <IonCol size="3" sizeMd="2">
                                                                <IonImg className="visa-logo" src="assets/images/visa-logo.png" />
                                                            </IonCol>
                                                            <IonCol size="9" sizeMd="6">
                                                                <div className="form-field">
                                                                    <IonLabel className="form-lable" >CARDHOLDER NAME*</IonLabel>
                                                                    <IonInput
                                                                        mode="md"
                                                                        type="text"
                                                                        {...register('cardHolderName', {
                                                                            required: 'This field is required'
                                                                        })}
                                                                    />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="cardHolderName"
                                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                                    />
                                                                </div>

                                                                <div className="form-field">
                                                                    <IonLabel className="form-lable" >CARD NUMBER*</IonLabel>
                                                                    <IonInput
                                                                        mode="md"
                                                                        type="text"
                                                                        {...register('cardNumber', {
                                                                            required: 'Please enter a card number',
                                                                            pattern: {
                                                                                value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/i,
                                                                                message: 'Please enter a valid card number.'
                                                                              }
                                                                        })}
                                                                    />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="cardNumber"
                                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                                    />
                                                                </div>
                                                                
                                                                <div className="form-field">
                                                                    <IonLabel className="form-lable">EXPIRATION DATE*</IonLabel>
                                                                    <IonDatetime 
                                                                        displayFormat="MM/YY" min="2021-01-01" max="2023-12-31"
                                                                        // name="cardExpiryDate" placeholder="" 
                                                                        {...register('cardExpiryDate', {
                                                                            required: 'Please select card expiry date'
                                                                        })}
                                                                        value={selectedDate1} 
                                                                        onIonChange={e => setSelectedDate1(e.detail.value!)
                                                                        }>

                                                                    </IonDatetime>
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="cardExpiryDate"
                                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                                    />
                                                                </div>
                                                               
                                                            </IonCol>
                                                        </IonRow>
                                                    </IonGrid>

                                                    <div className="default-payment-method-checkbox">               <IonItem className="checkbox-wrap">
                                                            <IonLabel className="form-lable">Default payment method</IonLabel>
                                                            <IonCheckbox mode="md" slot="start"></IonCheckbox>
                                                        </IonItem>
                                                        </div> 
                                                    
                                                    <div className="payment-method-cofirm-method">
                                                        <IonButton type="submit"  className="secondary-button ion-margin-top" shape="round" fill="outline" >
                                                            Update
                                                        </IonButton>

                                                        <IonButton 
                                                            className="exit-file-btn" 
                                                            fill="solid" 
                                                            shape="round"
                                                            onClick={() =>
                                                                setExitFileAlert1(true)
                                                            }
                                                        >
                                                            Exit File
                                                        </IonButton>
                                                        <IonAlert
                                                            isOpen={exitFileAlert1}
                                                            onDidDismiss={() => setExitFileAlert1(false)}
                                                            cssClass='red-alert'
                                                            mode='md'
                                                            header={'Payment Info Deletion'}
                                                            message={'<p>Are you sure you want to delete your default payment info?</p>'}
                                                            buttons={[
                                                                {
                                                                    text: 'Yes',
                                                                    cssClass: 'btn-secondary',
                                                                    handler: () => {
                                                                        // history.goBack();
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
                                                    </div>

                                                </form>
                                                </FormProvider>
                                            </IonSlide>

                                            <IonSlide>
                                            <FormProvider {...methods}>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <IonGrid className="ion-no-padding">
                                                        <IonRow className="ion-align-items-center credit-card-details">
                                                            <IonCol size="3" sizeMd="2">
                                                                <IonImg className="visa-logo" src="assets/images/visa-logo.png" />
                                                            </IonCol>
                                                            <IonCol size="9" sizeMd="6">
                                                                <div className="form-field">
                                                                    <IonLabel className="form-lable" >CARDHOLDER NAME*</IonLabel>
                                                                    <IonInput
                                                                        mode="md"
                                                                        type="text"
                                                                        {...register('cardHolderName', {
                                                                            required: 'This field is required'
                                                                        })}
                                                                    />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="cardHolderName"
                                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                                    />
                                                                </div>

                                                                <div className="form-field">
                                                                    <IonLabel className="form-lable" >CARD NUMBER*</IonLabel>
                                                                    <IonInput
                                                                        mode="md"
                                                                        type="text"
                                                                        {...register('cardNumber', {
                                                                            required: 'Please enter a card number',
                                                                            pattern: {
                                                                                value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/i,
                                                                                message: 'Please enter a valid card number.'
                                                                              }
                                                                        })}
                                                                    />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="cardNumber"
                                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                                    />
                                                                </div>
                                                                
                                                                <div className="form-field">
                                                                    <IonLabel className="form-lable">EXPIRATION DATE*</IonLabel>
                                                                    <IonDatetime 
                                                                        displayFormat="MM/YY" min="2021-01-01" max="2023-12-31"
                                                                        // name="cardExpiryDate" placeholder="" 
                                                                        {...register('cardExpiryDate', {
                                                                            required: 'Please select card expiry date'
                                                                        })}
                                                                        value={selectedDate} 
                                                                        onIonChange={e => setSelectedDate(e.detail.value!)
                                                                        }>

                                                                    </IonDatetime>
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="cardExpiryDate"
                                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                                    />
                                                                </div>
                                                               
                                                            </IonCol>
                                                        </IonRow>
                                                    </IonGrid>

                                                    <div className="default-payment-method-checkbox">               <IonItem className="checkbox-wrap">
                                                            <IonLabel className="form-lable">Default payment method</IonLabel>
                                                            <IonCheckbox mode="md" slot="start"></IonCheckbox>
                                                        </IonItem>
                                                        </div> 
                                                    
                                                    <div className="payment-method-cofirm-method">
                                                        <IonButton type="submit"  className="secondary-button ion-margin-top" shape="round" fill="outline" >
                                                            Update
                                                        </IonButton>

                                                        <IonButton 
                                                            className="exit-file-btn" 
                                                            fill="solid" 
                                                            shape="round"
                                                            onClick={() =>
                                                                setExitFileAlert(true)
                                                            }
                                                        >
                                                            Exit File
                                                        </IonButton>
                                                        <IonAlert
                                                            isOpen={exitFileAlert}
                                                            onDidDismiss={() => setExitFileAlert(false)}
                                                            cssClass='red-alert'
                                                            mode='md'
                                                            header={'Payment Info Deletion'}
                                                            message={'<p>Are you sure you want to delete your default payment info?</p>'}
                                                            buttons={[
                                                                {
                                                                    text: 'Yes',
                                                                    cssClass: 'btn-secondary',
                                                                    handler: () => {
                                                                        // history.goBack();
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
                                                    </div>

                                                </form>
                                                </FormProvider>
                                            </IonSlide>
                                        </IonSlides>
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
  
  export default BillingInfo;