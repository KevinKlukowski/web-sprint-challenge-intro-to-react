//Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, CardBody, CardImg, CardTitle, CardText, ListGroup, ListGroupItem, Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Character(props) {
    const {character} = props;

    const [likes, setLikes] = useState(0);
    const [hates, setHates] = useState(0);

    return (
        <Container>
        <Card>
          <CardImg variant="top" src={character.image} />
          <CardBody>
            <CardTitle>{character.name}</CardTitle>
            {character.status === 'Alive' ?
                <CardText> This is a living member of the Rick and Morty-sphere.</CardText>
                :
                <CardText>Oh no! I am sorry, this character has DIED!!!💀</CardText>    
            }
          </CardBody>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Gender: {character.gender}</ListGroupItem>
            <ListGroupItem>Origin: {character.origin.name}</ListGroupItem>
            <ListGroupItem>Species: {character.species}</ListGroupItem>
            <ListGroupItem>
                <Progress multi>
                <Progress animated bar color='info' value={likes} />
                <Progress animated bar color='danger' value={hates} />
                </Progress>
            </ListGroupItem>
          </ListGroup>
          <CardBody>
            <Button color='primary' onClick={e => setLikes(likes + 1)}>
            {likes} {likes > 1 ? 'Likes❤️' : 'Like❤️'}
            </Button>
            <Button color='danger' onClick={e => setHates(hates + 1)}>
            {hates} {hates > 1 ? 'Hates' : 'Hate'}
            </Button>
          </CardBody>
        </Card>
        </Container> 
    )
}

const Container = styled.div`
    max-width: 80%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 5%;
    margin: 0 auto;
    font-family: 'TESLA';
    font-size: 2rem;

    @media (max-width: 550px) {
        
    }
`

