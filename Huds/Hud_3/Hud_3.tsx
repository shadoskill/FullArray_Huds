import Button from '../../../../components/Elements/Button/Button';
import { Hudlet_Header } from '../../Huds';
import '../Huds.css';

interface IHud{
    doCommand: (channel: number, command: string)=>void;
}
export default function Hud_3({doCommand}: IHud){
    return(<>
        <Hudlet_Header title="[EmptyList] - BTK"/>
        <div id="Hud_3" className="hudGeneric">
            <Button onClick={()=>doCommand(10, "interact,click on")}>Slap On</Button>
            <Button onClick={()=>doCommand(10, "interact,click off")}>Slap Off</Button>
            <Button onClick={()=>doCommand(10, "effect,on")}>Drip On</Button>
            <Button onClick={()=>doCommand(10, "effect,off")}>Drip Off</Button>
            <Button onClick={()=>doCommand(10, "nipples,show")}>Overlay On</Button>
            <Button onClick={()=>doCommand(10, "nipples,hide")}>Overlay Off</Button>
        </div>
    </>);
}