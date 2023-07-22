import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contacts/contactSlice";
import { nanoid } from "nanoid";

export const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });
    const dispatch = useDispatch();
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(
        addContact({
          id: nanoid(5),
          ...contact,
        })
      );
    setContact({
      name: "",
      phone: "",
    });
  };
  return (
    <section>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={contact.name}
          ></input>
        </label>
        <label>
          Phone Numer:
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            onChange={handleChange}
            value={contact.phone}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
