import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { 
    IonHeader, 
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonPopover,
    IonIcon,
    useIonPopover,
    IonList,
    IonRadioGroup,
    IonItem,
    IonLabel,
    IonRadio
} from '@ionic/react';

import { createOutline, addOutline, close, alertCircleSharp, settingsSharp } from "ionicons/icons";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const HeaderMain: React.FC<{ pageTitle: string; logoHide: string; }> = props => {
    
    let history = useHistory();
    
    const [popoverState, setShowPopover] = useState<{showPopover: boolean, event: Event | undefined}>({ showPopover: false, event: undefined });

    const [accountPopoverState, setAccountShowPopover] = useState<{showAccountPopover: boolean, event: Event | undefined}>({ showAccountPopover: false, event: undefined });

    const [changeProperty, setChangeProperty] = useState({ showPopover: false, event: undefined });

    const pageBack = () => {
      history.goBack();
    };

    const inputChangeHandler = (event: CustomEvent) => {

    };

    const closePopup = () => {
        setChangeProperty({ showPopover: false, event: undefined })
    };

    const closeNotificationPopup = () => {
        setShowPopover({ showPopover: false, event: undefined })
    };

    const closeAccountPopup = () => {
        setAccountShowPopover({ showAccountPopover: false, event: undefined })
    };

    return (
        
        <IonHeader className="inner-main-header">
            <IonGrid>
                <IonRow className="">

                    <IonButton className="back-buton" fill="clear"  onClick={pageBack}>
                        <IonIcon slot="icon-only" src="/assets/images/back-arrow.svg" />
                    </IonButton>

                    <div className="apart-logo">
                        <IonButton className={props.logoHide} routerLink="/" fill="clear">
                            <IonImg className="logo" src="assets/images/aparto-logo.svg" />
                        </IonButton>
                    </div>

                    <h2 className="header-page-title">{props.pageTitle}</h2>

                    {/* notification popup and button start  */}
                    <IonPopover
                        cssClass='notification-popup'
                        mode="ios"
                        event={popoverState.event}
                        isOpen={popoverState.showPopover}
                        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                    >
                        <IonButton className="close-popup-button ion-hide-lg-up" fill="clear" onClick={closeNotificationPopup}>
                                <IonIcon icon={close} />
                        </IonButton>
                        <div className="notification-list">
                            <h6>Urgent</h6>
                            <div className="notification-box red-notification">
                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.leaseRenewalProposal} onClick={closeNotificationPopup}></IonButton>
                                <div className="notofication-content">
                                    <div className="notification-box-header">
                                        <h6>Lease <span>Renewal</span></h6>
                                        {/* <div className="icon">!</div> */}
                                        <IonIcon icon={alertCircleSharp} />
                                    </div>
                                    <p>Your lease ends <b>Sept. 03, 2020</b>. Tap here to see details.</p>
                                    <span className="notification-date">Jan. 1st, 2021</span>                                  
                                </div>
                            </div>
                            <div className="notification-box red-notification">
                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails} onClick={closeNotificationPopup}></IonButton>
                                <div className="notofication-content">
                                    <div className="notification-box-header">
                                        <h6>Rent <span>Overdue</span></h6>
                                        <IonIcon icon={alertCircleSharp} />
                                    </div>
                                    <p>Payment for the month of <b>Nov, 2020</b> is overdue. Tap here to pay now.</p>
                                    <span className="notification-date">Jan. 1st, 2021</span>                                  
                                </div>
                            </div>
                            <h6>Today</h6>
                            <div className="notification-box yellow-notification">
                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails} onClick={closeNotificationPopup}></IonButton>
                                <div className="notofication-content">
                                    <div className="notification-box-header">
                                        <h6>Rent <span>Reminder</span></h6>
                                        {/* <div className="icon">!</div> */}
                                        <IonIcon slot="icon-only" src="/assets/images/Pay-Rent-icon-only.svg" />
                                    </div>
                                    <p>Payment for the month of <b>Jan, 2021</b> is due soon. Tap here to see details.</p>
                                    <span className="notification-date">Jan. 1st, 2021</span>                                  
                                </div>
                            </div>
                            <h6>31-12-2021</h6>
                            <div className="notification-box yellow-notification">
                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails} onClick={closeNotificationPopup}></IonButton>
                                <div className="notofication-content">
                                    <div className="notification-box-header">
                                        <h6>Rent <span>Reminder</span></h6>
                                        {/* <div className="icon">!</div> */}
                                        <IonIcon slot="icon-only" src="/assets/images/Pay-Rent-icon-only.svg" />
                                    </div>
                                    <p>Payment for the month of <b>Dec, 2020</b> is due soon. Tap here to see details.</p>
                                    <span className="notification-date">Dec. 31st, 2020</span>                                  
                                </div>
                            </div>
                            <div className="notification-box yellow-notification">
                                <IonButton className="notification-detail-button" fill="clear" expand="full" shape="round" routerLink={Routes.rentPayDetails} onClick={closeNotificationPopup}></IonButton>
                                <div className="notofication-content">
                                    <div className="notification-box-header">
                                        <h6>Rent <span>Reminder</span></h6>
                                        {/* <div className="icon">!</div> */}
                                        <IonIcon slot="icon-only" src="/assets/images/Pay-Rent-icon-only.svg" />
                                    </div>
                                    <p>Payment for the month of <b>Nov, 2020</b> is due soon. Tap here to see details.</p>
                                    <span className="notification-date">Dec. 31st, 2020</span>                                  
                                </div>
                            </div>
                        </div>
                        <div className="notification-footer">
                            <IonButton className="notification-history-button" fill="clear" routerLink={Routes.notificationHistory} onClick={closeNotificationPopup}>History</IonButton>
                            <IonButton className="notification-clear-button" fill="clear" routerLink={Routes.rentPayDetails}>Clear Norifications</IonButton>
                        </div>
                    </IonPopover>
                    <IonButton className="notification-button ion-hide-lg-down" fill="clear" onClick={
                        (e) => {
                        // e.persist();
                        setShowPopover({ showPopover: true, event: e.nativeEvent })
                        }}
                    >
                        <IonIcon slot="icon-only" src="/assets/images/bell-icon.svg" />
                        <span className="notification-count">4</span>
                    </IonButton>
                    {/* notification popup and button end  */}


                    <IonButton className="message-button ion-hide-lg-down" fill="clear" routerLink={Routes.messaging}>
                        <IonIcon slot="icon-only" src="/assets/images/mail_outline_black_24dp.svg" />
                        {/* <span className="notification-count">4</span> */}
                    </IonButton>

                    
                    {/* account popup and button start  */}    
                    <IonPopover
                        cssClass='footer-menu' 
                        mode="ios"
                        event={accountPopoverState.event}
                        isOpen={accountPopoverState.showAccountPopover}
                        onDidDismiss={() => setAccountShowPopover({ showAccountPopover: false, event: undefined })}
                    >
                        <IonList className="footer-mobile-menu">
                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#" onClick={closeAccountPopup}>
                                    <div className="">
                                        <IonIcon icon="/assets/images/swap-horizontal.svg"  />
                                        <span className="">Tenant Account</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink={Routes.myAccount} onClick={closeAccountPopup}>
                                    <div className="">    
                                        <IonIcon icon="/assets/images/ios-person.svg"  />
                                        <span className="">Account Settings</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#" onClick={closeAccountPopup}>
                                    <div className="">    
                                        <IonIcon icon="/assets/images/bill-icon.svg"  />
                                        <span className="">Billing History</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink={Routes.serviceSettings} onClick={closeAccountPopup}>
                                    <div className="">    
                                        <IonIcon icon={settingsSharp}  />
                                        <span className="">Service Settings</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink={Routes.faq} onClick={closeAccountPopup}>
                                    <div className="">    
                                        <IonIcon />
                                        <span className="">FAQ</span>   
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="" fill="clear" routerLink="#" onClick={closeAccountPopup}>
                                    <div className="">    
                                        <IonIcon />
                                        <span className="">Logout</span>
                                    </div>
                                </IonButton>
                            </IonItem>

                        </IonList>
                    </IonPopover>
                    <IonButton 
                        className="account-button ion-hide-lg-down" 
                        fill="clear" 
                        routerLink="#"onClick={
                            (e) => {
                            // e.persist();
                            setAccountShowPopover({ showAccountPopover: true, event: e.nativeEvent })
                        }}
                    >
                        <IonIcon slot="icon-only" src="/assets/images/ios-person.svg"/>
                    </IonButton>
                    {/* account popup and button end  */} 
                        
                    {/* change property popup and button start  */} 
                    <IonPopover
                        cssClass='change-property-popup'
                        event={changeProperty.event}
                        isOpen={changeProperty.showPopover}
                        onDidDismiss={() => setChangeProperty({ showPopover: false, event: undefined })}
                    >
                        <IonGrid className="change-property-popup-wrapper">
                            <IonButton className="close-popup-button" fill="clear" onClick={closePopup}>
                                <IonIcon icon={close} />
                            </IonButton>   
                            <IonList>
                                <p>Select a propeprty...</p>
                                <IonRadioGroup onIonChange={inputChangeHandler}>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        BL1 - Belvedaire 1
                                        <p>10 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="BL1" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        4MS - 400 Maisonneuve
                                        <p>400 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="4MS" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        BL2 - Belvedaire 2
                                        <p>20 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="BL2" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>
                                        1BR - 100 Berri
                                        <p>400 Maisonneuve, Montreal</p>
                                    </IonLabel>
                                    <IonRadio mode="md" value="1BR" />
                                </IonItem>

                                </IonRadioGroup>
                            </IonList>

                            <IonGrid>
                                <IonRow>
                                    <IonCol size="6" className="login-btn">
                                        <IonButton className="manage-property-btn secondary-button" routerLink={Routes.manageProperties} expand="block" shape="round" fill="outline" onClick={closePopup}>
                                            <div className="button-inner">
                                                <IonIcon icon={createOutline} />
                                                <span>Manage List of Properties</span>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol size="6" className="login-btn">
                                        <IonButton className="add-property-btn" routerLink={Routes.addNewProperty} expand="block" shape="round" fill="outline" onClick={closePopup}>
                                            <div className="button-inner">
                                                <IonIcon icon={addOutline} />
                                                <span>Add a Property</span>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonGrid>
                    </IonPopover>

                    <IonButton 
                        className="change-property" 
                        fill="clear" 
                        // onClick={(e) =>
                        //   present({
                        //     event: e.nativeEvent,
                        //     cssClass: 'change-property-popup'
                        //   })
                        // }
                        onClick={
                            (e: any) => {
                              e.persist();
                              setChangeProperty({ showPopover: true, event: e })
                        }}
                    >
                        <IonIcon slot="icon-only" src="/assets/images/home-icon.svg" />
                        <div className="proerty-name">BL1 <span className="ion-hide-lg-down">- Belvedaire 1</span></div>
                    </IonButton>
                    {/* change property popup and button end  */} 

                </IonRow>
            </IonGrid>
        </IonHeader>
        
    );
};

export default HeaderMain;