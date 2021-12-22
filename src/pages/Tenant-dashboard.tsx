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
    IonSlide
} from '@ionic/react';
  
import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import TanatDahsboadTanatsTab from "../components/TanatDahsboadTanatsTab";
import TanatDahsboadPostsTab from "../components/TanantsDashboardPostsTab";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
  
const TenantDashboard: React.FC<{ path: string }> = ({path}) => {

    const location = useLocation();
    // console.log(location.pathname);
    
    // a ref variable to handle the current slider
    // const slider = useRef<HTMLIonSlidesElement>(null);
    const slider = useRef<any>(null);
    // a state value to bind segment value
    const [value, setValue] = useState("0");

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

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Manage Leases" logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper tenants-dashboard" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2"></IonCol>
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                    <IonSegmentButton value="0">
                                        Posts
                                    </IonSegmentButton>
                                    <IonSegmentButton value="1">
                                        Tenants
                                    </IonSegmentButton>
                                    <IonSegmentButton value="2">
                                        Management
                                    </IonSegmentButton>
                                </IonSegment>

                                <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                                    <IonSlide>
                                        <TanatDahsboadPostsTab />
                                    </IonSlide>
                                    {/*-- Package Segment --*/}
                                    <IonSlide>
                                        <TanatDahsboadTanatsTab />
                                    </IonSlide>
                                    <IonSlide>
                                        <TanatDahsboadPostsTab />
                                    </IonSlide>
                                </IonSlides>
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