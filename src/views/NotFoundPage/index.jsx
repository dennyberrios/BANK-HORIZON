import { ButtonLink } from "../../components/Button/styles";
import { Container } from "../../components/Container";
import { ContentNotFoundPage } from "./styles";

const NotFoundPage = () => {
    return (
        <Container>
            <ContentNotFoundPage>
                <h1>404</h1>
                <p>Página não encontrada!</p>
                <ButtonLink
                    to={"/"}
                >Voltar para a página inicial</ButtonLink>
            </ContentNotFoundPage>
        </Container>
    );
}

export default NotFoundPage;