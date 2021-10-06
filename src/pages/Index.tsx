import { 
  IonContent, 
  IonPage, 
  IonIcon, 
  IonInput, 
  IonButton, 
  IonGrid, 
  IonRow, 
  IonCol 
} from '@ionic/react';
import { useHistory } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Home: React.FC = () => {

  let history = useHistory();
  const methods = useForm({ mode: "all"});
  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    history.push("/Management-dashboard");
  };

  const doNothing = () => {

  }

  return (
    <IonPage>

      <Header class="without-back-arrow" onBack={doNothing} />

      <IonContent fullscreen>
        <IonGrid className="full-height-div">
          <IonRow className="login-form-row">
            <IonCol size="10" sizeMd="6" sizeLg="4">
              <FormProvider {...methods}>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <IonGrid>
                    <IonRow>
                        <IonCol size="12" className="email-field">
                          {/* <IonInput placeholder="Email"/> */}
                          <IonInput
                            mode="md"
                            type="email"
                            placeholder="Email"
                            {...register('email', {
                              required: 'Email is a required',
                              pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: 'Invalid email address'
                              }
                            })}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="email"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                          />
                        </IonCol>

                        <IonCol size="12" className="password-field">
                          {/* <IonInput type="password" placeholder="Password" /> */}
                          <IonInput 
                            mode="md"
                            type="password" 
                            placeholder="Password"
                            {...register('password1', {
                              required: 'Password is Required'
                            })}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="password1"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                          />
                        </IonCol>

                        <IonCol size="12" className="forget-password ion-text-right">
                          <a href="/forget-password">Forget password?</a>
                        </IonCol>

                        <IonCol size="6" className="sign-up-btn">
                          <IonButton  className="secondary-button" href="/Signup" expand="block" shape="round" fill="outline">
                            Signup
                          </IonButton>
                        </IonCol>

                        <IonCol size="6" className="login-btn">
                          <IonButton type="submit" expand="block" shape="round" fill="outline" >
                            Login
                          </IonButton>
                        </IonCol>

                        <IonCol size="12" className="gmail-btn">
                          <IonButton href="#" expand="block" shape="round" fill="outline" >
                            <IonIcon slot="start" src="/assets/images/google.svg" />
                            Login with Gmail
                          </IonButton>
                        </IonCol>

                    </IonRow>
                  </IonGrid>
                </form>
              </FormProvider>
            </IonCol>

          </IonRow>
        </IonGrid>

      </IonContent>

      

    </IonPage>
  );
};

export default Home;
