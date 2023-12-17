import styles from './Registration.module.css'
import {ReactComponent as IconSign} from "./img/male-add-icon.svg";

function Registration() {
    return <div>
        <IconSign className={styles.iconSign}/>
    </div>
}

export default Registration