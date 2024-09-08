import { ContentLogo } from "./styles";
import IconLogo from './../../assets/logo/logo-2.png';

const Logo = () => {
    return ( 
        <ContentLogo>
            <img src={IconLogo} alt="" />
            <p> HORIZON <span>BANK</span></p>
        </ContentLogo>
     );
}

export default Logo;