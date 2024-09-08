import { useState } from "react";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import InputTextLabel from "../../components/InputTextLabel";
import { backgroundDarkGreen, backgroundLightBlue, borderLightTeal, colorDarkGreen, colorHeroText } from "../../components/UI/Colors";
import { ContentDeposito } from "./styles";

const Deposito = () => {
    const [deposito, setDeposito] = useState("");

    function postForm(e) {
        e.preventDefault()
        console.log(deposito);
    }

    return (
        <Container>
            <ContentDeposito>
                <form onSubmit={postForm}>
                    <legend>Valor do Depósito</legend>
                    <InputTextLabel 
                        placeholder={"Digite o Valor"}
                        $borda={borderLightTeal}
                        $corDeFundo={backgroundLightBlue}
                        $corBg={colorDarkGreen}
                        value={deposito}
                        change={valor =>  setDeposito(valor)}
                        type={'text'}
                        name={"valor"}
                        required={true}

                    />
                    <Button
                        $corDeFundo={backgroundDarkGreen}
                        $corDeFundoHover={colorDarkGreen}
                        $textColor={colorHeroText}
                        type={'submit'}
                    >DEPOSITAR</Button>
                </form>
            </ContentDeposito>
        </Container>
    );
}

export default Deposito;