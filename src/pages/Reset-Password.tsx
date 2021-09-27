import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ResetPassword: React.FC = () => {
  return (
    <IonPage>

        <Header />

        <IonContent fullscreen>
            <IonGrid>
                <IonRow className="login-form-row">
                    <IonCol size="10" sizeMd="6" sizeLg="4">
                        <h2>Create new password</h2>
                        <p>Your new password must be different from previous used password.</p>

                        <IonGrid>
                          <IonRow>
                            <IonCol size="12" className="ion-margin-top">
                              <IonLabel className="form-lable">Enter new password:</IonLabel>
                              <IonInput type="password" placeholder="Password" />
                            </IonCol>

                            <IonCol size="12" className="ion-margin-top">
                              <IonLabel className="form-lable">Cofnirm new password:</IonLabel>
                              <IonInput type="password" placeholder="Password" />
                            </IonCol>

                            <IonCol size="12" className="ion-margin-top">
                              <IonButton href="#" expand="block" shape="round" fill="outline" >
                                Reset Password
                              </IonButton>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>

    </IonPage>
  );
};

export default ResetPassword;