import React, {useState, useEffect} from "react";

import {  
    IonLabel, 
    IonButton,  
    IonCol, 
    IonList,
    IonItem,
    IonAvatar
  } from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from "../App";
import { getClassName } from "@ionic/react/dist/types/components/utils";

const TENANTS = "tenants"
const RENTS = "rents"
const REPAIRS = "repairs"
const POSTS = "posts"
const STAFF = "staff"


const DashboardSidebar: React.FC<{path: string}> = ({path}) => {
    
    const getClassName = (routePath: string[], className: string): string => {
        // let activeClassName = "";
        return routePath.indexOf(path) > -1 ? (className + " active") : className
    }

    return (

        <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
            <p className="ion-hide-lg-up">What would you like to do today?</p>

            <IonList className="sidebar-menu-list">

                <IonItem>
                    <IonButton id={TENANTS} className={getClassName([Routes.manageTenants, Routes.leaseInfo, Routes.editLeaseInfo, Routes.addNewLease, Routes.leaseRenewalProposal], "dashboard-button")} fill="clear" routerLink={Routes.manageTenants}>
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Manage-Lease-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label"><b>Tenants</b> & <b>Leases</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton id={RENTS} className={getClassName([Routes.manageRents, Routes.rentPayDetails], "dashboard-button")} fill="clear" routerLink={Routes.manageRents}>
                        <div className="dashboard-button-inner">    
                            <IonAvatar>
                                <img src="assets/images/Pay-Rent-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label"><b>Rents</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="dashboard-button" fill="clear" routerLink="#">
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Repair-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label"><b>Repairs</b> & <b>Requests</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton id={POSTS} className={getClassName([Routes.managePosts, Routes.createPosts, Routes.editPost], "dashboard-button")} fill="clear" routerLink={Routes.managePosts}>
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Posts-Home-Icon.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label"><b>Posts</b> & <b>Marketplace</b></IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="dashboard-button" slot="start" fill="clear" routerLink="#">
                        <div className="dashboard-button-inner">
                            <IonAvatar>
                                <img src="assets/images/Staff-home.svg" />
                            </IonAvatar>
                            <IonLabel  className="dashboard-button-label"><b>Staff</b> accesses</IonLabel>
                        </div>
                    </IonButton>
                </IonItem>

            </IonList>
        </IonCol>
        
    );
};

export default DashboardSidebar;