import AddContacts from 'components/AddContacts/AddContacts';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export const ContactPage = () => {
  return (
    <div>
      <h1> Phonebook</h1>
      <AddContacts />
      <h1> Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};
