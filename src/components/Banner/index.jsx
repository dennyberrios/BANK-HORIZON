import { ContentBanner } from "./styles";
import NotebookLarge from './../../assets/svg/notebook-large.svg';
import NotebookSmall from './../../assets/svg/notebook-small.svg';

const Banner = () => {
    return (
        <ContentBanner>
            <img className="first-notebook" src={NotebookLarge} alt="" />
            <img className="second-notebook" src={NotebookSmall} alt="" />
        </ContentBanner>
    );
}

export default Banner;