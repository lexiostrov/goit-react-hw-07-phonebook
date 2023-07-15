import { fetchDelContacts } from 'redux/option';
import { Btn } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
export const ContactsList = () => {
  const { items: contacts } = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filters);
  const dispatch = useDispatch();
  const lowCaseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCaseFilter)
  );
  return (
    <ul>
      {visibleContacts.map(({ id, name, phone: number }) => {
        return (
          <li key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <Btn onClick={() => dispatch(fetchDelContacts(id))} type="button">
              Delete contact
            </Btn>
          </li>
        );
      })}
    </ul>
  );
};
