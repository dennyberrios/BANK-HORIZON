import { ContentButton } from "./styles";

const Button = ({ children, $corDeFundo, $corDeFundoHover, $textColor, onClick, type }) => {
    return ( 
        <ContentButton 
            $corDeFundo={$corDeFundo} 
            $corDeFundoHover={$corDeFundoHover} 
            $textColor={$textColor}
            onClick={onClick}
            type={type}
        >
            {children}
        </ContentButton>
     );
}
 
export default Button;