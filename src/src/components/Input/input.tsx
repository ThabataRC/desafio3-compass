import Image from 'next/image';
import * as S from './input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    iconURL?: string
    msgError?: string
    error?: boolean
}

export default function Input({ placeholder, iconURL, msgError, error, ...props }: InputProps) {
    return (
        <S.Wrapper>
            <S.Container>
                <S.InputComponent placeholder={placeholder} {...props} />
                {iconURL && <Image src={iconURL} width={20} height={20} alt={placeholder}/>}
            </S.Container>
            { error && <p className="msgError">{msgError}</p>}
        </S.Wrapper>
    )
}