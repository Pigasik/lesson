import { useEffect, useState } from "react";
import MyCard from "../MyCard/MyCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from "../Loader/Loader";

export default function Meals() {

    const [meals, setMeals] = useState([]);

    async function loadData(){
        const responce = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await responce.json();
        setMeals(data.meals);
        console.log(data);
    }
    useEffect(() => {
        loadData();
    }, [])
    return(
    <Container>
        <Row>
            {!meals.length && <Loader/>}
            { meals.length &&
             meals.map((meal) => {
                return (
                    <Col xs={12} xl={3} sm={6}>
                        <MyCard smoleStyles meal={meal}/>
                    </Col>
                )
            })}
        </Row>
     </Container> )
    
}

//<div>
                //<h1>Meals</h1>
        // <ol>{meals.map((meal) => {
                //return <li key={meal.idMeal}>{meal.strMeal}</li>
        //})}</ol> 
//</div>; 