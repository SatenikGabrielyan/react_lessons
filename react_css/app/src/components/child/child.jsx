import { createUseStyles } from "react-jss"
import styles from "./style.module.css"

export const Child = () => {
    return <>
    <MyButton>Hylo!!</MyButton>
    <h3 className={styles.title}>Child</h3>
    <h1 className="bg-indigo-600 text-white pt-2">Hello</h1>

    <h1 className="bg-red-600">hi</h1>
    </>
}
const useStyles = createUseStyles({
    myButton:{
        fontSize:42,
        backgroundColor:"indigo",
        color:"white"
    }
})
export const MyButton = (props) => {
    const styles = useStyles()
    return <button className={styles.myButton}>{props.children}</button>
}