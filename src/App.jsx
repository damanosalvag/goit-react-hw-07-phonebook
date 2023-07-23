import { Container, Typography } from "@mui/material";
import { ContactFilter } from "./components/ContactFilter";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactsList";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom align="center">Phonebook
      </Typography>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </Container>
  );
}

export default App;
