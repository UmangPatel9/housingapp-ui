import React, {useEffect, useRef, useState} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonButton, 
    IonIcon
} from '@ionic/react';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';
import { FaqAccordion } from "../components/FaqAccordion";

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const FAQ: React.FC<{ path: string }> = ({path}) => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const faqs = [
        { 
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        },
        { 
            title: "How to request a refund?", 
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd." 
        },
        { 
            title: "How to add a new co-tenant to your lease?", 
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd."
        },
        { 
            title: "How to revoke lease access as an admin?", 
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd."
        },
        { 
            title: "More questions?", 
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
            attachFile: "1. My Filename1.jpg" 
        }
    ];

    const [faqsData, setFaqsData] = useState<Array<any>>(faqs);
    useEffect(() => {
        // setPinnedPostsData(pinnedPosts);
        // setGeneralPostsData(generalPosts);
    });

    const renderFaqData = () => {
        return faqsData.map((item, i) => {
            return (
                <div key={i}>
                    <FaqAccordion
                        title={item.title}
                        content={item.content}
                    />
                </div>
            );
        })
    }

    return (
        <IonPage>
  
           <HeaderMain pageTitle="FAQs"  logoHide="hide-logo" />
  
           <IonContent className="dashboard-wrapper lease-info-wrapper" ref={contentRef} scrollEvents={true} fullscreen>
                <IonGrid className="dashboard-main-grid">
                    <IonRow className="dashboard-main-row">
                        
                        {/* sidebar start  */}
                        <DashboardSidebar path={path} />
                        {/* sidebar end  */}


                        {/* dashboar content start */}
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <div className="dashboard-content-inner">
                                <div className="manage-posts-wrapper">                                
                                    <div className="posts-list">
                                        {renderFaqData()}
                                    </div>

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

export default FAQ;