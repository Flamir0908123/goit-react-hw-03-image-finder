import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className="contact-list-item">
    <p className="name bold">{name}</p>
    <p>{number}</p>
    <button className="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;