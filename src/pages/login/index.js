/*import React from 'react';
import TitlePage from "../../components/UI/Title/TitlePage";
const Index = () => {
    return (
        <div>
            <TitlePage title="Login"/>
        </div>
    );
}

export default Index;*/



// créer le login + fetch endpoint de l'api
// côté api sur register renvoyer jwt
// dans le cas register et login:
    //-> Si requête Ok : stocker le jwt dans le localstorage et rediriger vers la page profil (à créer)
    //-> Si requête NoOk : afficher un message d'erreur sur le formulaire
    import { useRouter } from "next/router";
    import React, {useState}  from 'react';
    import Input from "../../components/UI/Input/Input";
    import TitlePage from "../../components/UI/Title/TitlePage";
    import styles from "./index.module.scss";
    import authService from "../../services/auth.service"
    const Index = () => {
        const router = useRouter();
        const[user, setUser] = useState({});
        const handleSubmit = (e) => {
          e.preventDefault(); //enlève le submit refresh qui est par defaut
          authService.login(user)//on fetch : va chercher dans le controller de l'api, appelle la fonction dans sources
          .then(data => {
            console.log(data);
            localStorage.setItem("token", data.token) //si le token est bon on redirige la page vers profil et on enregistre le toker dans le localStorage
            router.push("/");
          })
          .catch(err => console.log(err))
          }
        return (
            <div className="page__login">
                <TitlePage title="Connexion"/>
                <p className="text-center">
                    Connecter vous à votre profil
                </p>
                <form className={styles.form__login} onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        type="email"
                        label="Identifiant"
                        id="email"
                        name="email"
                        placeholder="Mon identifiant"
                        required={true}
                        onChange={(e)=> { //evenement quand on ecrit dans un champ
                            setUser({...user, email:e.target.value}) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
                            console.log(user)
                          }}
                        
                    />
                    <Input
                        type="password"
                        label="Mot de passe"
                        id="password"
                        name="password"
                        placeholder="Mon mot de passe"
                        required={true}
                        onChange={(e)=> {
                            setUser({...user, password:e.target.value}) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
                            console.log(user)
                          }}
                    />
                    <input className="btn btn-black" type="submit" value="Connexion"/>
                </form>
            </div>
    
        );
    }
    
    export default Index;
    


//logout quand on clique dessus on detruit le token
