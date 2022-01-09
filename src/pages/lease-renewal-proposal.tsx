import React, {useRef, useState} from "react";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonList,
    IonInput, 
    IonDatetime,
    IonLabel, 
    IonButton, 
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAlert
} from '@ionic/react';

import { close, attachOutline, chevronDown } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const LeaseRenewalProposal: React.FC<{ path: string }> = ({path}) => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const [selectedStartDate, setSelectedStartDate] = useState<string>('2022-01-01T13:47:20.789');
    const [selectedEndDate, setSelectedEndDate] = useState<string>('2022-02-01T13:47:20.789');

    const [generateNewLeaseCodeAlert, setGenerateNewLeaseCodeAlert] = useState(false);

    const defaultList = [
        { id: "1", fileName: "1. My Filename1.jpg" },
        { id: "2", fileName: "2. My Filename1.jpg" }
    ];

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
  
           <HeaderMain pageTitle="Renewal Proposal" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <IonRow className="apartment-lease-code-info">
                                <IonCol className="apartment-number" size="4" sizeMd="4" sizeLg="4" sizeXl="3">
                                    <IonLabel>Apartment #</IonLabel>
                                    <IonInput mode="md" type="text" value={"204"} name="apprtmentNumber" readonly></IonInput>
                                </IonCol>
                                <IonCol className="lease-code-info" size="8" sizeMd="8" sizeLg="7" sizeXl="6">
                                    <div className="lease-code">
                                        <IonLabel>Lease Code</IonLabel>
                                        <IonInput mode="md" type="text" value={"Z123 1234 1234"} name="leaseCode" readonly></IonInput>
                                    </div>
                                    <IonButton 
                                        fill="solid" 
                                        shape="round"
                                        onClick={() =>
                                            setGenerateNewLeaseCodeAlert(true)
                                        }
                                    >
                                        Generate New Lease Code
                                    </IonButton>
                                    <IonAlert
                                        isOpen={generateNewLeaseCodeAlert}
                                        onDidDismiss={() => setGenerateNewLeaseCodeAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'New Lease Code'}
                                        message={'<p>You are about to <strong>change</strong> this lease code.</p><p>This step cannot be undone.</p>'}
                                        buttons={[
                                            {
                                                text: 'Yes',
                                                cssClass: 'btn-outline',
                                                handler: () => {
                                                    console.log('Confirm Okay');
                                                }
                                            },
                                            {
                                                text: 'No',
                                                role: 'cancel',
                                                cssClass: 'btn-outline',
                                                handler: blah => {
                                                    console.log('Confirm Cancel: blah');
                                                }
                                            }
                                            
                                        ]}
                                    />
                                </IonCol>
                            </IonRow>

                            <IonCard className="tenant-lease-details-card">
                                <IonCardHeader>
                                    <IonCardTitle>Tenant Details</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <div className="tenant-lease-details-info tenants-info">
                                        <h4>Tenant 1</h4>
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                <IonLabel>First Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"John"} name="t1FirstName" readonly></IonInput>
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6s" sizeLg="6" sizeXl="6">
                                                <IonLabel>Last Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"Smith"} name="t1LastName" readonly></IonInput>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                    <div className="tenant-lease-details-info tenants-info">
                                        <h4>Tenant 2</h4>
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                <IonLabel>First Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"Dianna"} name="t2FirstName" readonly></IonInput>
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                <IonLabel>Last Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"Smith"} name="t2LastName" readonly></IonInput>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                    <IonButton fill="solid" shape="round" disabled>
                                            <IonIcon icon="assets/images/plus-icon-gray.svg" />
                                            <span className="">Add Another Tenant</span>
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="tenant-lease-details-card">
                                <IonCardHeader>
                                    <IonCardTitle>Lease Details</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <div className="tenant-lease-details-info lease-info">
                                        <div>
                                            <IonLabel>Number of Tenants in Apartment</IonLabel>
                                            <IonInput mode="md" type="text" value={"2"} name="numberOfTenants" readonly></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Current Lease price</IonLabel>
                                            <IonInput mode="md" type="text" value={"$900"} name="currentLeasePrice" readonly></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>New Lease price</IonLabel>
                                            <IonInput className="width-25" mode="md" type="text" value="" name="newLeasePrice"></IonInput>
                                        </div>
                                        <div className="width-50">
                                            <IonLabel>Lease Start Date*</IonLabel>
                                            {/* <IonInput mode="md" type="text" value={"Jan. 8th, 2020"} name="leaseStartDate"></IonInput> */}
                                            <div className="date-picker">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseStartDate" placeholder="Select Date" value={selectedStartDate} onIonChange={e => setSelectedStartDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                        <div className="width-50">
                                            <IonLabel>Lease End Date*</IonLabel>
                                            {/* <IonInput mode="md" type="text" value={"Feb. 8th, 2021"} name="leaseEndDate"></IonInput> */}
                                            <div className="date-picker">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseEndDate" placeholder="Select Date" value={selectedEndDate} onIonChange={e => setSelectedEndDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lease-scan-block">
                                        <IonLabel>Lease Scans</IonLabel>
                                        {renderList()}
                                        {/* <div className="uploaded-file">
                                            <p className="uploaded-file-name read-only">1. My Filename1.jpg</p>
                                            <IonButton fill="clear">
                                                <IonIcon icon={close} />
                                            </IonButton>
                                        </div>
                                        <div className="uploaded-file">
                                            <p className="uploaded-file-name read-only">2. My Filename2.jpg</p>
                                            <IonButton fill="clear">
                                                <IonIcon icon={close} />
                                            </IonButton>
                                        </div> */}
                                        <div className="upload-photo-block">
                                            <input
                                                ref={fileInput}
                                                hidden
                                                type="file"
                                                accept="image/png, image/jpg, image/jpeg"
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
                                                <IonIcon icon="assets/images/add-photo.svg" />
                                            </IonButton>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>
                            
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="ion-text-center">
                                    <IonButton  className="secondary-button submit-new-lease-btn" routerLink="#" fill="outline" shape="round">Submit</IonButton>
                                    <IonButton className="exit-file-btn" routerLink={Routes.manageTenants} fill="solid" shape="round">Exit File</IonButton>
                                </IonCol>
                            </IonRow>

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

export default LeaseRenewalProposal;