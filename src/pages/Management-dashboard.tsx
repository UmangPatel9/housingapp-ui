import { 
    IonContent, 
    IonPage, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonList,
    IonItem,
    IonAvatar,
    IonIcon 
  } from '@ionic/react';
  
  import HeaderMain from '../components/Header-main';
  import Footer from '../components/Footer';
  
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  
  const ManagementDashboard: React.FC = () => {
  
     return (
        <IonPage>
  
           <HeaderMain />
  
           <IonContent className="dashboard-wrapper" fullscreen>
              <IonGrid className="dashboard-main-grid">
                 <IonRow className="dashboard-main-row">
                    
                    {/* sidebar start  */}
                    <IonCol className="dashboard-sidebar" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                        <p className="ion-hide-lg-up">What would you like to do today?</p>

                        <IonList className="sidebar-menu-list">
                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <div className="dashboard-button-inner">
                                        <IonAvatar>
                                            <img src="assets/images/Manage-Lease-home.svg" />
                                        </IonAvatar>
                                        <IonLabel  className="dashboard-button-label">Manage <b>Tenants & Leases</b></IonLabel>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <div className="dashboard-button-inner">    
                                        <IonAvatar>
                                            <img src="assets/images/Pay-Rent-home.svg" />
                                        </IonAvatar>
                                        <IonLabel  className="dashboard-button-label">Manage <b>Rents</b></IonLabel>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <div className="dashboard-button-inner">
                                        <IonAvatar>
                                            <img src="assets/images/Repair-home.svg" />
                                        </IonAvatar>
                                        <IonLabel  className="dashboard-button-label">Manage <b>Requests</b></IonLabel>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <div className="dashboard-button-inner">
                                        <IonAvatar>
                                            <img src="assets/images/Posts-Home-Icon.svg" />
                                        </IonAvatar>
                                        <IonLabel  className="dashboard-button-label">Manage <b>Posts</b></IonLabel>
                                    </div>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" slot="start" fill="clear" href="#">
                                    <div className="dashboard-button-inner">
                                        <IonAvatar>
                                            <img src="assets/images/Staff-home.svg" />
                                        </IonAvatar>
                                        <IonLabel  className="dashboard-button-label">Manage <b>Staff accesses</b></IonLabel>
                                    </div>
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonCol>
                    {/* sidebar end  */}


                    {/* dashboar content start */}
                    <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="8">
                        <h4>Hi John,</h4>
                        <p>You are presently managing the following property:</p>

                        <IonList className="property-list">
                            <div  className="property-list-item">
                                <div  className="property-list-item-content">
                                    <h4 className="property-name">BL1 - Belvedaire 1</h4>
                                    <p className="property-address">2030 Maisonneuve Ouest , Maisonneuve ouest</p>
                                    <div className="property-item-footer">
                                        <p className="property-owner">Concierge: Jean Francois G.</p>
                                        <IonButton className="change-property-button" fill="clear" href="#">
                                            <span>Change</span>
                                            <IonIcon src="/assets/images/exchange-icon.svg" />
                                        </IonButton>
                                    </div>
                                </div>
                            </div>
                        </IonList>
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

  
      </IonPage>
    );
  };
  
  export default ManagementDashboard;