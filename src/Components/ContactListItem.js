import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <>
      <li>
        {name} {number}
      </li>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
