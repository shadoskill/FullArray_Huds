import { useState } from "react";
import Container from "../../components/Elements/Container/Container";
import Static from "../../components/Elements/Static/Static";
import Checkbox from "../../components/Elements/Checkbox/Checkbox";
import { randomUUID } from "crypto";
import { doCommand } from "./Hudlet_Command";

type Type_Hudlet_Toggle = {
    text: string;
    command: [Type_Hudlet_Toggle_Command]
}
type Type_Hudlet_Toggle_Command = {
    channel: number;
    command: string;
}
export function Hudlet_Toggle({text, command}: Type_Hudlet_Toggle){
    const [toggle, setToggle] = useState(false);
    const handle_checkbox = ()=>{
        setToggle(!toggle);
        doCommand(command[+(!toggle)]["channel"], command[+(!toggle)]["command"]);
    };
    return(<>
        <Container>
            <Static>
                {text}
            </Static>
            <Checkbox id={randomUUID()} toggle={toggle} onClick={handle_checkbox}/>
        </Container>
    </>);
}