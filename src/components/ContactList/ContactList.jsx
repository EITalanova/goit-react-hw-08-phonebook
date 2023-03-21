import css from './ContactList.module.css';
import React from 'react';

const ContactList = ({ children }) => {
  return <ul className={css.contactList}>{children}</ul>;
};

export default ContactList;
