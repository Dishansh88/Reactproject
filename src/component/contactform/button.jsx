import styles from "./button.module.css"
const Button = (props)=>
{
    return(<>
      <button className={styles.btn}>
        {props.text}
        {props.text2}
        {props.text3}
    
      </button>
           
    
    </>)
}
export default Button