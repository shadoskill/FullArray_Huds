import '../Huds.css';
import { Icon_SecondLife } from '../../../../components/Icons';
import { HudsInfo, Type_Hud } from '../../Huds';
import { Hudlet_Header } from '../../Hudlet_Header';
import { ReactSVG } from 'react-svg';
import Icon_PhatPussy from './PhatPussy_Icon.webp';
// import Hud_31_Panel from '../../../../assets/Huds/Hud_31/Hud_31_Panel.svg';
import Hud_31_Panel from './Hud_31_Panel.svg';
import { useState } from 'react';

export default function Hud_31({doCommand, closePopup}: Type_Hud){
    const [effect_squirt, setEffect_squirt] = useState(false);
    const [effect_pee, setEffect_pee] = useState(false);
    const hudInfo = [
        {
            text: "Profile",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/agent/fd341e6b-8669-4fe1-bcb9-b281ac54cf0f/about",
        },
        {
            text: "Group Main",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/group/0e28bdd8-dc97-1c3b-233e-bb49b8cac8ca/about",
        },
        {
            text: "Group Phatpussy",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/group/26a33726-7086-d54e-fb97-386b5592691d/about",
        },
        {
            text: "Social - Product - Devkit",
            icon: <img src={Icon_PhatPussy} style={{width: "100%"}}/>,
            url: "https://linktr.ee/phatpussy",
        },
    ];
    const buttons = {
        "State_Cameltoe":  [19283924, "MODE|0"],
        "State_Close":     [19283924, "MODE|1"],
        "State_Spread":    [19283924, "MODE|2"],
        "State_Gape":      [19283924, "MODE|3"],
        "State_Penetrate": [19283924, "MODE|4"],
        "State_Wider":     [19283924, "MODE|5"],
        "Effect_Hide":     [19283924, "MODE|-1"],
        "Effect_Squirt":   [71028493, "cum4"],
        "Effect_Pee":      [71028493, "pee"],
    };
    return(<>
        <div id="Hud_5">
            <Hudlet_Header title="Phat Pussy" closePopup={closePopup}/>
            <HudsInfo buttons={hudInfo}/>
            <div className="hudBackground">
                <ReactSVG src={Hud_31_Panel} onClick={(e: any)=>{
                    const idButton = e.target.parentNode.id;
                    const buttonData = buttons[idButton as keyof typeof buttons];
                    if(buttonData !== undefined){
                        const tempChannel = buttonData[0] as number;
                        const tempCommand = buttonData[1] as string;
                        if(typeof buttonData[1] === "string"){
                            const cmd = idButton;
                            if(cmd == "Effect_Squirt"){
                                doCommand(tempChannel, effect_squirt?"off":tempCommand);
                                setEffect_squirt(!effect_squirt);
                                return;
                            }
                            else if(cmd == "Effect_Pee"){
                                doCommand(tempChannel, effect_pee?"off":tempCommand);
                                setEffect_pee(!effect_pee);
                                return;
                            }
                            doCommand(tempChannel, buttonData[1]);
                        }            
                    }
                }}/>
            </div>
        </div>
    </>);
}