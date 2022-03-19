/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { getTableById, sendTables } from '../../redux/tablesRedux'
import MyButton from "../Button/MyButton";
import { useDispatch } from "react-redux";
import clsx from 'clsx';


import styles from './Table.module.scss'


const Table = () => {

    const { tableId } = useParams()

    const tableData = useSelector(state => getTableById(state, tableId));

    if (!tableData) return <Navigate to={"/"} />

    const [status, setStatus] = useState(tableData.status)
    const [people, setPeople] = useState(tableData.peopleAmount)
    const [maxPeople, setMaxPeople] = useState(tableData.maxPeopleAmount)
    const [bill, setBill] = useState(tableData.bill)

    const peopleInt = parseInt(people);
    const maxPeopleInt = parseInt(maxPeople)

    console.log(status);

    let peopleValid = peopleInt;
    let maxPeopleValid = maxPeopleInt;
    let billVisible;

    if (status === "cleaning" || status === "free"){
        billVisible = false;
        peopleValid = 0;
        maxPeopleValid = 0;
    }else if(status === "busy"){
        billVisible = true;
        if (peopleInt > 10){
            setPeople(10)
        } else if (peopleInt < 0){
            setPeople(0)
        }
        
        if (maxPeopleInt > 10){
            setMaxPeople(10)
        } else if (maxPeopleInt < 0){
            setMaxPeople(0)
        }

        if (maxPeopleInt < peopleInt){
            setPeople(maxPeopleInt)
        }
    }

    

    const preparePayload = () => {
        const payload = {};
        payload.id = tableData.id;
        payload.status = status;
        payload.peopleAmount = people;
        payload.maxPeopleAmount = maxPeople;
        payload.bill = bill;
        
        return payload;
    }

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendTables(preparePayload()));   
    }

    return (
        <Container >
            <h1>Table {tableData.id}</h1>
            <Form className="mt-5" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalStatus">
                    <Form.Label column sm={1}>
                        Status:
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Select aria-label="Default select example" value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="busy">Busy</option>
                            <option value="free">Free</option>
                            <option value="reserved">Reserved</option>
                            <option value="cleaning">Cleaning</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalStatus">
                    <Form.Label column sm={1}>
                        People:
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="number" placeholder="1-10" value={peopleValid} onChange={e => setPeople(e.target.value)} />
                    </Col>
                    <div className={styles.slashBox}>
                        <span className={styles.slash}>/</span>
                    </div>
                    <Col sm={2}>
                        <Form.Control type="number" placeholder="1-10" value={maxPeopleValid} onChange={e => setMaxPeople(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalStatus" className={clsx("mb-3", styles.bill, billVisible == true && styles.active)}>
                    <Form.Label column sm={1}>
                        Bill:
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="number" placeholder="$$$" value={bill} onChange={e => setBill(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Col sm="4">
                    <MyButton type="submit">
                        Submit
                    </MyButton>
                </Col>
            </Form>
        </Container>
    )
};

export default Table;