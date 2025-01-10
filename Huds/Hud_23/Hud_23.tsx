import '../Huds.css';
import './Hud_23.css';
import Hud_23_Panel from './Project Arousal.svg';
import { Hudlet_Header } from '../../Hudlet_Header';
import { Type_Hud } from '../../Huds';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';

export default function Hud_23({doCommand, closePopup}: Type_Hud){
    const [toggles, setToggles] = useState<{ [key: string]: number }>({});
    const [controlMode, setControlMode] = useState("adjust");
    const button_modeAdjust = document.getElementById("Button_ModeAdjust");
    const button_modeControl = document.getElementById("Button_ModeControl");
    const buttons = {
        "Button_ArousalLv1": [-237593, "!~uuidTarget~!|setArousal1"],
        "Button_ArousalLv2": [-237593, "!~uuidTarget~!|setArousal2"],
        "Button_ArousalLv3": [-237593, "!~uuidTarget~!|setArousal3"],
        "Button_VolumeArousalUp1":   [6400, "ArousalBreatheVolumeIncrease"],
        "Button_VolumeArousalDown1": [6400, "ArousalBreatheVolumeDecrease"],

        "Button_MoanLv1": [-6349633, "arousalForceMoan!~uuidTarget~!|1"],
        "Button_MoanLv2": [-6349633, "arousalForceMoan!~uuidTarget~!|2"],
        "Button_MoanLv3": [-6349633, "arousalForceMoan!~uuidTarget~!|3"],
        "Button_VolumeMoanUp1":   [6400, "ArousalMoanVolumeIncrease"],
        "Button_VolumeMoanDown1": [6400, "ArousalMoanVolumeDecrease"],

        "Button_ClimaxLv1": [-6349633, "arousalForceOrgasm!~uuidTarget~!|1"],
        "Button_ClimaxLv2": [-6349633, "arousalForceOrgasm!~uuidTarget~!|2"],
        "Button_ClimaxLv3": [-6349633, "arousalForceOrgasm!~uuidTarget~!|3"],
        "Button_VolumeClimaxUp1":   [6400, "ArousalOrgasmVolumeIncrease"],
        "Button_VolumeClimaxDown1": [6400, "ArousalOrgasmVolumeDecrease"],
        "Button_ClimaxSuperLv1": [-6349633, "arousalForceMoan!~uuidTarget~!|1"],
        "Button_ClimaxSuperLv2": [-6349633, "arousalForceMoan!~uuidTarget~!|2"],
        "Button_ClimaxSuperLv3": [-6349633, "arousalForceMoan!~uuidTarget~!|3"],

        "Button_GetUp": [6400, "arousalGetUp"],
        "Button_Adjust": [],
        "Button_UnLock": [],
        
        "Button_InBedMode": [-237593, "!~uuidTarget~!automodeon", "!~uuidTarget~!automodeoff"],
        "Button_FreezeArousal": [-6349633, "freezeArousal!~uuidTarget~!", "unfreezeArousal!~uuidTarget~!"],

        "Button_SoundsOrgasm": [-237593, "!~uuidTarget~!sexOrgasm|0", "!~uuidTarget~!sexOrgasm|1"],
        "Button_SoundsWet": [-6349633, "wetSound!~uuidTarget~!|0", "wetSound!~uuidTarget~!|1"],

        "Button_W": [-101, `buttonpress${controlMode}|w|0|1`],
        "Button_S": [-101, `buttonpress${controlMode}|s|0|2`],

    };
    return(<>
        <Hudlet_Header title="Project Arousal 2" closePopup={closePopup}/>
        <div id="Hud_23">
            <div className="hudBackground">
                <ReactSVG src={Hud_23_Panel} onClick={(e: any)=>{
                    const idButton = e.target.id.split("-")[0];
                    if(idButton === "Button_ModeControl"){                        
                        setControlMode("controls");
                        // TODO make buttons change css.
                    }
                    else if(idButton === "Button_ModeAdjust"){
                        setControlMode("adjust");
                    }
                    else{
                        const buttonData = buttons[idButton as keyof typeof buttons];
                        if(buttonData !== undefined){
                            if(buttonData.length == 3){
                                if(toggles[idButton as keyof typeof toggles] == undefined || toggles[idButton as keyof typeof toggles] == 0){
                                    setToggles({...toggles, [idButton]: 1});
                                }
                                else{
                                    setToggles({...toggles, [idButton]: 0});
                                }
                                doCommand(buttonData[0] as number, buttonData[toggles[idButton as keyof typeof toggles]+1] as string);        
                            }
                            else{
                                doCommand(buttonData[0] as number, buttonData[1] as string);        
                            }                                
                        }
                    }
                }}
                />
            </div>
        </div>
    </>);
}