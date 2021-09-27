import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ForgetPassword: React.FC = () => {
  return (
    <IonPage>

        <Header />

        <IonContent fullscreen>
            <IonGrid>
                <IonRow className="login-form-row">
                    <IonCol size="10" sizeMd="6" sizeLg="4">
                        <h2>Reset Password</h2>
                        <p>Enter the email assosicated with your account and we'll send you an email with instruction to reset your password.</p>

                        <IonLabel className="ion-margin-top" >Email Address:</IonLabel>
                        <IonInput className="ion-margin-top" placeholder="Email"/>
                        <IonButton href="#" className="ion-margin-top" expand="block" shape="round" fill="outline" >
                          Send
                        </IonButton>
                        <div  className="back-to-login ion-text-right">
                          <a href="/Home">Back to Login page</a>
                        </div>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>

    </IonPage>
  );
};

export default ForgetPassword;