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
    IonAvatar 
  } from '@ionic/react';
  
  import HeaderMain from '../components/Header-main';
  
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  
  const ManagementDashboard: React.FC = () => {
  
     return (
        <IonPage>
  
           <HeaderMain />
  
           <IonContent className="dashboard-wrapper" fullscreen>
              <IonGrid>
                 <IonRow>
                    <IonCol className="dashboard-sidebar" size="12" sizeMd="3" sizeLg="2">
                        <IonList className="sidebar-menu-list">
                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <IonAvatar>
                                        <img src="assets/images/Manage-Lease-home.svg" />
                                    </IonAvatar>
                                    <IonLabel>Manage <b>Tenants & Leases</b></IonLabel>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <IonAvatar>
                                        <img src="assets/images/Pay-Rent-home.svg" />
                                    </IonAvatar>
                                    <IonLabel>Manage <b>Rents</b></IonLabel>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <IonAvatar>
                                        <img src="assets/images/Repair-home.svg" />
                                    </IonAvatar>
                                    <IonLabel>Manage <b>Requests</b></IonLabel>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" fill="clear" href="#">
                                    <IonAvatar>
                                        <img src="assets/images/Posts-Home-Icon.svg" />
                                    </IonAvatar>
                                    <IonLabel>Manage <b>Posts</b></IonLabel>
                                </IonButton>
                            </IonItem>

                            <IonItem>
                                <IonButton className="dashboard-button" slot="start" fill="clear" href="#">
                                    <IonAvatar>
                                        <img src="assets/images/Staff-home.svg" />
                                    </IonAvatar>
                                    <IonLabel>Manage <b>Staff accesses</b></IonLabel>
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonCol>

                    <IonCol className="dashboard-content" size="12" sizeMd="6" sizeLg="8">
                        <h4>Hi John,</h4>
                        <p>You are presently managing the following property:</p>

                        <IonList className="property-list">
                            <div  className="property-list-item">
                                <h4 className="property-name">BL1 - Belvedaire 1</h4>
                                <p className="property-address">2030 Maisonneuve Ouest , Maisonneuve ouest</p>
                                <div className="property-item-footer">
                                    <p className="property-owner">Concierge: Jean Francois G.</p>
                                </div>
                            </div>
                        </IonList>
                    </IonCol>

                    <IonCol  className="dashboard-posts" size="12" sizeMd="3" sizeLg="2">
                        
                    </IonCol>
  
                 </IonRow>
              </IonGrid>
          </IonContent>
  
      </IonPage>
    );
  };
  
  export default ManagementDashboard;