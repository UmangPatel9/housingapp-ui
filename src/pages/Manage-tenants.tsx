import React, {useRef, useState} from "react";
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
import DashboardSidebar from '../components/Dahsboard-sidebar';
import ManageTenantGeneralTab from '../components/ManageTenanatGeneralTab';
import ManageTenanatSearchTab from '../components/ManageTenanatSearchTab';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
  
const ManageTenants: React.FC = () => {

    const location = useLocation();
    // console.log(location.pathname);
    
    // a ref variable to handle the current slider
    const slider = useRef<HTMLIonSlidesElement>(null);
    // a state value to bind segment value
    const [value, setValue] = useState("0");

    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      loop: false,
      pagination: {
        el: null
      },
    
    };

    // a function to handle the segment changes
    const handleSegmentChange = (e: any) => {
      setValue(e.detail.value);
      slider.current!.slideTo(e.detail.value);
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
  
           <IonContent className="dashboard-wrapper manage-tenants-wrapper" fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                    <IonSegmentButton value="0">
                                        General
                                    </IonSegmentButton>
                                    <IonSegmentButton value="1">
                                        Search Tool
                                    </IonSegmentButton>
                                </IonSegment>

                                <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                                    <IonSlide>
                                        <ManageTenantGeneralTab />
                                    </IonSlide>
                                    {/*-- Package Segment --*/}
                                    <IonSlide>
                                        <ManageTenanatSearchTab />
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
  
  export default ManageTenants;