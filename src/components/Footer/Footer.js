import styles from './Footer.module.scss'

const Footer = props => {
    return (
        <footer className={styles.footer}>
            Wobcio Pizzeria - Waiters.app <i className="fa-regular fa-copyright"></i>
        </footer>
    )
}

 export default Footer;