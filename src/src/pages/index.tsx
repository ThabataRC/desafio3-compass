import Input from "@/components/Input/input";
import Button from "@/components/button";
import * as S from "@/styles/index.styled";
import { useState } from "react";
import { api } from "./api/api";
import Link from "next/link";


export interface Account {
  name: string;
  username: string;
  birthdate: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AccountValid {
  name: boolean;
  username: boolean;
  birthdate: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}
export default function Home() {
  
  const [account, setAccount] = useState<Account | any>({})
  const [accountValid, setAccountValid] = useState<AccountValid | any>({})
  function emailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
  }
  async function handleRegister(e: any) {
    e.preventDefault()

    if (account.password !== account.confirmPassword) {
      accountValid.confirmPassword = true
      accountValid.password = true
      return
    }else if (account.name >= 255){
      accountValid.name = true
      return
    } else if (account.username >= 255) {
      accountValid.username = true
      return
    } else if (emailValid(account.email) ) {
      accountValid.email = true
      return
    }

    api.post('/auth/register', account)
    .then(response => {
      console.log(response)
      localStorage.setItem('authToken', response.data.token)
      window.location.href = '/home'
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <S.Container>
      <S.SectionForm onSubmit={(e) => handleRegister(e)}>
        <header>
          <h1>Olá,</h1>
          <span>Por favor, registre-se para continuar.</span>
          <h2>Cadastrar</h2>
        </header>

        <div className="input-containers">
          <Input placeholder="Nome" iconURL="/icons/person.svg" value={account.name} onChange={e => setAccount({...account, name: e.target.value})} error={accountValid.name} msgError="Nome muito grande"/>
          <Input placeholder="Usuário" iconURL="/icons/user.svg" value={account.username} onChange={e => setAccount({...account, username: e.target.value})} error={accountValid.username} msgError="Nome de usuário muito grande"/>
          <Input placeholder="Nascimento" type="date" iconURL="/icons/calendar.svg" value={account.birthdate} onChange={e => setAccount({...account, birthdate: e.target.value})} error ={accountValid.birthdate} msgError="Data inválida"/>
          <Input placeholder="E-mail" iconURL="/icons/email.svg"  value={account.email} onChange={e => setAccount({...account, email: e.target.value})} error={accountValid.email} msgError="Email invalido"/>
          <Input placeholder="Senha" iconURL="/icons/password.svg" value={account.password} onChange={e => setAccount({...account, password: e.target.value})} error={accountValid.password} msgError="Senhas não conferem"/>
          <Input placeholder="Confirmar Senha" iconURL="/icons/verify.svg" value={account.confirmPassword} onChange={e => setAccount({...account, confirmPassword: e.target.value})} error={accountValid.confirmPassword} msgError="As senhas devem ser iguais"/>
        </div>

        <div className="button-container">
          <Button type="submit">Registre-se</Button>
          <span>Ja tem uma conta? <Link href="/login">Faça Login</Link></span>
        </div>
      </S.SectionForm>

      <S.SectionImage>
        <img src="/background.png" />
      </S.SectionImage>
    </S.Container>
  )
}
