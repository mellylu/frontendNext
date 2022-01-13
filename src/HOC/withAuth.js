//import React,
//const withAuth = (WrappedComponent) => {
    //userEffect(()=> {
        //on va chercher le tocker
        //on consomme un endpoint de vérification de token qui renvoie true ou false
        //dans le then => set verify
        //dans le useEffect
    //}, []);
    //if(verify){
        //- cas 1 : si true return <WrappedComponent {..props}/>
    //}
    //else{
        //- cas 2 : si false on redirige sur login
        //remove du localstorage
//}
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      authService
        .verifyToken(token)
        .then((data) => {
          if (data.verify) {
            setVerify(true);
          } else {
            localStorage.removeItem("token");
            router.push("/login");
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    }, []);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;