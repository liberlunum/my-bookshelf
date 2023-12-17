import styles from './Menu.module.css'

function Menu() {
    return <div className={styles.menuContainer}>
        <div className={styles.homePage}>
            Домашняя страница
        </div>
        <div className={styles.library}>
            Библиотека
        </div>
        <div className={styles.addBook}>
            Добавить книгу
        </div>
    </div>
}

export default Menu