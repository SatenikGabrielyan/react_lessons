import { IMedecine } from "./types"

interface IProps{
    med:IMedecine
}

export const MedicineItem:React.FC<IProps> = ({med}) => {
  
    return <>
    
    <img src={med.photo} height={100} width={130} />
    <p>{med.name}</p>
    <p>{med.price}</p>
    
    </>
}