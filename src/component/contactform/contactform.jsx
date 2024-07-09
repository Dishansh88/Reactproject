import styles from "./contactform.module.css"
import Button from "./button"
import { useState } from "react"

function Contactform()
{
    
    const [name,setname]=useState(" ")
    const [email,setemail]=useState("")
    const [textarea,settextarea]=useState("")
  
    function Info(event)
    {

        event.preventDefault()
        setname(event.target[0].value)
        setemail(event.target[1].value)
        settextarea(event.target[2].value)
        
    
    }

    return(
           <>

           <section className={`${styles.container}`}>
     <div className={styles.formbox}>
            <div className={styles.btn}>
            
                 <Button  text="VIA SUPPORT CHAT"/>
                 <Button text2="VIA CALL"/>
            </div>
            <div className={styles.outline}>
                <Button  text3="EMAIL" />
            </div>
     </div>
         <div className={styles.main}>
            <div className={styles.form_box}>

              <form onSubmit={Info} >
        
                <div>
                    <label htmlFor="name">Name</label><br></br>
                    <input type="text" name='name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br></br>
                    <input type="email" name='email' />
                </div>
                <div>
                    <label htmlFor="textarea">Textarea</label><br></br>
                   <textarea name="textarea"/> 
                </div>

                <div>
                    <button text="submit"/>
                </div>
                <div>
                     
                        
                       {email}
                        {name}
                        {textarea}
        
                     

                       
                </div>
               </form>
               </div>
                <div className={styles.imgbox}>
                    <img src="./images/service 24_7-pana 1.png" alt=""/>
    
                </div>
             </div>
             <div>
            
             </div>
           </section>
           
            
           </>
           )
}
export default Contactform