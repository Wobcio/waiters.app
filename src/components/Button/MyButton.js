import clsx from 'clsx';
import { Button } from 'react-bootstrap';
import styles from './MyButton.module.scss'


const MyButton = (props) => {

  
    return (
        <Button type={props.type} className={clsx(props.className, styles.button)}>
            {props.children}
        </Button>
    );
  }
  
  export default MyButton;
  