import styles from "./styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Vitrine de Produtos Tech</h1>
        </header>
    );
}   

export default Header;