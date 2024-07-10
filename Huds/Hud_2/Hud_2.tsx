import Button from '../../../../components/Elements/Button/Button';
import { Hudlet_Header } from '../../Hudlet_Header';
import { Type_Hud } from '../../Huds';
import '../Huds.css';

export default function Hud_2({doCommand, closePopup}: Type_Hud){
    const cmdBase = {
        owner: "!~uuidTarget~!",
        product: "ntk",
        side: "3"
    };
    const command = (data: object)=>{
        doCommand(10, JSON.stringify({...cmdBase, ...data}));
    }
    return(<>
        <Hudlet_Header title="[EmptyList] - NTK" closePopup={closePopup}/>
        <div id="Hud_2" className="hudGeneric">
            <Button onClick={()=>command({drip: "1"})}>Drip On</Button>
            <Button onClick={()=>command({drip: "0"})}>Drip Off</Button>
            <Button onClick={()=>command({slapToggle: "1"})}>Slap On</Button>
            <Button onClick={()=>command({slapToggle: "0"})}>Slap Off</Button>
            <Button onClick={()=>command({cum: "1"})}>Cum On</Button>
            <Button onClick={()=>command({cum: "0"})}>Cum Off</Button>
            <Button onClick={()=>command({nippleOverlay: "1"})}>Overlay On</Button>
            <Button onClick={()=>command({nippleOverlay: "0"})}>Overlay Off</Button>
            <Button onClick={()=>command({nippleType: "adult"})}>Adult</Button>
            <Button onClick={()=>command({nippleType: "pg"})}>Flat</Button>
        </div>
    </>);
}