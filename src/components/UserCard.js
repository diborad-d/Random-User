import Card from "react-bootstrap/Card";
function UserCard() {
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <Card style={{ width: "80px", height: "80px" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>User Name</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
