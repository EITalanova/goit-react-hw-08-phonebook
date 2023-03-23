import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactEll from 'components/ContactEll/ContactEll';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {visibleContacts.length > 0 ? (
          visibleContacts.map(contact => (
            <ContactEll key={contact.id} {...contact} />
          ))
        ) : filterValue && contacts ? (
          <div>Unfortunately, we couldn't find any matches.</div>
        ) : (
          <div>You don't have any contacts yet.</div>
        )}
      </div>
    </>
  );
};

export default ContactList;