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

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Controller, Thumbs  } from 'swiper';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';



import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import { Routes } from "../App";

const PostDetails: React.FC<{ path: string }> = ({path}) => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);
    const firstSwiper1 = useRef<HTMLIonContentElement | null>(null);
    const [firstSwiper, setFirstSwiper] = useState();
    const [secondSwiper, setSecondSwiper] = useState();
    const [thumbsSwiper, setThumbsSwiper] = useState();

   

    useEffect(() => {
        // firstSwiper1.controller.control = secondSwiper;  
        // secondSwiper.controller.control = firstSwiper;
    });


    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
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
                                    <div className="swipe-slider">
                                        <Swiper
                                            className="post-main-image-slider"
                                            // ref={firstSwiper}
                                            modules={[Navigation, Controller, Thumbs]}
                                            // loop={true}
                                            navigation
                                            onSwiper={() => setFirstSwiper}
                                            controller={{ control: secondSwiper }}
                                            thumbs={{ swiper: thumbsSwiper }}
                                        >
                                            <SwiperSlide>  
                                                <IonImg className="main-post-image" src="assets/images/sofa.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <IonImg className="main-post-image" src="assets/images/sofa2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <IonImg className="main-post-image" src="assets/images/sofa.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <Swiper 
                                        className="post-thumbnail-slider"
                                        modules={[Controller, Thumbs]}
                                        // slidesPerView={3}
                                        spaceBetween={15}
                                        // loop={true}
                                        onSwiper={() => setSecondSwiper}
                                        controller={{ control: firstSwiper }}
                                        // watchSlidesProgress
                                        // onSwiper={() => setThumbsSwiper}
                                    >
                                        <SwiperSlide>
                                            <IonImg className="thumbnail-post-image" src="assets/images/sofa.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <IonImg className="thumbnail-post-image" src="assets/images/sofa2.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <IonImg className="thumbnail-post-image" src="assets/images/sofa.jpg" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <div className="post-details-content">
                                    <div className="post-details-header">
                                        <div className="post-details-title">
                                            <h3>Mask Requirement</h3>
                                            <p className="post-detail-date">Date posted: Jun, 22nd , 2020</p>
                                        </div>
                                        <IonButton className="message-poster-button" routerLink="#" shape="round" fill="outline">
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