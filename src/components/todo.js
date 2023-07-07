import React from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem  } from 'reactstrap';
 

function Todo() {
  return (
    <div className="App">
     <Card
  style={{
    width: '18rem'
  }}
> <CardHeader>
    To-do task
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
      Eat an apple
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
    <ListGroupItem>
      Eat an apple
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
    <ListGroupItem>
      Eat an apple
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
</Card>
    </div>
  );
}

export default Todo;
