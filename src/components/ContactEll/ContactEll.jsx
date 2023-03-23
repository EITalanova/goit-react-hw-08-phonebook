import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { updateContact } from 'redux/contacts/operations';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactEll = ({ id, name, number }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleEditButton = id => {
    setIsEdit(prevState => !prevState);
    if (isEdit && (newName !== name || newNumber !== number)) {
      dispatch(
        updateContact({
          name: newName,
          number: newNumber,
          id,
        })
      );
      dispatch(fetchContacts());
    }
  };

  const onFormChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'number':
        setNewNumber(value);

        break;
      default:
        throw new Error('There has been a mistake. Try again, please.');
    }
  };
  return (
    <ListItem>
      {isEdit ? (
        <>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            type="text"
            name="name"
            defaultValue={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onFormChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            size="small"
            type="tel"
            name="number"
            defaultValue={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onFormChange}
          />{' '}
        </>
      ) : (
        <p>
          <span>
            <IoMdPerson />
          </span>
          {name}: {number}
        </p>
      )}

      <Button
        type="button"
        variant="outlined"
        startIcon={!isEdit ? <EditIcon /> : <SaveAsIcon />}
        size="small"
        onClick={() => handleEditButton(id)}
      >
        {isEdit ? 'Save' : 'Edit'}
      </Button>

      <Button
        type="button"
        onClick={() => handleDeleteButton(id)}
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
      >
        Delete
      </Button>
    </ListItem>
  );
};