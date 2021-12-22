import React, {useRef, useState} from "react";

import { useHistory } from "react-router-dom";

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
    useIonAlert,
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

const EditLeaseInfo: React.FC<{ path: string }> = ({path}) => {

    let history = useHistory();

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const [selectedDate, setSelectedDate] = useState<string>('');

    const [present] = useIonAlert();

    const [generateNewLeaseCodeAlert, setGenerateNewLeaseCodeAlert] = useState(false);
    const [leaseRenewalProposalAlert, setLeaseRenewalProposalAlert] = useState(false);
    const [renewalProposalSentAlert, setRenewalProposalSentAlert] = useState(false);
    const [cancelLeaseAlert, setCancelLeaseAlert] = useState(false);
    const [updateFileAlert, setUpdateFileAlert] = useState(false);
    const [updateFileNotificationSentAlert, setUpdateFileNotificationSentAlert] = useState(false);
    const [removeTenant, setRemoveTenant] = useState(false);
    const [exitFileAlert, setExitFileAlert] = useState(false);

    const defaultList = [
        { number: "1", firstName: "John", lastName: "Smith" },
        { number: "2", firstName: "Dianna", lastName: "Smith" },
    ];

    const [inputList, setInputList] = useState(defaultList);

    // handle input change
    const handleInputChange = (e:any, index:number) => {
        // const { name, value } = e.target;
        // const list = [...inputList];
        // list[index][name] = value;
        // setInputList(list);
    };
    
    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { number: "", firstName: "", lastName: "" }]);
    };

    const renderList = () => {
        return inputList.map((x, i) => {
            return (
                <div className="tenant-lease-details-info tenants-info">
                    <div className="tenant-title-wrap">
                        <h4>Tenant 1</h4>
                        <IonButton fill="clear" onClick={() => setRemoveTenant(true)}><IonIcon icon={close} /></IonButton>
                    </div>
                    <IonRow>
                        <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                            <IonLabel>First Name*</IonLabel>
                            <IonInput mode="md" type="text" value={x.firstName} name="firstName" onChange={e => handleInputChange(e, i)}></IonInput>
                            </IonCol>
                        <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                            <IonLabel>Last Name*</IonLabel>
                            <IonInput mode="md" type="text" value={x.lastName} name="lastName" onChange={e => handleInputChange(e, i)}></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonAlert
                        isOpen={removeTenant}
                        onDidDismiss={() => setRemoveTenant(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove Tenant'}
                        message={'<p>Are you sure you want to remove this tenant form this lease?</p>'}
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
  
           <HeaderMain pageTitle="Manage Leases" logoHide="hide-logo" />
  
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
                                    <IonInput mode="md" type="text" value={"204"} name="apprtmentNumber"></IonInput>
                                </IonCol>
                                <IonCol className="lease-code-info" size="8" sizeMd="8" sizeLg="7" sizeXl="6">
                                    <div className="lease-code">
                                        <IonLabel>Lease Code</IonLabel>
                                        <IonInput mode="md" type="text" value={"Z123 1234 1234"} name="leaseCode"></IonInput>
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

                            <form>
                            <IonCard className="tenant-lease-details-card">
                                <IonCardHeader>
                                    <IonCardTitle>Tenant Details</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    {/* <div className="tenant-lease-details-info tenants-info">
                                        <div className="tenant-title-wrap">
                                            <h4>Tenant 1</h4>
                                            <IonButton fill="clear"><IonIcon icon={close} /></IonButton>
                                        </div>
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                <IonLabel>First Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"John"} name="t1FirstName"></IonInput>
                                                </IonCol>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                <IonLabel>Last Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"Smith"} name="t1LastName"></IonInput>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                    <div className="tenant-lease-details-info tenants-info">
                                        <div className="tenant-title-wrap">
                                            <h4>Tenant 2</h4>
                                            <IonButton fill="clear"><IonIcon icon={close} /></IonButton>
                                        </div>
                                        <IonRow>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                <IonLabel>First Name*</IonLabel>
                                                <IonInput mode="md" type="text" value={"Dianna"} name="t2FirstName"></IonInput>
                                            </IonCol>
                                            <IonCol size="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                                    <IonLabel>Last Name*</IonLabel>
                                                    <IonInput mode="md" type="text" value={"Smith"} name="t2LastName"></IonInput>
                                            </IonCol>
                                        </IonRow>
                                    </div> */}

                                    {renderList()}

                                    <IonButton fill="solid" shape="round" onClick={handleAddClick}>
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
                                            <IonInput className="width-25" mode="md" type="text" value={"2"} name="numberOfTenants"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Current Lease price</IonLabel>
                                            <IonInput className="width-50 lease-price" mode="md" type="text" value={"900"} name="currentLeasePrice"></IonInput>
                                        </div>
                                        <div>
                                            <IonLabel>Lease Start Date*</IonLabel>
                                            <div className="date-picker width-50">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseStartDate" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                        <div>
                                            <IonLabel>Lease End Date*</IonLabel>
                                            <div className="date-picker width-50">
                                                <IonDatetime displayFormat="MMM DD, YYYY" name="leaseEndDate" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                                                <IonIcon icon="assets/images/calendar-icon.svg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lease-scan-block">
                                        <IonLabel>Lease Scans</IonLabel>
                                        <div className="uploaded-file">
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
                                        </div>
                                        <div className="upload-photo-block">
                                            <IonButton className="upload-photo-btn" fill="solid" shape="round">
                                                <IonIcon icon={attachOutline} />
                                            </IonButton>
                                            <IonButton className="take-photo-btn" fill="solid" shape="round">
                                                <IonIcon icon="assets/images/add-photo.svg" />
                                            </IonButton>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="tenant-lease-details-card special-actions-card">
                                <IonCardHeader>
                                    <IonCardTitle>Special Actions</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonButton 
                                        className="propose-lease-renewal-btn" 
                                        routerLink="#" 
                                        fill="outline" 
                                        shape="round"
                                        onClick={() =>
                                            setLeaseRenewalProposalAlert(true)
                                        }
                                    >
                                        Propose lease renewal
                                    </IonButton>
                                    <IonAlert
                                        isOpen={leaseRenewalProposalAlert}
                                        onDidDismiss={() => setLeaseRenewalProposalAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'Lease Renewal Propposal'}
                                        message={'<p>Are you sure you want to propse the Lease Renewal?</p>'}
                                        buttons={[
                                            {
                                                text: 'Yes',
                                                cssClass: 'btn-primary',
                                                handler: () => {
                                                    setRenewalProposalSentAlert(true)
                                                    console.log('Lease Renewal Propposal Confirm');
                                                }
                                            },
                                            {
                                                text: 'No',
                                                role: 'cancel',
                                                cssClass: 'btn-outline',
                                                handler: blah => {
                                                    console.log('Lease Renewal Propposal Confirm Cancel');
                                                }
                                            }
                                            
                                        ]}
                                    />
                                    <IonAlert
                                        isOpen={renewalProposalSentAlert}
                                        onDidDismiss={() => setRenewalProposalSentAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'Renewal Proposal Sent'}
                                        message={'<p>The lease Renewal proposal has been sent to the tenant(s). The file wil be updated if the tenant chooses to renew.</p>'}
                                        buttons={[
                                            {
                                                text: 'Close',
                                                role: 'cancel',
                                                cssClass: 'btn-primary',
                                                handler: blah => {
                                                    console.log('Renewal Proposal Sent close');
                                                }
                                            }
                                            
                                        ]}
                                    />
                                    <IonButton 
                                        className="cancel-lease-btn" 
                                        fill="outline" 
                                        shape="round"
                                        onClick={() =>
                                            setCancelLeaseAlert(true)
                                        }
                                    >
                                        Cancel Lease
                                    </IonButton>
                                    <IonAlert
                                        isOpen={cancelLeaseAlert}
                                        onDidDismiss={() => setCancelLeaseAlert(false)}
                                        cssClass='red-alert'
                                        mode='md'
                                        header={'Cancel Lease'}
                                        message={'<p>You are about to <strong>cancel</strong> this lease code.</p><p>This step cannot be <strong>undone</strong>.'}
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
                                </IonCardContent>
                            </IonCard>
                            
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="ion-text-center">
                                    <IonButton 
                                        className="update-file-btn"
                                        fill="solid" 
                                        shape="round"
                                        onClick={() =>
                                            setUpdateFileAlert(true)
                                        }
                                    >
                                        Update File
                                    </IonButton>
                                    <IonAlert
                                        isOpen={updateFileAlert}
                                        onDidDismiss={() => setUpdateFileAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'Update File'}
                                        message={'<p>All tenants will be notified of the changes. Are you sure you would like to update the file with the new information?'}
                                        buttons={[
                                            {
                                                text: 'Yes',
                                                cssClass: 'btn-primary',
                                                handler: () => {
                                                    // setUpdateFileNotificationSentAlert(true)
                                                    console.log('Update File Confirm');
                                                }
                                            },
                                            {
                                                text: 'No',
                                                role: 'cancel',
                                                cssClass: 'btn-outline',
                                                handler: blah => {
                                                    console.log('Update File Cancel');
                                                }
                                            }
                                            
                                        ]}
                                    />
                                    {/* <IonAlert
                                        isOpen={updateFileNotificationSentAlert}
                                        onDidDismiss={() => setUpdateFileNotificationSentAlert(false)}
                                        cssClass='orange-alert'
                                        mode='md'
                                        header={'Update File'}
                                        message={'<p>A notification of your update has been sent to all the tenants on this lease.</p>'}
                                        buttons={[
                                            {
                                                text: 'Close',
                                                role: 'cancel',
                                                cssClass: 'btn-primary',
                                                handler: blah => {
                                                    console.log('Update File close');
                                                }
                                            }
                                            
                                        ]}
                                    /> */}

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
                                        header={'Exit File'}
                                        message={'<p>Are you sure you want to Exit the file without saving the updates?</p>'}
                                        buttons={[
                                            {
                                                text: 'Yes',
                                                cssClass: 'btn-secondary',
                                                handler: () => {
                                                    history.goBack();
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
                                </IonCol>
                            </IonRow>
                            </form>

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

export default EditLeaseInfo;