import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../features/contacts/contactSlice";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.list);
  const query=useSelector((state)=>state.contacts.filter)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <section>
      <h3>Contact List</h3>
      <ol>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.phone}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </section>
  );
};
