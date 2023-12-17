import styles from './AddBook.module.css'
import bookCover from './img/productBook1.png'
import {Input, Button, Textarea} from "@nextui-org/react";

function AddBook() {

    const variants = ['underlined']

    return <div className={styles.addBookContainer}>
        <div className={styles.bookCover}>
            <img src={bookCover} alt="cover"/>
        </div>
        <div className={styles.infoBookContainer}>
            <div className={styles.bookAuthor}>
         {/*       <p>Имя автора:</p>
                <input type="text"/>*/}
                <Input type='text' label='Имя автора' variant={variants}/>
            </div>
            <div className={styles.bookName}>
                <Input type="text" label='Название книги' variant={variants}/>
            </div>
            <div className={styles.bookAnnotation}>
                <Textarea type="text" label="Аннотация" variant={variants}/>
            </div>
            <div className={styles.bookReview}>
                <Textarea type="text" label="Отзыв" variant={variants}/>
            </div>
            <Button className={styles.addBookButton}>Добавить книгу в библиотеку</Button>
        </div>


    </div>
}

export default AddBook