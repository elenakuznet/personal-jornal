import styles from './Header.module.css';

function Header() {
    
    return (
        <div className='header'>
            <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
        </div>
    );
}

export default Header;