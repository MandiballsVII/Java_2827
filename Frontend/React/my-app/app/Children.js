import {Avatar} from "./Avatar.js";
import PropTypes from 'prop-types';

function Card({children}) {
    return (
      <div className="card">      
        {children}
      </div>
    );
  }
  Card.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export default function ChildrenProfile() {
    return (
      <Card>
        <Avatar 
        size = {100}
        person = {{name: 'Katsuko Saruhashi', imageID: 'YfeOqp2'}}
        />
        <div className="card-body">
          <h2>Katsuko Saruhashi</h2>
          <p>Software Engineer</p>
        </div>
      </Card>
    );
  }