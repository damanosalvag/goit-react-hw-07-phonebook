import { useDispatch } from "react-redux";
import { filterContact } from "../features/contacts/contactSlice";

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <section>
      <h3>Search contact</h3>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        onChange={handleChange}
      />
    </section>
  );
};
