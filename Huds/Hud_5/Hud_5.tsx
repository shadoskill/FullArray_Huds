import '../Huds.css';
import { Icon_Discord, Icon_SecondLife } from '../../../../components/Icons';
import { HudsInfo, Type_Hud } from '../../Huds';
import { Hudlet_Header } from '../../Hudlet_Header';
import { ReactSVG } from 'react-svg';
import Hud_5_Panel from './Sensations Vagina 7.svg';

export default function Hud_5({doCommand, closePopup}: Type_Hud){
    const hudInfo = [
        {
            text: "Profile",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/agent/cb7e1434-9ca8-4c35-afb3-fd6cf7f4bfd3/about",
        },
        {
            text: "Group",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/group/39c4727b-9a50-f8af-5187-4af493d17a95/about",
        },
        {
            text: "Marketplace",
            icon: <Icon_SecondLife/>,
            url: "https://marketplace.secondlife.com/p/Sensations-Vagina-7-Omega-and-BoM/19856195",
        },
        {
            text: "Discord",
            icon: <Icon_Discord/>,
            url: "https://discord.gg/28Mpw5bDXZ",
        },
    ];
    const buttons = {
        "State_0": "vagina 0",
        "State_1": "vagina 1",
        "State_2-": "vagina -2",
        "State_2+": "vagina 2",
        "State_3": "vagina 3",
        "State_4": "vagina 4",
        "State_5": "vagina 5",
        "State_6": "vagina 6",
        "Effect_Cum": "cum",
        "Effect_Squirt": "squirt",
        "Effect_Pee": "pee",
        "Effect_Bleed": "bleed",
        "EffectToggle_Cum": "cum 1",
        "EffectToggle_Squirt": "squirt 1",
        "EffectToggle_Pee": "pee 1",
        "EffectToggle_Bleed": "bleed 1",
        "ClitHood_1": "clit 1",
        "ClitHood_2": "clit 2",
        "ClitHood_3": "clit 3",
        "ClitHood_4": "clit 4",
        "Wet_On": "wet on",
        "Wet_Off": "wet off",
        "Drip_On": "drip on",
        "Drip_Off": "drip off",
        "Creampie_On": "creampie on",
        "Creampie_Off": "creampie off",
    };
    return(<>
        <div id="Hud_5">
            <Hudlet_Header title="Sensations - Vagina" closePopup={closePopup}/>
            <HudsInfo buttons={hudInfo}/>
            <div className="hudBackground">
                <ReactSVG src={Hud_5_Panel} onClick={(e: any)=>{
                    const idButton = e.target.parentNode.id;
                    const buttonData = buttons[idButton as keyof typeof buttons];
                    if(buttonData !== undefined){
                        if(typeof buttonData === "string"){
                            doCommand(-13487, buttonData);
                        }            
                    }
                }}/>
            </div>
        </div>
    </>);
}