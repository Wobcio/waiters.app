import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyButton from '../Button/MyButton';
import styles from './TableCard.module.scss'


const TableCard = ({id, status, peopleAmount, maxpeopleAmount, bill }) => {

  
    return (
        <ListGroupItem className={styles.listItem}>
            <div className={styles.details}>
            <h3>Table {id}</h3>
            <p className={styles.status}><span>Status: </span>{status}</p>
            </div>
            <Link to={'/table/' + id}>
            <MyButton className={styles.button}>
                Show more
            </MyButton>
            </Link>
            
        </ListGroupItem>
    );
  }
  
  export default TableCard;
  