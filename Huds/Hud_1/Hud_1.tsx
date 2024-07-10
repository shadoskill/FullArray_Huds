import '../Huds.css';
import Hud_1_Panel from './EmptyList_Vagina.svg';
import { ReactSVG } from 'react-svg';
import { Hudlet_Header } from '../../Huds';
interface IHud{
    doCommand: (channel: number, command: string)=>void;
}
export default function Hud_1({doCommand}: IHud){
    const buttons = {
        "Vagina_Flat":    "vagina,flat",
        "Vagina_Close":  "vagina,close",
        "Vagina_Open":    "vagina,open",
        "Vagina_Gape":    "vagina,gape",
        "Anus_Flat":      "anus,flat",
        "Anus_Closed":    "anus,close",
        "Anus_Open":      "anus,open",
        "Anus_Gape":      "anus,gape",
        "Urethra_Open":   "urethra,close",
        "Urethra_Close": "urethra,open",
        "Effect_Stop":    "effect,stop",
        "Effect_Pre":     "effect,drip",
        "Effect_Cum":     "effect,cum",
        "Effect_Pee":     "effect,pee",
    };
    return(<>
        <Hudlet_Header title="[EmptyList] - Vagina"/>
        <div id="Hud_1">
            <div className="hudBackground">
                <ReactSVG src={Hud_1_Panel} onClick={(e: any)=>{
                    const idButton = e.target.parentNode.id;
                    console.log(idButton);
                    const buttonData = buttons[idButton as keyof typeof buttons];
                    if(buttonData !== undefined){
                        doCommand(10, buttonData);                
                    }
                }}/>
            </div>
        </div>
    </>);
}