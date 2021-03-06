import React, {useRef, useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

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
    IonButton,
    IonIcon,
    IonModal,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonLabel,
    IonAvatar,
    IonAlert
} from '@ionic/react';

import { FormProvider, useForm, FieldErrors } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
  
import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import TanatDahsboadTanatsTab from "../components/TanatDahsboadTanatsTab";
import TanatDahsboadPostsTab from "../components/TanantsDashboardPostsTab";
import { Routes } from '../App';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
  
const TenantDashboard: React.FC<{ path: string }> = ({path}) => {

    const location = useLocation();
    // console.log(location.pathname);
    
    const slider = useRef<any>(null);
    const [value, setValue] = useState("0");
    const btnref = useRef<HTMLIonButtonElement>(null);
    const [addedLeaseCodeAlert, setAddedLeaseCodeAlert] = useState(false);
    const [leasCode, setLeasecode] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        slider.current.lockSwipes(true);
    });

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
        // if (data.email == "tenant@gmail.com" && data.password1 == "12345") {
        //   history.push(Routes.tenantDahsboard);
        // }
        // else {
        //   history.push(Routes.managementDashboard);
        // }
        setAddedLeaseCodeAlert(true)
    };

    type ErrorSummaryProps<T> = {
        errors: FieldErrors<T>;
    };
    function ErrorSummary<T>({ errors }: ErrorSummaryProps<T>) {
        if (Object.keys(errors).length === 0) {
            return null;
        }
        return (
            <div className="error-summary">
                {Object.keys(errors).map((fieldName) => (
                <ErrorMessage errors={errors} name={fieldName as any} as="div" key={fieldName} />
                ))}
            </div>
        );
    }

    // const [clickedButton, setClickedButton] = useState('');

    // const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();

    //     const button: HTMLButtonElement = event.currentTarget;
    //     setClickedButton(button.name);
    // };

    const [showResults, setShowResults] = React.useState(false)
    const buttonHandler = () => {
        setShowResults(true)
    }

    return (
        <IonPage>
  
           <HeaderMain pageTitle="" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper tenants-dashboard" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2"></IonCol>
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <div className="tab-wrap" onClick={buttonHandler}>
                                <div className="tab-button-wrap">
                                    <IonButton className="post-add-button-besides-tab" fill="clear" routerLink={Routes.createPosts} >
                                        Posts
                                    </IonButton>
                                    <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                        {/* <IonSegmentButton className="posts-tab-button" value="0" >
                                            Posts
                                        </IonSegmentButton> */}
                                        <IonSegmentButton value="0">
                                            Tenants
                                        </IonSegmentButton>
                                        <IonSegmentButton value="1">
                                            Management
                                            <span className="notification-count">4</span>
                                        </IonSegmentButton>
                                    </IonSegment>
                                </div>

                                <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                                    {/* <IonSlide>
                                        <TanatDahsboadPostsTab />
                                    </IonSlide> */}
                                    {/*-- Package Segment --*/}
                                    <IonSlide>
                                        <TanatDahsboadTanatsTab />
                                    </IonSlide>
                                    <IonSlide>
                                        <TanatDahsboadPostsTab />
                                    </IonSlide>
                                </IonSlides>
                                </div>

                                <IonButton className="post-add-button" fill="clear" routerLink={Routes.createPosts} >
                                    <IonIcon src="assets/images/post-icon.svg" />
                                    {/* <IonImg className="logo" src="assets/images/post1.png" /> */}
                                </IonButton>

                                <IonCard className={`enter-lease-code-card ${showResults ? 'hide-div' : ''}`}>
                                    <IonCardHeader>
                                        <IonCardTitle>Hi John,</IonCardTitle>
                                    </IonCardHeader>

                                    <IonCardContent>
                                        <div className={`before-lease-code-content ${showMessage ? 'hide-div' : ''}`}>
                                            <p>Enter your <b>Lease code</b> below to unlock all the features and services of the app.</p> 
                                            <p>The <b>Lease Code</b> is a unique code linking you to your Lease and it should not be shared unless you are with a partner under the same Lease.</p>

                                            <form className="cofirm-lease-code-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                            <IonGrid>
                                                <IonRow className="ion-align-items-center">
                                                    <IonCol size="12">
                                                        <ErrorSummary errors={errors} />
                                                    </IonCol>

                                                    <IonCol size="12">
                                                        <IonLabel className="form-lable">Lease Code</IonLabel>
                                                    </IonCol>

                                                    <IonCol size="12" sizeMd="12" sizeLg="12" sizeXl="4">
                                                        <IonInput
                                                            mode="md"
                                                            type="text"
                                                        
                                                            className={`form-control ${errors.confirmLeaseCode ? 'is-invalid' : ''}`}
                                                            placeholder=""
                                                            {...register('confirmLeaseCode', {
                                                                required: 'Please enter correct lease code'
                                                            })}
                                                        />
                                                    </IonCol>

                                                    <IonCol className="lease-code-confirm-button" size="12" sizeMd="12" sizeLg="12" sizeXl="2">
                                                        <IonButton type="submit" shape="round" fill="outline">
                                                            Confirm
                                                        </IonButton>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                            </form>

                                            <IonAlert
                                                isOpen={addedLeaseCodeAlert}
                                                onDidDismiss={() => setAddedLeaseCodeAlert(false)}
                                                cssClass='orange-alert'
                                                mode='md'
                                                header={'Success'}
                                                message={'<p>Your <b>Lease Code</b> has been added successfully. Enjoy all the features the service has to offer.</p>'}
                                                buttons={[
                                                    {
                                                        text: 'Close',
                                                        role: 'cancel',
                                                        cssClass: 'btn-primary',
                                                        handler: () => {
                                                            setLeasecode(true);
                                                            setShowMessage(true);
                                                        }
                                                    }
                                                    
                                                ]}
                                            />
                                        </div>

                                        <div className={`after-lease-code-content ${!showMessage ? 'hide-div' : ''}`}>
                                            <p>What would you like to do today?</p>
                                        </div>

                                        <IonGrid className="tenant-dhaboard-button-list">
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                                <IonButton  className="" expand="block" shape="round" fill="outline" routerLink={Routes.payRents} disabled={!leasCode}>
                                                    <div className="tenant-dhaboard-button">
                                                        <IonAvatar>
                                                            <img src="assets/images/Pay-Rent-home.svg" />
                                                        </IonAvatar>
                                                        <div className="tenant-dhaboard-button-content">
                                                            <h4>Pay the <b>Rent</b></h4>
                                                            <p>Tap here to pay your monthly rent using various methods of payments.</p>
                                                        </div>
                                                    </div>
                                                </IonButton>
                                            </IonCol>

                                            {/* <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                                <IonButton  className="" expand="block" shape="round" fill="outline" routerLink={Routes.manageTenants}>
                                                    <div className="tenant-dhaboard-button">
                                                        <IonAvatar>
                                                            <img src="assets/images/Pay-Rent-home.svg" />
                                                        </IonAvatar>
                                                        <div className="tenant-dhaboard-button-content">
                                                            <h4>Messaging</h4>
                                                            <p>Tap here to chat with Management.</p>
                                                        </div>
                                                    </div>
                                                </IonButton>
                                            </IonCol> */}

                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                                <IonButton  className="" expand="block" shape="round" fill="outline" routerLink={Routes.manageTenants} disabled={!leasCode}>
                                                    <div className="tenant-dhaboard-button">
                                                        <IonAvatar>
                                                            <img src="assets/images/Repair-home.svg" />
                                                        </IonAvatar>
                                                        <div className="tenant-dhaboard-button-content">
                                                            <h4><b>Repairs</b> and <b>Request</b></h4>
                                                            <p>Tap here to pay your monthly rent using various methods of payments.</p>
                                                        </div>
                                                    </div>
                                                </IonButton>
                                            </IonCol>

                                            <IonCol size="12" sizeMd="6" sizeLg="12" sizeXl="6">
                                                <IonButton  className="" expand="block" shape="round" fill="outline" routerLink={Routes.manageTenants} disabled={!leasCode}>
                                                    <div className="tenant-dhaboard-button">
                                                        <IonAvatar>
                                                            <img src="assets/images/Manage-Lease-home.svg" />
                                                        </IonAvatar>
                                                        <div className="tenant-dhaboard-button-content">
                                                            <h4>Manage <b>Lease</b></h4>
                                                            <p>Tap here to see Current and past lease information.</p>
                                                        </div>
                                                    </div>
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                        </IonGrid>

                                    </IonCardContent>
                                </IonCard>

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
  
  export default TenantDashboard;