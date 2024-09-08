import { ContentTextArea } from "./styles";

const TextArea = ({ 
    $corDeFundo,
    $borda,
    $corBg,
    value,
    change,
    placeholder,
    name,
    required
 }) => {
    return ( 
        <ContentTextArea
            $corDeFundo={$corDeFundo}
            $borda={$borda}
            $corBg={$corBg}
        >
            <textarea
                value={value}
                onChange={e => change(e.target.value)}
                placeholder={placeholder}
                name={name}
                required={required}
            ></textarea>
        </ContentTextArea>
     );
}
 
export default TextArea;