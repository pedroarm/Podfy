import React, {useState} from 'react';
import Router from 'next/router';

import Input from "../components/Input";
import api from '../services/api'

import styles from "../../styles/SignUp.module.scss";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/register',{
        name,
        email,
        password
      })
  
      if(response) {
        console.log("Success!")
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/podfy-logo_light.svg" />

        <form className={styles.form}>
          <Input
            reference="name"
            label="Nome"
            placeholder="Digite seu nome"
            inputType="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            reference="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            inputType="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <Input
            reference="password"
            label="Senha"
            placeholder="Digite uma senha"
            inputType="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <footer className={styles.footer}>
          <p>
            Ao se registrar, você aceita nossos <strong>termos de uso</strong> e
            a nossa <strong>política de privacidade</strong>.
          </p>
          <button onClick={handleSubmit}>Começar</button>
        </footer>
      </main>
    </div>
  );
}
