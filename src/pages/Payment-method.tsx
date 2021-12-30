import React, {useRef, useState, useEffect} from "react";

import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonSegment,
    IonSegmentButton,
    IonSlides,
    IonSlide,
    IonLabel,
    IonInput,
    IonButton,
    IonImg,
    IonDatetime,
    IonCheckbox,
    IonItem
} from '@ionic/react';

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
  
import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
  
const PaymentMethod: React.FC<{ path: string }> = ({path}) => {

    // a ref variable to handle the current slider
    // const slider = useRef<HTMLIonSlidesElement>(null);
    const slider = useRef<any>(null);
    // a state value to bind segment value
    const [value, setValue] = useState("0");
    // useEffect(() => {
    //     slider.current.lockSwipes(true);
    // });

    const [selectedDate, setSelectedDate] = useState<string>('');
    const [checked, setChecked] = useState(false);

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
  
           <HeaderMain pageTitle="Rent Pay" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2"></IonCol>
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content choose-payment-method-dashboard" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <div className="payment-method-wrapper">
                                    <div className="rent-pay-summary">
                                        <h3><u>Summary</u></h3>
                                        <IonGrid className="ion-no-padding">
                                            <IonRow className="rents-pay-details">
                                                <IonCol size="6">
                                                    <p>Period</p>
                                                    <h4 className="rent-pay-period">Dec. 1st, 2021 - Dec. 31st, 2021</h4>
                                                </IonCol>
                                                <IonCol size="6">
                                                    <p>Total</p>
                                                    <h4 className="rent-price">$900</h4>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </div>

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
                                                            Confirm
                                                        </IonButton>
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
                                                            Confirm
                                                        </IonButton>
                                                    </div>

                                                </form>
                                                </FormProvider>
                                            </IonSlide>
                                        </IonSlides>
                                    </div>
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
  
  export default PaymentMethod;