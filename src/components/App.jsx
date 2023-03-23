import AddContacts from './AddContacts/AddContacts';
import ContactList from './ContactList/ContactList';
import ContactEll from './ContactEll/ContactEll';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectRefreshing,
} from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <AddContacts />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <div> Loading... </div>}
      <ContactList>
        <ContactEll />
      </ContactList>
    </div>
  );
}

export default App;
