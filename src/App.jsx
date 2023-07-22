import { ContactFilter } from "./components/ContactFilter";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactsList";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
}

export default App;
