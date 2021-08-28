import React from 'react';
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact}) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
        <li
        className={styles.ContactItem}
        key={id}
      >
        <p className={styles.ContactItemText}>{name}<span className={styles.ContactItemSpan}>{number}</span></p>
        <button
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes  = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;