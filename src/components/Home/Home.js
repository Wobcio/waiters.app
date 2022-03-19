import { Container, ListGroup, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from '../../redux/tablesRedux';
import TableCard from "../TableCard/TableCard";
import clsx from 'clsx';


import styles from './Home.module.scss'
import { useState } from "react";


const Home = ({loading}) => {

  const tables = useSelector(state => getAllTables(state));

    return (
      <Container>
        <h1 className={styles.title}>All tables</h1>
        <Spinner animation="border" className={clsx(styles.spinner, loading === true && styles.active)}/>
        <ListGroup>
          {tables.map(table => <TableCard key={table.id} {...table} />)}
        </ListGroup>
     
      </Container>
    
    );
  }
  
  export default Home;
  