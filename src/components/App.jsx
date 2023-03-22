
import AddContacts from './AddContacts/AddContacts';
import ContactList from './ContactList/ContactList';
import ContactEll from './ContactEll/ContactEll';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
      {isLoading && !error && <div> Loading... </div> }
      <ContactList>
        <ContactEll />
      </ContactList>
    </div>
  );
}

export default App;
