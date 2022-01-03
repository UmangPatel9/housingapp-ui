import React, {useEffect, useRef, useState} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonButton, 
    IonIcon,
    IonLabel,
    IonInput,
    IonDatetime,
    IonTextarea,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAlert
} from '@ionic/react';

import { attachOutline, close } from "ionicons/icons";

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const EditPosts: React.FC<{ path: string }> = ({path}) => {

    let history = useHistory();

    const methods = useForm();
    const { register, handleSubmit, formState: { errors } } = methods;

   const onSubmit = (data: any) => {
      console.log(data);
   };

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const defaultList = [
        { id: "1", fileName: "1. My Filename1.jpg" },
        { id: "2", fileName: "2. My Filename1.jpg" }
    ];

    const [selectedActivationDate, setSelectedActivationDate] = useState<string>('2022-01-01T13:47:20.789');
    const [selectedExpirationDate, setSelectedExpirationDate] = useState<string>('2022-02-01T13:47:20.789');
    const [removeFile, setRemoveFile] = useState(false);
    const fileInput = useRef(null);

    const [fileList, setFileList] = useState(defaultList);
    
    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...fileList];
        list.splice(index, 1);
        setFileList(list);
    };

    const loadImageFromDevice = (event:any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            // get the blob of the image:
            let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
            // create blobURL, such that we could use it in an image element:
            let blobURL: string = URL.createObjectURL(blob);
            let filename: string = file.name;
            console.log(filename);
            setFileList([...fileList, { id: "", fileName: filename}]);
        };

        reader.onerror = (error) => {
            //handle errors
        };
    };

    const renderList = () => {
        return fileList.map((x, i) => {
            return (
                <div key={i} className="uploaded-file">
                    <p className="uploaded-file-name read-only">{x.fileName}</p>
                    <IonButton fill="clear" onClick={() => setRemoveFile(true)}>
                        <IonIcon icon={close} />
                    </IonButton>
                    <IonAlert
                        isOpen={removeFile}
                        onDidDismiss={() => setRemoveFile(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove File'}
                        message={'<p>Are you sure you want to remove this file?</p>'}
                        buttons={[
                            {
                                text: 'Yes',
                                cssClass: 'btn-secondary',
                                handler: () => {
                                    handleRemoveClick(i);
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
            );
        })
    }

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Update Posts"  logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="dashboard-content-inner create-posts-wrapper">
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>Post Info</IonCardTitle>
                                        </IonCardHeader>

                                        <IonCardContent>
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6" className="form-field">
                                                <IonLabel className="form-lable">Post Title*</IonLabel>
                                                <IonInput
                                                    mode="md"
                                                    type="text"
                                                    className={`form-control ${errors.postTitle ? 'is-invalid' : ''}`}   
                                                    {...register('postTitle', {
                                                        required: 'Please enter Post Title'
                                                    })}
                                                    value="How to change apartment Lease Code"
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="postTitle"
                                                    as={<div className="error-message" style={{ color: 'red' }} />}
                                                />
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" className="form-field">
                                                <IonLabel className="form-lable">Message*</IonLabel>
                                                <IonTextarea
                                                    mode="md"
                                                    className={`form-control ${errors.postMessage ? 'is-invalid' : ''}`}   
                                                    {...register('postMessage', {
                                                        required: 'Please enter Post Message'
                                                    })}
                                                    value="You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code."
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="postMessage"
                                                    as={<div className="error-message" style={{ color: 'red' }} />}
                                                />
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" className="form-field">
                                                <IonLabel className="form-lable">Attachments</IonLabel>
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" className="uploaded-images-list">   
                                                {renderList()}
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" className="upload-photo-block ion-text-center">
                                                <input
                                                    ref={fileInput}
                                                    hidden
                                                    type="file"
                                                    accept="image/*"
                                                    name="postFile"
                                                    onChange={loadImageFromDevice}
                                                    onClick={() => {
                                                        console.log('onClick');
                                                    }}
                                                />
                                                <IonButton 
                                                    className="upload-photo-btn" 
                                                    fill="solid" 
                                                    shape="round"
                                                    onClick={() => {
                                                        // @ts-ignore
                                                        fileInput?.current?.click();
                                                    }}
                                                >
                                                    <IonIcon icon={attachOutline} />
                                                </IonButton>
                                                <IonButton className="take-photo-btn" fill="solid" shape="round">
                                                    <IonIcon icon="assets/images/add-photo-white.svg" />
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                        </IonCardContent>
                                    </IonCard>

                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>Post Settings</IonCardTitle>
                                        </IonCardHeader>

                                        <IonCardContent>
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6">
                                                <div className="label-with-tooltip">
                                                    <IonLabel className="form-lable">Activation Date</IonLabel>
                                                    <div className="tooltip" title="Add Activation Date">!</div>
                                                </div>
                                                <div className="date-picker">
                                                    <IonDatetime 
                                                        displayFormat="MMM DD, YYYY"
                                                        placeholder="Select Date" 
                                                        value={selectedActivationDate} 
                                                        className={`form-control ${errors.activationDate ? 'is-invalid' : ''}`}   
                                                        onIonChange={e => setSelectedActivationDate(e.detail.value!)}
                                                        mode="md"  
                                                        {...register('activationDate', {
                                                            required: 'Please select Activation Date'
                                                        })}
                                                    >
                                                    </IonDatetime>
                                                    <IonIcon icon="assets/images/calendar-icon.svg" />
                                                </div>
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="activationDate"
                                                    as={<div className="error-message" style={{ color: 'red' }} />}
                                                />
                                            </IonCol>

                                            <IonCol size="12" sizeMd="6">
                                                <div className="label-with-tooltip">
                                                    <IonLabel className="form-lable">Expiration Date</IonLabel>
                                                    <div className="tooltip" title="Add Activation Date">!</div>
                                                </div>
                                                <div className="date-picker">
                                                    <IonDatetime 
                                                        displayFormat="MMM DD, YYYY"
                                                        placeholder="Select Date"
                                                        className={`form-control ${errors.expirationDate ? 'is-invalid' : ''}`}    
                                                        value={selectedExpirationDate} 
                                                        onIonChange={e => setSelectedExpirationDate(e.detail.value!)}
                                                        mode="md"  
                                                        {...register('expirationDate', {
                                                            required: 'Please select Expiration Date'
                                                        })}
                                                    >
                                                    </IonDatetime>
                                                    <IonIcon icon="assets/images/calendar-icon.svg" />
                                                </div>
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="expirationDate"
                                                    as={<div className="error-message" style={{ color: 'red' }} />}
                                                />
                                            </IonCol>
                                        </IonRow>
                                        </IonCardContent>
                                    </IonCard>

                                    <IonRow className="ion-justify-content-center">
                                        <IonCol className="ion-text-center">
                                            <IonButton type="submit"  className="secondary-button" fill="outline" shape="round">Submit</IonButton>
                                            <IonButton className="exit-file-btn" routerLink={Routes.managePosts} fill="solid" shape="round">Exit</IonButton>
                                        </IonCol>
                                    </IonRow>
                                    
                                </div>
                            </form>
                            </FormProvider>

                        </IonCol>
                        {/* dashboar content end */}


                        {/* dashboar posts start */}
                        <IonCol  className="dashboard-posts" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                            
                        </IonCol>
                        {/* dashboar post end */}
    
                    </IonRow>
                </IonGrid>

                <IonButton className="scroll-to-bottom-btn" onClick={scrollToBottom} fill="clear">
                    <IonIcon icon="assets/images/double-arrow-down.svg" />
                </IonButton>
              
                <Footer />

            </IonContent>

            <FooterMobile />
      </IonPage>
            
        
        
    );
};

export default EditPosts;