import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/functionsContacts';

import css from './ContactEll.module.css';

const ContactEll = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteBtn = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            {contact.name}: {contact.phone}
            <button
              className={css.btn}
              onClick={() => handleDeleteBtn(contact.id)}
            >
              x
            </button>
          </li>
        ))
      ) : filterValue && contacts ? (
        <div>Unfortunately, we couldn't find any matches.</div>
      ) : (
        <div>You don't have any contacts yet.</div>
      )}
    </>
  );
};

export default ContactEll;
