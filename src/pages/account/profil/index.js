import React, { useEffect, useState } from "react";
import TitlePage from "../../../components/UI/Title/TitlePage";
import authService from "../../../services/auth.service";
import Input from "../../../components/UI/Input/Input";
import styles from "./index.module.scss";
import Message from "../../../components/UI/Message/Message";
import withAuth from "../../../HOC/withAuth";
const Index = () => {
  const [user, setUser] = useState({});
    const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    authService
      .updateUser(token, user)
        .then((data) => {
            console.log(data);
            setSuccess(true);
            setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TitlePage title="mon compte" />
      <form className={styles.form__profil} onSubmit={(e) => handleSubmit(e)}>
        <Input
          label="Prénom"
          type="text"
          id="firstName"
          name="firstName"
          value={(user && user.firstName) || ""}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
        <Input
          label="Nom"
          type="text"
          id="lastName"
          name="lastName"
          value={(user && user.lastName) || ""}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
        <Input
          label="Email"
          type="text"
          id="email"
          name="email"
          value={(user && user.email) || ""}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
              <input type="submit" className="btn btn-black" />
              {success ? (
                  <Message type="success" message="votre profil a bien été modifié"/>
              ) : ""
            }
      </form>
    </div>
  );
};

export default withAuth(Index);