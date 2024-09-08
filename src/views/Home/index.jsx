import Button from "../../components/Button";
import { Container } from "../../components/Container";
import InputTextLabel from "../../components/InputTextLabel";
import TextArea from "../../components/TextArea";
import { 
    backgroundDarkerOrange, 
    backgroundDarkGreen, 
    backgroundLightBlue, 
    backgroundOrange, 
    borderLightTeal, 
    colorDarkGreen, 
    colorHeroText 
} from "../../components/UI/Colors";
import { useNavigate } from 'react-router-dom';
import { 
    BemVindo, 
    EntreEmContato, 
    Servicos, 
    SobreNos 
} from "./styles";
import { useState } from "react";

const Home = () => {

    const navigate = useNavigate("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [areatext, setAreatext] = useState("");

    return (
        <Container>
            <BemVindo>
                <h1>Bem-vindo ao Banco Horizon</h1>
                <p>Seu parceiro de confiança para todas as suas necessidades bancárias. Descubra nossos serviços e comece a gerenciar suas finanças com facilidade.</p>
                <Button
                    $corDeFundo={backgroundOrange} 
                    $corDeFundoHover={backgroundDarkerOrange}
                    $textColor={colorHeroText}
                    type={"Button"}
                >SAIBA MAIS</Button>
            </BemVindo>
            <SobreNos>
                <h2>Sobre Nós</h2>
                <p>Com anos de experiência no setor bancário, o Horizon Bank é conhecido por seu atendimento ao cliente excepcional e soluções financeiras inovadoras. Nossa missão é fornecer serviços bancários de alta qualidade e construir relacionamentos duradouros com nossos clientes.</p>

                <hr/>
            </SobreNos>
            <Servicos>
                <h2>Serviços</h2>
                <p>Oferecemos uma gama completa de serviços financeiros, incluindo contas correntes, cartões de crédito, empréstimos pessoais e investimentos. Nossa equipe está pronta para ajudar você a encontrar a solução certa para suas necessidades financeiras.</p>
                <Button 
                    $corDeFundo={backgroundOrange} 
                    $corDeFundoHover={backgroundDarkerOrange}
                    $textColor={colorHeroText}
                    type={"button"}
                    onClick={() => {navigate("/painel/saldo")}}
                >VEJA NOSSOS SERVIÇOS</Button>
                <hr/>
            </Servicos>
            <EntreEmContato>
                <legend>Entre em Contato</legend>
                <form className="form">
                    <InputTextLabel 
                        placeholder={"Seu Nome"}
                        $borda={borderLightTeal}
                        $corDeFundo={backgroundLightBlue}
                        $corBg={colorDarkGreen}
                        type={"text"}
                        name={"nome"}
                        value={nome}
                        change={valor => setNome(valor)}
                    />
                    <InputTextLabel
                        placeholder={"Seu Email"}
                        $borda={borderLightTeal}
                        $corDeFundo={backgroundLightBlue}
                        $corBg={colorDarkGreen}
                        type={"email"}
                        name={"email"}
                        value={email}
                        change={valor => setEmail(valor)}
                    />
                    <TextArea
                        $corDeFundo={backgroundLightBlue}
                        $borda={borderLightTeal}
                        $corBg={colorDarkGreen}
                        placeholder={"Sua mensagem"}
                        name={"contateNos"}
                        value={areatext}
                        change={valor => setAreatext(valor)}
                    />
                    <Button
                        $corDeFundo={backgroundDarkGreen}
                        $corDeFundoHover={colorDarkGreen}
                        $textColor={colorHeroText}
                        type={"submit"}
                    >Enviar</Button>
                </form>
            </EntreEmContato>
        </Container>
    );
}

export default Home;