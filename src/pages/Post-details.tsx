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
    IonSlides, 
    IonSlide,
    IonSegment,
    IonSegmentButton,
    IonImg
} from '@ionic/react';

import { chevronBackSharp, chevronForwardSharp } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const PostDetails: React.FC<{ path: string }> = ({path}) => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const slider = useRef<any>(null);
    const [value, setValue] = useState("0");

    useEffect(() => {
        // slider.current.lockSwipes(true);
    });

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    };

    const nextSlideChange = async (event: any) => {
        event.Slides.slideNext();
    };

    const prevSlideChange = async (event: any) => {
        event.Slides.slidePrev();
    };

    return (
        <IonPage>
  
           <HeaderMain pageTitle=""  logoHide="" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2"></IonCol>
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner post-details">
                                <div className="post-images-slider">
                                    <IonSlides options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                                        <IonSlide>  
                                            <IonImg className="main-post-image" src="assets/images/sofa.jpg" />
                                        </IonSlide>
                                        <IonSlide>
                                            <IonImg className="main-post-image" src="assets/images/sofa2.jpg" />
                                        </IonSlide>
                                        <IonSlide>
                                            <IonImg className="main-post-image" src="assets/images/sofa.jpg" />
                                        </IonSlide>
                                    </IonSlides>

                                    <div className="slider-arrows">
                                        <IonButton className="swiper-button-prev" fill="clear" onClick={prevSlideChange}>
                                            <IonIcon icon={chevronBackSharp} />
                                        </IonButton>
                                        <IonButton className="swiper-button-next" fill="clear" onClick={nextSlideChange}>
                                            <IonIcon icon={chevronForwardSharp} />
                                        </IonButton>
                                    </div>

                                    <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                        <IonSegmentButton value="0">
                                            <IonImg className="thumbnail-post-image" src="assets/images/sofa.jpg" />
                                        </IonSegmentButton>
                                        <IonSegmentButton value="1">
                                            <IonImg className="thumbnail-post-image" src="assets/images/sofa2.jpg" />
                                        </IonSegmentButton>
                                        <IonSegmentButton value="2">
                                            <IonImg className="thumbnail-post-image" src="assets/images/sofa.jpg" />
                                        </IonSegmentButton>
                                    </IonSegment>
                                </div>

                                <div className="post-details-content">
                                    <div className="post-details-header">
                                        <div className="post-details-title">
                                            <h3>Mask Requirement</h3>
                                            <p className="post-detail-date">Date posted: Jun, 22nd , 2020</p>
                                        </div>
                                        <IonButton className="message-poster-button" routerLink={Routes.addNewProperty} shape="round" fill="outline">
                                            <div className="button-inner">
                                                <IonIcon src="assets/images/Chat-Bubble.svg" />
                                                <span>Message Poster</span>
                                            </div>
                                        </IonButton>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
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

                <IonButton className="scroll-to-bottom-btn" onClick={scrollToBottom} fill="clear">
                    <IonIcon icon="assets/images/double-arrow-down.svg" />
                </IonButton>
              
                <Footer />

            </IonContent>

            <FooterMobile />
      </IonPage>
            
        
        
    );
};

export default PostDetails;