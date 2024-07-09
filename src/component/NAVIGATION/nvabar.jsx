import styles from "./navbar.module.css"
function Navbar()
{
    return(<>
    <nav className={`${styles.navbar} container`}>
        <div className=" nav-img  ">
            <img src="/images/frame 2 1.png" alt="logic" className="img"/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>)
}
export  default Navbar