import { ButtonLink } from "../../components/Button/styles";
import { Container } from "../../components/Container";
import { Action, ContentSaldo } from "./styles";
import IconPix from './../../assets/svg/Pix_icon.svg';
import IconCodigoDeBarra from './../../assets/svg/barcode.svg';
import IconTransferencia from './../../assets/svg/sync_alt.svg';
import IconDeposito from './../../assets/svg/place_item.svg';
import IconTresPontos from './../../assets/svg/more_vert.svg';
import IconCash from './../../assets/svg/cash.svg';

const Saldo = () => {
    return (
        <Container>
            <ContentSaldo>
                <p>Saldo em conta</p>
                <p className="saldo">R$ 592,74</p>
            </ContentSaldo>
            <Action>
                <ButtonLink to={"/painel/saldo"}><img src={IconPix} alt="" />PIX</ButtonLink>
                <ButtonLink to={"/painel/saldo"}><img src={IconCodigoDeBarra} alt="" /> Pagar</ButtonLink>
                <ButtonLink to={"/painel/saldo"}><img src={IconDeposito} alt="" /> DEPÓSITO</ButtonLink>
                <ButtonLink to={"/painel/saldo"}><img src={IconCash} alt="" /> SAQUE</ButtonLink>
                <ButtonLink to={"/painel/saldo"}><img src={IconTransferencia} alt="" /> TRANSFERÉNCIA</ButtonLink>
                <ButtonLink to={"/painel/saldo"}><img src={IconTresPontos} alt="" /> MAIS</ButtonLink>
            </Action>
        </Container>
    );
}

export default Saldo;