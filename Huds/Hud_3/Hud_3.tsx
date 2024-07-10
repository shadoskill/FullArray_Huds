import Button from '../../../../components/Elements/Button/Button';
import { Hudlet_Header } from '../../Hudlet_Header';
import { Type_Hud } from '../../Huds';
import '../Huds.css';

export default function Hud_3({doCommand, closePopup}: Type_Hud){
    return(<>
        <Hudlet_Header title="[EmptyList] - BTK" closePopup={closePopup}/>
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