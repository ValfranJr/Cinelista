import styles from "./footer.module.css";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Cinelista - Todos os direitos
          reservados
        </p>
      </footer>
    );
}

export default Footer;