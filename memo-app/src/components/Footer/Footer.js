import styles from './Footer.module.css'
import { FaGithub} from 'react-icons/fa'


const Footer=()=>{
    return(
        <div className={styles.footer} >
        <p>copyright©temsgentegaye</p><a href="https://github.com/Temesgen-Tsegaye/weather-application"><FaGithub className={styles.git}/></a> 
        </div>
    )
}
export default Footer