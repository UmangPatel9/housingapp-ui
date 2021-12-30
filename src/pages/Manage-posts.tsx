import React, {useEffect, useRef, useState} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol, 
    IonInput, 
    IonLabel, 
    IonButton, 
    IonIcon,
    IonItem,
    IonImg
} from '@ionic/react';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';
import { Accordion } from "../components/Accordion";

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";

const ManagePosts: React.FC<{ path: string }> = ({path}) => {

    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom= () => {
        contentRef.current && contentRef.current.scrollToBottom(500);
    };

    const pinnedPosts = [
        { 
            id: "1",
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        }
    ];

    const generalPosts = [
        { 
            id: "1",
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        },
        { 
            id: "2",
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        },
        { 
            id: "3",
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        },
        { 
            id: "4",
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        },
        { 
            id: "5",
            title: "How to change Lease Code for your apartment?", 
            content: "You may want to change Lease Code for your apartment in case it was accidently leaked. To do so, contact the management who will be able to generate a new Lease Code." 
        }
    ];

    const [pinnedPostsData, setPinnedPostsData] = useState<Array<any>>(pinnedPosts);
    const [generalPostsData, setGeneralPostsData] = useState<Array<any>>(generalPosts);
    useEffect(() => {
        setPinnedPostsData(pinnedPosts);
        setGeneralPostsData(generalPosts);
    });

    const renderPinnedPostsData = () => {
        return pinnedPostsData.map(item => {
            return (
                <div key={item.id}>
                    <Accordion
                        title={item.title}
                        content={item.content}
                    />
                </div>
            );
        })
    }

    const renderGeneralPostsData = () => {
        return generalPostsData.map(item => {
            return (
                <div key={item.id}>
                    <Accordion
                        title={item.title}
                        content={item.content}
                    />
                </div>
            );
        })
    }

    return (
        <IonPage>
  
           <HeaderMain pageTitle="Manage Posts"  logoHide="hide-logo" />
  
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
                                    <p>Here you can make announcements to all tenants or display relevant info related to the building.</p>
                                    <div className="posts-list pinned-posts">
                                        <h3 className="title-with-line">Pinned Posts:</h3>
                                        {/* <MyAccordion
                                            list={pinnedPostsData}
                                            renderHeader={(item: any) => {
                                                return (
                                                    <h4>{item.title}</h4>
                                                );
                                            }}
                                            renderPanel={(item: any) => {
                                                return (
                                                    <p>{item.content}</p>
                                                );
                                            }}
                                        /> */}
                                        {renderPinnedPostsData()}
                                    </div>
                                    
                                    <div className="posts-list general-posts">
                                        <h3 className="title-with-line">General Posts:</h3>
                                        {renderGeneralPostsData()}
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

export default ManagePosts;