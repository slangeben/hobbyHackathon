import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EventCard({eventName, location, time, imgSrc, description}) {
  return (
    <Card style={{ width: '18rem' , height: '30rem'}}>
      <Card.Img variant="top" src={imgSrc} width={287} height={180} />
      <Card.Body>
        <Card.Title>{eventName}</Card.Title>
        <Card.Text>
          Location: {location}
          Time: {time}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;