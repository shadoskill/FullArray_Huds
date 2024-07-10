import Button from '../../../../components/Elements/Button/Button';
import '../Huds.css';
import Static from '../../../../components/Elements/Static/Static';
import Container from '../../../../components/Elements/Container/Container';
import { Icon_Close } from '../../../../components/Icons';

interface IHud{
    doCommand: (channel: number, command: string)=>void;
    closePopup: ()=>void;
}
export default function Hud_3({doCommand, closePopup}: IHud){
    return(<>
        <Container className="navSize">
            <Static isHeader={true}>[EmptyList] - NTK</Static>
            <Button onClick={closePopup}><Icon_Close/></Button>
        </Container>
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