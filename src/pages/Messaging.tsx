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
    IonButton,
    IonIcon
} from '@ionic/react';

import { addSharp } from "ionicons/icons";
  
import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';
import MessagingTenantsTab from "../components/MessagingTenantsTab";
import MessagingStaffTab from "../components/MessagingStaffTab";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';
  
const Messaging: React.FC<{ path: string }> = ({path}) => {

    // a ref variable to handle the current slider
    // const slider = useRef<HTMLIonSlidesElement>(null);
    const slider = useRef<any>(null);
    // a state value to bind segment value
    const [value, setValue] = useState("0");
    // useEffect(() => {
    //     slider.current.lockSwipes(true);
    // });

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

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Messaging" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper manage-rents-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content messaging-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                    <IonSegmentButton value="0">
                                        Tenants
                                    </IonSegmentButton>
                                    <IonSegmentButton value="1">
                                        Staff
                                    </IonSegmentButton>
                                </IonSegment>

                                <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                                    <IonSlide>
                                        <MessagingTenantsTab />
                                    </IonSlide>
                                    {/*-- Package Segment --*/}
                                    <IonSlide>
                                        <MessagingStaffTab />
                                    </IonSlide>
                                </IonSlides>

                                <IonButton 
                                    className="property-change-button" 
                                    fill="clear"
                                    routerLink={Routes.messaging}
                                >
                                        <IonIcon icon={addSharp}  />
                                </IonButton>
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
  
  export default Messaging;