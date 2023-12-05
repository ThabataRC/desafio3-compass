import * as S from './sidemenu.styles'
import Image from 'next/image'

export default function Sidemenu() {

    return (
        <S.Container>
            <div className="wrapper"> 
                <Image src="/compass-menu-logo.png" width={240} height={32} alt="logo compass"/>
                <S.Content>
                    <S.Link href="/home">Home</S.Link>
                    <S.Link href="/login">Login</S.Link>
                    <S.Link href="/register">Register</S.Link>
                </S.Content>
            </div>
        </S.Container>
    )
}