import Button from '../../../../components/Elements/Button/Button';
import '../Huds.css';
import Static from '../../../../components/Elements/Static/Static';
import Container from '../../../../components/Elements/Container/Container';
import { Icon_Close } from '../../../../components/Icons';

interface IHud{
    doCommand: (channel: number, command: string)=>void;
    closePopup: ()=>void;
}
export default function Hud_2({doCommand, closePopup}: IHud){
    const cmdBase = {
        owner: "!~uuidTarget~!",
        product: "ntk",
        side: "3"
    };
    return(<>
        <Container className="navSize">
            <Static isHeader={true}>[EmptyList] - NTK</Static>
            <Button onClick={closePopup}><Icon_Close/></Button>
        </Container>
        <div id="Hud_2" className="hudGeneric">
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, drip: "1"}))}>Drip On</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, drip: "0"}))}>Drip Off</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, slapToggle: "1"}))}>Slap On</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, slapToggle: "0"}))}>Slap Off</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, cum: "1"}))}>Cum On</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, cum: "0"}))}>Cum Off</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, nippleOverlay: "1"}))}>Overlay On</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, nippleOverlay: "0"}))}>Overlay Off</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, nippleType: "adult"}))}>Adult</Button>
            <Button onClick={()=>doCommand(10, JSON.stringify({...cmdBase, nippleType: "pg"}))}>Flat</Button>
        </div>
    </>);
}