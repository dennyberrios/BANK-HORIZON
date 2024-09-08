import Button from "../../components/Button";
import { Container } from "../../components/Container";
import InputTextLabel from "../../components/InputTextLabel";
import { ContentSelecaoDeClientes } from "./styles";
import Search from '../../assets/svg/search.svg'
import { backgroundDarkGreen, backgroundLightBlue } from "../../components/UI/Colors";

const SelecaoDeClientes = () => {
    return (
        <Container>
            <ContentSelecaoDeClientes>
                <h2>Seleção de clientes</h2>
                <div className="box__search">
                    <InputTextLabel
                        $borda={backgroundDarkGreen}
                        $corDeFundo={backgroundLightBlue}
                    />
                    <Button type={'button'}><img src={Search} alt="" /></Button>
                </div>
            </ContentSelecaoDeClientes>
        </Container>
    );
}

export default SelecaoDeClientes;