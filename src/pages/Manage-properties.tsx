import React, { useState } from 'react';

import { 
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonRadioGroup,
    IonItem,
    IonLabel,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton,
    IonReorder, 
    IonReorderGroup
} from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import ManagePropertyMoreMenu from '../components/ManagePropertyMoreMenu';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import { add } from "ionicons/icons";

import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';


const ManageProperties: React.FC = () => {

    const toggleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
        event.detail.complete();
    };

    return (

        <IonPage>
  
            <HeaderMain />
  
            <IonContent className="dashboard-wrapper" fullscreen>

                <IonGrid className="dashboard-main-grid manage-property-wrapper">  
                    <IonRow class="dashboard-main-row">

                        {/* sidebar start  */}
                        <DashboardSidebar />
                        {/* sidebar end  */}
                        
                        <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                            <IonList>
                                <p>Add, rearrange, edit or delete properties.</p>
                                <IonReorderGroup>
                                    <IonItem className="user-select-item">
                                        <IonLabel>
                                            BL1 - Belvedaire 1
                                            <p>10 Maisonneuve, Montreal</p>
                                        </IonLabel>
                                        <ManagePropertyMoreMenu />
                                        <IonReorder slot="end" />
                                    </IonItem>

                                    <IonItem className="user-select-item">
                                        <IonLabel>
                                            4MS - 400 Maisonneuve
                                            <p>400 Maisonneuve, Montreal</p>
                                        </IonLabel>
                                        <ManagePropertyMoreMenu />
                                        <IonReorder slot="end" />
                                    </IonItem>

                                    <IonItem className="user-select-item">
                                        <IonLabel>
                                            BL2 - Belvedaire 2
                                            <p>20 Maisonneuve, Montreal</p>
                                        </IonLabel>
                                        <ManagePropertyMoreMenu />
                                        <IonReorder slot="end" />
                                    </IonItem>

                                    <IonItem className="user-select-item">
                                        <IonLabel>
                                            1BR - 100 Berri
                                            <p>400 Maisonneuve, Montreal</p>
                                        </IonLabel>
                                        <ManagePropertyMoreMenu />
                                        <IonReorder slot="end" />
                                    </IonItem>
                                </IonReorderGroup>
                            </IonList>
                        </IonCol>
                        
                        {/* dashboar posts start */}
                        <IonCol  className="dashboard-posts" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                            
                        </IonCol>
                        {/* dashboar post end */}
                    
                    </IonRow>

                </IonGrid>
                 

                <IonFab className="property-fab-button" vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon src="/assets/images/format_list_bulleted.svg"  />
                    </IonFabButton>
                    <IonFabList side="top">
                        <IonList>
                            <IonItem>
                                <IonButton fill="clear" href="/add-new-property">
                                    <IonIcon icon={add} />  
                                    <span>Add a Property</span>
                                </IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton fill="clear">
                                    <IonIcon icon="/assets/images/reorder.svg"  />
                                    <span>Rearrange List</span>
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonFabList>
                </IonFab>
            </IonContent>

            <Footer />
            <FooterMobile />

        </IonPage>
        
    );
};

export default ManageProperties;