import getimageurl from './utils.js';
import PropTypes from 'prop-types';

export function Avatar({person, size}){
    return(
        <img
        className="avatar"
        src={getimageurl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
}
Avatar.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageID: PropTypes.string.isRequired
    }).isRequired,
    size: PropTypes.number.isRequired
};

export default function AvatarProfiles() {
    return (
      <div>
        <Avatar person = {{name: 'Katsuko Saruhashi', imageID: 'YfeOqp2'}}
        size = {144}
        />
        <Avatar person = {{name: 'Aklilu Lemma', imageID: 'OKS67lh'}}
        size = {48}
        />  
        <Avatar person = {{name: 'Lin Lanying', imageID: '1bX5QH6'}}
        />
      </div>
    
    );
  }