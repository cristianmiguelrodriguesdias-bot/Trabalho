import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}> 
                <p>© 2026 Vitrine de Produtos Tech. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}   

export default Footer;  