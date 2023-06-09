import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Item({ task, onStatusChange, onDelete }) {
  const handleTaskStatusChange = () => {
    onStatusChange(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      {/* <input type='checkbox' 
                    checked={task.isDone} 
                    onChange={handleTaskStatusChange} /> {task.name} <button onClick={handleDelete}>X</button> */}
      <Row>
        <Col>
          <Form.Check
            type="switch"
            label={task.name}
            checked={task.isDone}
            onChange={handleTaskStatusChange}
          />
        </Col>
        <Col>
          <Button onClick={handleDelete} variant="outline-danger">
            X
          </Button>
        </Col>
      </Row>
    </div>
  );
}

Item.propTypes = {
  task: PropTypes.object,
  onStatusChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Item;
