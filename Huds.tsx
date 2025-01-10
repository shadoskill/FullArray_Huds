import { ReactElement, useEffect, useState } from "react";
import '../../components/Elements/DisplayLists/DisplayLists.css';
import { Default_Outfit } from "../../components/Interfaces/Outfit";
import { doLink, doLinkMulti, doUnlink, doUnlinkMulti, getList } from "../../components/Functions";
import ListContainer from "../../components/Elements/ListContainer/ListContainer";
import Interface_PopupState, { Default_PopupState } from "../../components/Interfaces/Popup";
import Post from "../../components/Elements/Post";
import Hud_1 from "./Huds/Hud_1/Hud_1";
import Hud_2 from "./Huds/Hud_2/Hud_2";
import Hud_3 from "./Huds/Hud_3/Hud_3";
import Hud_4 from "./Huds/Hud_4/Hud_4";
import Hud_5 from "./Huds/Hud_5/Hud_5";
import Hud_21 from "./Huds/Hud_21/Hud_21";
import Hud_23 from "./Huds/Hud_23/Hud_23";
import Category from "../../components/Elements/Category/Category";
import Container from "../../components/Elements/Container/Container";
import Static from "../../components/Elements/Static/Static";
import Button from "../../components/Elements/Button/Button";
import Hud_31 from "./Huds/Huds_31/Hud_31";
import { doCommand } from "./Hudlet_Command";

export type Type_HudsInfo={
    buttons: Type_HudsInfoButtons[];
}
type Type_HudsInfoButtons={
    text: string;
    icon: ReactElement;
    url: string;
}
export type Type_Hud={
    doCommand: (channel: number, command: string)=>void;
    closePopup: ()=>void;
}
const module = "Huds";
export default function Huds(){
    const [list, setList] = useState([Default_Outfit]);
    const [listLinked, setListLinked] = useState<number[]>([]);
    const [prefixList, setPrefixList] = useState<string[]>([]);
    const [popupState, setPopupState] = useState<Interface_PopupState>(Default_PopupState);
    const [hud, setHud] = useState<number>(0);

    const props_list = {
        list: list,
        listActive: [],
        listLinked: listLinked,
        prefixList: prefixList,
        doChange: (e: any)=>{
            setHud(e.target.id.split("_")[2]);
            setPopupState({...popupState, list: false, misc: true});
        },
        doLink: (e: any)=>{doLink(e, module, setListLinked);},
        doUnlink: (e: any)=>{doUnlink(e, module, setListLinked);},
        doLinkMulti: (ids: number[])=>doLinkMulti(module, ids, setListLinked),
        doUnlinkMulti: (ids: number[])=>doUnlinkMulti(module, ids, setListLinked),
        popupState: popupState,   
        setPopupState: setPopupState,     
        module: module,
    }
    const closePopup = ()=>{
        setPopupState({...popupState, list: true, misc: false});
    }
    const init = ()=>{
        closePopup();
        getList(module, setList, setPrefixList, setListLinked);
    }
    const props_huds = {
        doCommand: doCommand,
        closePopup: closePopup,
    }
    useEffect(init, []);	
    return(<>
        {popupState.list?<ListContainer {...props_list}/>:null}
        {popupState.misc
            ?<>
                {hud == 1?<Hud_1 {...props_huds}/>:null}
                {hud == 2?<Hud_2 {...props_huds}/>:null}
                {hud == 3?<Hud_3 {...props_huds}/>:null}
                {hud == 4?<Hud_4 {...props_huds}/>:null}
                {hud == 5?<Hud_5 {...props_huds}/>:null}
                {hud == 21?<Hud_21 {...props_huds}/>:null}
                {hud == 23?<Hud_23 {...props_huds}/>:null}
                {hud == 31?<Hud_31 {...props_huds}/>:null}
            </>
            :null
        }
    </>);
}
export function HudsInfo({buttons}: Type_HudsInfo){
    return(
        <Category id="Creator & Product Info">
            {buttons.map((button)=>(
                <Container key={button.text}>
                    <Static>
                        {button.text}
                    </Static>
                    <Button onClick={async()=>await Post("Huds/DoInfo", {text: button.text+": "+button.url})}>
                        {button.icon}
                    </Button>
                </Container>
            ))}
        </Category>
    );
}