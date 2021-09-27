import { IonContent, IonPage, IonIcon, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <Header />

      <IonContent fullscreen>
        <IonGrid className="full-height-div">
          <IonRow className="login-form-row">
            <IonCol size="10" sizeMd="6" sizeLg="4">
              <form className="login-form">
                <IonGrid>
                  <IonRow>
                      <IonCol size="12" className="email-field">
                        <IonInput placeholder="Email"/>
                      </IonCol>

                      <IonCol size="12" className="password-field">
                        <IonInput type="password" placeholder="Password" />
                      </IonCol>

                      <IonCol size="12" className="forget-password ion-text-right">
                        <a href="/Forget-Password">Forget password?</a>
                      </IonCol>

                      <IonCol size="6" className="sign-up-btn">
                        <IonButton href="/Signup" expand="block" shape="round" fill="outline">
                          Sign Up
                        </IonButton>
                      </IonCol>

                      <IonCol size="6" className="login-btn">
                        <IonButton type="submit" expand="block" shape="round" fill="outline" >
                          Login
                        </IonButton>
                      </IonCol>

                      <IonCol size="12" className="gmail-btn">
                        <IonButton href="#" expand="block" shape="round" fill="outline" >
                          <IonIcon slot="start" src="/assets/icon/google.svg" />
                          Login with Gmail
                        </IonButton>
                      </IonCol>

                  </IonRow>
                </IonGrid>
              </form>
            </IonCol>

          </IonRow>
        </IonGrid>

      </IonContent>

      

    </IonPage>
  );
};

export default Home;
