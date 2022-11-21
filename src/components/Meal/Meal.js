import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import MyCard from "../MyCard/MyCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Meal() {
    const {id} = useParams();
    const url = id ? 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id : 'https://www.themealdb.com/api/json/v1/1/random.php';
    const [meal, setMeal] = useState([]);

    async function loadData(){
        const responce = await fetch(url);
        const data = await responce.json();
        setMeal(data.meals[0]);
        console.log(data);
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <Container>
        <Row>
            <Col lg={{span: 6, offset:3}}>
                <MyCard meal={meal} />
            </Col>
        </Row>
     </Container>
  );
}