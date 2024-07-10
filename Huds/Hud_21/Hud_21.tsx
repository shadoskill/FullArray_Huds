import Button from '../../../../components/Elements/Button/Button';
import '../Huds.css';
import Static from '../../../../components/Elements/Static/Static';
import Container from '../../../../components/Elements/Container/Container';
import { Icon_Close, Icon_Discord, Icon_SecondLife } from '../../../../components/Icons';
import { HudsInfo } from '../../Huds';
import { ReactSVG } from 'react-svg';
import Hud_21_Panel from './assets/Huds/Hud_21/Sensations Ass 7.svg';
import { useState } from 'react';

interface IHud{
    doCommand: (channel: number, command: string)=>void;
    closePopup: ()=>void;
}
export default function Hud_21({doCommand, closePopup}: IHud){
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
            url: "https://marketplace.secondlife.com/p/Sensations-Ass-7/21566500",
        },
        {
            text: "Discord",
            icon: <Icon_Discord/>,
            url: "https://discord.gg/28Mpw5bDXZ",
        },
    ];
    const buttons = {
        "State_1": "ass 0",
        "State_2": "ass 1",
        "State_3": "ass 2",
        "State_4": "ass 3",
        "State_5": "ass 4",
        "State_6": "ass 5",
        "State_7": "ass 6",
        "State_8": "ass 7",
        "State_9": "ass 8",
        "State_10": "ass 9",
        "State_11": "ass 10",
        "State_12": "ass 11",
        "State_13": "ass 12",
        "Effect_Fart": "fart",
        "Effect_Gas": "gas",
        "Effect_Shit": "shit",
        "Effect_PrimPoop": "prim poop",
        "Effect_RainbowOn": "rainbow 1",
        "Effect_RainbowOff": "rainbow 0",
        "Effect_DripOn": "drip 1",
        "Effect_DripOff": "drip 0",
        "Effect_Drool2x": "drool 2",
        "Effect_Drool1": "drool 1",
        "Effect_DroolOff": "drool 0",
        "Effect_Enema2x": "enema 2",
        "Effect_Enema1": "enema 1",
        "Effect_EnemaOff": "enema 0",
        "Lube_None": "lube off",
        "Lube_Easy": "lube on",
        "Lube_Hot": "lube hot",
        "Lube_Horny": "lube horny",
        "Beads_In": "Push In",
        "Beads_Out": "Pull Out",
        "Misc_PeakSkin": ["skin", "toggle"],
        "Misc_PeakIntestines": ["inti", "toggle"],
        "Misc_Jiggly": ["jiggly", "toggle"],
        "Pointer_Mode1": ["pointer", "toggle"]
    };
    const [toggles, setToggles] = useState({
        "Misc_PeakSkin": false,
        "Misc_PeakIntestines": false,
        "Misc_Jiggly": false,
        "Pointer_Mode1": false,
    });
    return(<>
        <div id="Hud_21">
            <Container className="navSize">
                <Static isHeader={true}>Sensations - Ass</Static>
                <Button onClick={closePopup}><Icon_Close/></Button>
            </Container>
            <HudsInfo buttons={hudInfo}/>
            <div className="hudBackground">
                <ReactSVG src={Hud_21_Panel} onClick={(e: any)=>{
                    let idButton = e.target.id;
                    if(idButton == ""){
                        idButton = e.target.parentNode.id;
                    }
                    console.log(idButton);
                    const buttonData = buttons[idButton as keyof typeof buttons];
                    if(buttonData !== undefined){
                        if(typeof buttonData === "string"){
                            doCommand(-17487, buttonData);
                        }   
                        else if(Array.isArray(buttonData)){
                            if(buttonData[1] == "toggle"){
                                const newToggle = !toggles[idButton as keyof typeof toggles];
                                setToggles((oldData)=>{return{...oldData, [idButton]: newToggle}});
                                doCommand(-17487, buttonData[0]+" "+(newToggle?1:0));
                            }
                        }  
                    }
                }}/>
            </div>
        </div>
    </>);
}