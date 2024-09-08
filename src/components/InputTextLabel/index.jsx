import { BoxInput } from "./styles";

const InputTextLabel = ({ label, type, value, change, placeholder, required, $borda, $corDeFundo, $corBg, name }) => {
    return ( 
        <BoxInput 
            $corDeFundo={$corDeFundo}
            $borda={$borda}
            $corBg={$corBg}
        >
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={e => change(e.target.value)} 
                placeholder={placeholder} 
                name={name}
                required={required} 
            />
        </BoxInput>
     );
}
 
export default InputTextLabel;