
import * as S from "./button.styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    color?: "orange" | "black"
}
export default function Button({ children, color="orange"}: ButtonProps) {
    return (
        <S.Button color={color}>
            {children}
        </S.Button>
    )
}