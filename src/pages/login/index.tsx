import Input from "@/components/Input/input";
import Button from "@/components/button";
import * as S from "@/styles/index.styled";
import { useState } from "react";
import { api } from "../api/api";
import Link from "next/link";


interface Account {
    username: string;
    password: string;
}

interface AccountValid {
    error?: boolean;
    mensage?: string;
}
export default function Home() {

    const [accountValid, setAccountValid] = useState<AccountValid | any>({})
    

    const [account, setAccount] = useState<Account | any>({})

    async function handleRegister(e: any) {
        e.preventDefault()
        api.post('/auth/login', account)
            .then(response => {
                console.log(response)
                localStorage.setItem('authToken', response.data.token)
                window.location.href = '/home'
            })
            .catch(error => {
                console.log(error)
                setAccountValid({
                    error: true,
                    mensage: 'Usuário ou senha inválidos'
                })


            })
    }

    return (
        <S.Container>
            <S.SectionForm onSubmit={(e) => handleRegister(e)}>
                <header>
                    <h1>Olá,</h1>
                    <span>Para continuar navegando de forma segura, efetue o login.</span>
                    <h2>Login</h2>
                </header>

                <div className="input-containers">
                    <Input placeholder="Usuário" iconURL="/icons/user.svg" value={account.username} onChange={e => setAccount({ ...account, username: e.target.value })} />
                    <Input type="password" placeholder="Senha" iconURL="/icons/password.svg" value={account.password} onChange={e => setAccount({ ...account, password: e.target.value })}  error={accountValid.error} msgError={accountValid.mensage}/>
                </div>

                <div className="button-container">
                    <Button type="submit">Entrar</Button>
                    <span>Novo por aqui? <Link href="/">Registre-se</Link></span>
                </div>
            </S.SectionForm>

            <S.SectionImage>
                <img src="/background.png" />
            </S.SectionImage>
        </S.Container>
    )
}
