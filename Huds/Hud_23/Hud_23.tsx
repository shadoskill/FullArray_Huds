import Button from '../../../../components/Elements/Button/Button';
import '../Huds.css';
import Static from '../../../../components/Elements/Static/Static';
import Container from '../../../../components/Elements/Container/Container';
import { Icon_Close } from '../../../../components/Icons';
import Category from '../../../../components/Elements/Category/Category';
import './Hud_23.css';
import PA_Level_1 from './PA_Level_1.svg';
import PA_Level_2 from './PA_Level_2.svg';
import PA_Level_3 from './PA_Level_3.svg';

interface IHud{
    doCommand: (channel: number, command: string)=>void;
    closePopup: ()=>void;
}
export default function Hud_23({doCommand, closePopup}: IHud){
    const categories = [
        {
            "name": "Arousal",
            "buttons": [
                [-237593, "!~uuidTarget~!|setArousal1", PA_Level_1],
                [-237593, "!~uuidTarget~!|setArousal2", PA_Level_2],
                [-237593, "!~uuidTarget~!|setArousal3", PA_Level_3],

                [6400, "ArousalBreatheVolumeDecrease", PA_Level_3],
                [6400, "ArousalBreatheVolumeIncrease", PA_Level_3],
            ]
        }
    ];
    return(<>
        <Container className="navSize">
            <Static isHeader={true}>Sensations - Vagina</Static>
            <Button onClick={closePopup}><Icon_Close/></Button>
        </Container>
        <div id="Hud_23">
            {categories.map((entry)=>(
                <Category id={entry.name} className="hudCategory">
                    {entry.buttons.map((entry: any)=>(
                        <Button onClick={()=>doCommand(entry[0], entry[1])}>
                            <img src={entry[2]}/>
                        </Button>
                    ))}
                </Category>
            ))}
        </div>
    </>);
}