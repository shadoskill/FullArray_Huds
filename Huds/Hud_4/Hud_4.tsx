import '../Huds.css';
import './Hud_4.css';
import { Icon_Discord, Icon_SecondLife } from '../../../../components/Icons';
import Hud_4_Panel from './Canine Feline.svg';
import { HudsInfo, Type_Hud } from '../../Huds';
import { Hudlet_Header } from '../../Hudlet_Header';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import PopupGeneric from '../../../../components/Elements/Popups/PopupGeneric/PopupGeneric';

const default_popup = {shininess: false, shininess_cock: false, shininess_balls: false, swinging: false, ballSwing1: false, ballSwing2: false, ballSwing11: false, ballSwing22: false, ballSwing33: false, ballSwing44: false, rubbing: false, balls: false, twitch: false};
export default function Hud_4({doCommand, closePopup}: Type_Hud){
    const hudInfo = [
        {
            text: "Profile",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/agent/d3486522-5cd8-4072-8c88-48733ae7d6c4/about",
        },
        {
            text: "Group",
            icon: <Icon_SecondLife/>,
            url: "secondlife:///app/group/8a2a1815-9261-147f-00dc-7d05b69e0686/about",
        },
        {
            text: "Marketplace",
            icon: <Icon_SecondLife/>,
            url: "https://marketplace.secondlife.com/p/ZAFFeline-Canine-Animesh-bits/19187851",
        },
        {
            text: "Discord",
            icon: <Icon_Discord/>,
            url: "https://discord.gg/EndyqbhA7q",
        },
    ];
    const [popupHud, setPopupHud] = useState(default_popup);
    const [tup, setTup] = useState(0);
    const [tside, setTside] = useState(0);
    const [tiltH, setTiltH] = useState(0);
    const [tiltV, setTiltV] = useState(0);
    
    const doAdjust = (get: number, set: (data: any)=>void, min: number, max: number, adjust: number, channel: number, command: string)=>{
        let temp = get;
        temp += adjust;
        if(temp > max){
            temp = max;
        }
        if(temp < min){
            temp = min;
        }
        set(temp);
        doCommand(channel, command+(temp));
    }
    const buttons = {
        // States
        "state_1": "play,0",
        "state_2": "play,1",
        "state_3": "play,2",
        "state_4": "play,3",
        "state_5": "play,4",
        "state_6": "play,5",
        "state_7": "play,6",
        "state_8": "play,7",
        "state_9": "play,8",
        "state_10": "play,9",
        "state_11": "play,10",
        "state_12": "play,11",
        "state_13": "play,12",
        "state_14": "play,13",
        "state_15": "play,14",
        "state_16": "play,15",
        "state_17": "play,15,l",
        "state_18": "play,15,r",
        "state_19": "play,16",
        "state_20": "play,17",
        "state_21": "play,18",
        "state_22": "play,18,l",
        "state_23": "play,18,r",
        "Tip_Up": "playc,,,+,0.4",
        "Tip_Center": "playc,,,0,0.4",
        "Tip_Down": "playc,,,-,0.4",
        "Shaft_Up": "playc,,+,,0.4",
        "Shaft_Center": "playc,,0,,0.4",
        "Shaft_Down": "playc,,-,,0.4",
        "Base_Up": "playc,+,,,0.4",
        "Base_Center": "playc,0,,,0.4",
        "Base_Down": "playc,-,,,0.4",
        "Orb_Drop_Up": "tdrop,-1",
        "Orb_Drop_Center": "tdrop,0",
        "Orb_Drop_Down": "tdrop,1",
        "Orb_Tilt_Up": ()=>doAdjust(tup, setTup, -5, 5, 1, 55, "tup,"),
        "Orb_Tilt_Down": ()=>doAdjust(tup, setTup, -5, 5, -1, 55, "tup,"),
        "Orb_Tilt_Center": ()=>{setTup(0), setTside(0), doCommand(55, "tup,"), doCommand(55, "tside,")},
        "Orb_Tilt_Left": ()=>doAdjust(tside, setTside, -5, 5, -1, 55, "tside,"),
        "Orb_Tilt_Right": ()=>doAdjust(tside, setTside, -5, 5, 1, 55, "tside,"),
        "Tilt_Up": ()=>{
            let temp = tiltV;
            temp += 5;
            if(temp >= 360){
                temp = 0;
            }
            setTiltV(temp);
            doCommand(55, "tilt,"+tiltV+","+tiltH);
        },
        "Tilt_Down": ()=>{
            let temp = tiltV;
            temp -= 5;
            if(temp <= -360){
                temp = 0;
            }
            setTiltV(temp);
            doCommand(55, "tilt,"+tiltV+","+tiltH);
        },
        "Tilt_Center": ()=>{
            doCommand(55, "tilt,0,0");
            setTiltH(0);
            setTiltV(0);
        },
        "Tilt_Left": ()=>{
            let temp = tiltH;
            temp -= 5;
            if(temp <= -360){
                temp = 0;
            }
            setTiltH(temp);
            doCommand(55, "tilt,"+tiltV+","+tiltH);
        },
        "Tilt_Right": ()=>{
            let temp = tiltH;
            temp += 5;
            if(temp >= 360){
                temp = 0;
            }
            setTiltH(temp);
            doCommand(55, "tilt,"+tiltV+","+tiltH);
        },
        // Effects
        "Effect_Throbbing": "throb,1",
        "Effect_Shininess": ()=>openPopupHud("shininess"),
        "Effect_Rubbing": ()=>openPopupHud("rubbing"),
        "Effect_HideTip": "hidetip",
        "Effect_Twitch": ()=>openPopupHud("twitch"),
        "Effect_Pre": "pre",
        "Effect_PreIn": "splattering",
        "Effect_Cum": "cum",
        "Effect_CumIn": "cumin",
        "Effect_Pee": "pee",
        "Effect_PeeIn": "peein",
        "Effect_Condom": "condom",
        "Effect_Hide": "hidebits,-1",
        "Effect_Clean": "clean",
        "Effect_Stop": "stop",
        "Effect_Swing": ()=>openPopupHud("swinging"),
        "BallSwing_1a": ()=>openPopupHud("ballSwing1"),
        "BallSwing_2a": ()=>openPopupHud("ballSwing2"),

        "BallSwing_1b": ()=>openPopupHud("ballSwing11"),
        "BallSwing_2b": ()=>openPopupHud("ballSwing22"),
        "BallSwing_3b": ()=>openPopupHud("ballSwing33"),
        "BallSwing_4b": ()=>openPopupHud("ballSwing44"),
    };
    const buttons_rubbing = [
        [()=>doCommand(55, "rub,0"), "Slow,0"],
        [()=>doCommand(55, "rub,1"), "Default,0"],
        [()=>doCommand(55, "rub,2"), "Fast,0"],
        [()=>doCommand(55, "rub,3"), "Slow,1"],
        [()=>doCommand(55, "rub,4"), "Default,1"],
        [()=>doCommand(55, "rub,5"), "Fast,1"],
    ];
    const buttons_twitch = [
        [()=>doCommand(55, "twitch,0.35,10"), "Even More"],
        [()=>doCommand(55, "twitch,0.1,10"),  "Light"],
        [()=>doCommand(55, "twitch,0.17,10"), "Default"],
        [()=>doCommand(55, "twitch,0.25,10"), "More"],
    ];
    const buttons_shininess = [
        [()=>openPopupHud("shininess_cock"), "Cock"],
        [()=>openPopupHud("shininess_balls"),  "Balls"],
    ];
    const buttons_shininess_cock = [
        [()=>doCommand(55, "setgloss,<1,1,1>,-,-,-,255"), "Very Wet"],
        [()=>doCommand(55, "setgloss,<0.05, 0.05, 0.05>,-,-,-,166"),  "Dry"],
        [()=>doCommand(55, "setgloss,<0.25,0.25,0.25>,-,-,-,166"), "Default"],
        [()=>doCommand(55, "setgloss,<0.4, 0.4, 0.4>,-,-,-,255"), "Wet"],
    ];
    const buttons_shininess_balls = [
        [()=>doCommand(55, "setgloss,-,<1,1,1>,-,-,-,255"), "Very Wet"],
        [()=>doCommand(55, "setgloss,-,<0.015, 0.015, 0.015>,-,-,-,166"),  "Dry"],
        [()=>doCommand(55, "setgloss,-,<0.780, 0.780, 0.780>,-,-,-,166"), "Default"],
        [()=>doCommand(55, "setgloss,-,<0.886, 0.886, 0.886>,-,-,-,255"), "Wet"],
    ];
    const buttons_swinging = [
        [()=>doCommand(55, "flop,3,0"), "Slow,3"],
        [()=>doCommand(55, "flop,3,1"), "Default,3"],
        [()=>doCommand(55, "flop,3,2"), "Fast,3"],
        [()=>doCommand(55, "flop,2,0"), "Slow,2"],
        [()=>doCommand(55, "flop,2,1"), "Default,2"],
        [()=>doCommand(55, "flop,2,2"), "Fast,2"],
        [()=>doCommand(55, "flop,1,0"), "Slow,1"],
        [()=>doCommand(55, "flop,1,1"), "Default,1"],
        [()=>doCommand(55, "flop,1,2"), "Fast,1"],
        [()=>doCommand(55, "flop,0,0"), "Slow,0"],
        [()=>doCommand(55, "flop,0,1"), "Default,0"],
        [()=>doCommand(55, "flop,0,2"), "Fast,0"],
    ];
    const buttons_ballSwing1 = [
        [()=>doCommand(55, "ballswing,bsr0_0"), "Slow"],
        [()=>doCommand(55, "ballswing,bsr0_1"), "Default"],
        [()=>doCommand(55, "ballswing,bsr0_2"), "Fast"],
        [()=>doCommand(55, "ballswing,bsr0_3"), "Fastest"],
    ];
    const buttons_ballSwing2 = [
        [()=>doCommand(55, "ballswing,bsr1_0"), "Slow"],
        [()=>doCommand(55, "ballswing,bsr1_1"), "Default"],
        [()=>doCommand(55, "ballswing,bsr1_2"), "Fast"],
        [()=>doCommand(55, "ballswing,bsr1_3"), "Fastest"],
    ];
    const buttons_ballSwing11 = [
        [()=>doCommand(55, "ballswing,bs0_0"), "Slow"],
        [()=>doCommand(55, "ballswing,bs1_0"), "Default"],
        [()=>doCommand(55, "ballswing,bs2_0"), "Fast"],
        [()=>doCommand(55, "ballswing,bs3_0"), "Fastest"],
    ];
    const buttons_ballSwing22 = [
        [()=>doCommand(55, "ballswing,bs0_1"), "Slow"],
        [()=>doCommand(55, "ballswing,bs1_1"), "Default"],
        [()=>doCommand(55, "ballswing,bs2_1"), "Fast"],
        [()=>doCommand(55, "ballswing,bs3_1"), "Fastest"],
    ];
    const buttons_ballSwing33 = [
        [()=>doCommand(55, "ballswing,bs0_2"), "Slow"],
        [()=>doCommand(55, "ballswing,bs1_2"), "Default"],
        [()=>doCommand(55, "ballswing,bs2_2"), "Fast"],
        [()=>doCommand(55, "ballswing,bs3_2"), "Fastest"],
    ];
    const buttons_ballSwing44 = [
        [()=>doCommand(55, "ballswing,bs0_3"), "Slow"],
        [()=>doCommand(55, "ballswing,bs1_3"), "Default"],
        [()=>doCommand(55, "ballswing,bs2_3"), "Fast"],
        [()=>doCommand(55, "ballswing,bs3_3"), "Fastest"],
    ];


    const closePopupHud = ()=>{
        setPopupHud(default_popup);
    }
    const openPopupHud = (popupName: string)=>{
        closePopupHud();
        setPopupHud((oldData: any)=>{return{...oldData, [popupName]: true}});
    }
    return(<>
        {popupHud.rubbing?<PopupGeneric header="Rubbing" body="Rubbing Control." buttons={buttons_rubbing} closePopup={closePopupHud}/>:null}
        {popupHud.twitch?<PopupGeneric header="Twitch" body="Twitch Control." buttons={buttons_twitch} closePopup={closePopupHud}/>:null}
        {popupHud.shininess?<PopupGeneric header="Shininess" body="Shininess Control." buttons={buttons_shininess} closePopup={closePopupHud}/>:null}
        {popupHud.shininess_cock?<PopupGeneric header="Shininess Cock" body="Shininess Cock Control." buttons={buttons_shininess_cock} closePopup={closePopupHud}/>:null}
        {popupHud.shininess_balls?<PopupGeneric header="Shininess Balls" body="Shininess Balls Control." buttons={buttons_shininess_balls} closePopup={closePopupHud}/>:null}
        {popupHud.swinging?<PopupGeneric header="Swinging" body="Floppy animation speeds!" buttons={buttons_swinging} closePopup={closePopupHud}/>:null}
        {popupHud.ballSwing1?<PopupGeneric header="Ball Swing 1" body="Floppy animation speeds!" buttons={buttons_ballSwing1} closePopup={closePopupHud}/>:null}
        {popupHud.ballSwing2?<PopupGeneric header="Ball Swing 2" body="Floppy animation speeds!" buttons={buttons_ballSwing2} closePopup={closePopupHud}/>:null}

        {popupHud.ballSwing11?<PopupGeneric header="Ball Swing 1" body="Floppy animation speeds!" buttons={buttons_ballSwing11} closePopup={closePopupHud}/>:null}
        {popupHud.ballSwing22?<PopupGeneric header="Ball Swing 2" body="Floppy animation speeds!" buttons={buttons_ballSwing22} closePopup={closePopupHud}/>:null}
        {popupHud.ballSwing33?<PopupGeneric header="Ball Swing 3" body="Floppy animation speeds!" buttons={buttons_ballSwing33} closePopup={closePopupHud}/>:null}
        {popupHud.ballSwing44?<PopupGeneric header="Ball Swing 4" body="Floppy animation speeds!" buttons={buttons_ballSwing44} closePopup={closePopupHud}/>:null}

        <Hudlet_Header title="ZAF Feline - Canine" closePopup={closePopup}/>
        <HudsInfo buttons={hudInfo}/>
        <div id="Hud_4">
            <div className="hudBackground">
                <ReactSVG src={Hud_4_Panel} onClick={(e: any)=>{
                    const idButton = e.target.parentNode.id;
                    const buttonData = buttons[idButton as keyof typeof buttons];
                    if(buttonData !== undefined){
                        if(typeof buttonData === "string"){
                            doCommand(55, buttonData);
                        }        
                        else if(typeof buttonData === "function"){
                            buttonData();
                        }            
                    }
                }}/>
            </div>
            {/* <Hud_4_Panel_1 doCommand={doCommand}/> */}
            {/* <Hud_4_Panel_2 doCommand={doCommand}/> */}
        </div>
    </>);
}