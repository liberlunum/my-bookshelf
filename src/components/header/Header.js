import styles from './Header.module.css'
import Menu from "./menu/Menu";
import Registration from "./registration/Registration";

function Header() {
    return <div className={styles.headerContainer}>
        <Menu/>
        <Registration/>
    </div>
}

export default Header