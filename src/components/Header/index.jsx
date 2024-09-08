import { Link } from "react-router-dom";
import { ContentHeader } from "./styles";
import Logo from "../Logo";

const Header = () => {
    return ( 
        <ContentHeader>
            <Logo />
            <nav className="nav">
                <ul>
                    <li>
                        <Link to={"/"}>INÍCIO</Link>
                    </li>
                    <li>
                        <Link>SOBRE NÓS</Link>
                    </li>
                    <li>
                        <Link to={"selecao-de-clientes"}>SERVIÇOS</Link>
                    </li>
                    <li>
                        <Link>CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </ContentHeader>
     );
}
 
export default Header;