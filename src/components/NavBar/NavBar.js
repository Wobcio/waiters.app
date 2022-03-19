import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' className={styles.navbar}>
            <Container>
                <Link to={'/'}>
                    <Navbar.Brand >Waiter.app</Navbar.Brand>
                </Link>                
                <Nav>
                    <Link to={'/'}>
                        Home
                    </Link>
                </Nav>
            </Container>
        </Navbar>
                )
}

                export default NavBar;