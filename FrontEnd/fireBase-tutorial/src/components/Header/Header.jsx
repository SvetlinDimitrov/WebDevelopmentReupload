import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";

function Header() {
    const user = useContext(UserContext);
    if (user) {
        return (
            <header className={styles['header-container']}>
                <nav className={styles['header-nav']}>
                    <Link to="/" className={styles['nav-link']}>Home</Link>
                    <Link to="/toDoList" className={styles['nav-link']}>To Do List</Link>
                    <Link to="/logout" className={styles['nav-link']}>Logout</Link>
                </nav>
            </header>
        )
    }
    return (
        <header className={styles['header-container']}>
            <nav className={styles['header-nav']}>
                <Link to="/" className={styles['nav-link']}>Home</Link>
                <Link to="/login" className={styles['nav-link']}>Login</Link>
                <Link to="/register" className={styles['nav-link']}>Register</Link>
            </nav>
        </header>
    )
}

export default Header;