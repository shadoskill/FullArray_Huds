import Button from "../../components/Elements/Button/Button";
import Container from "../../components/Elements/Container/Container";
import Static from "../../components/Elements/Static/Static";
import { Icon_Close } from "../../components/Icons";

type Type_Hudlet_Header = {
    title: string;
    closePopup: ()=>void;
}
export function Hudlet_Header({title, closePopup}: Type_Hudlet_Header){
    return(
        <Container className="navSize">
            <Static isHeader={true}>{title}</Static>
            <Button onClick={closePopup}><Icon_Close/></Button>
        </Container>
    );
}