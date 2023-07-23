import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../features/contacts/contactSlice";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.list);
  const query = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
      <List>
        {filteredContacts.map((contact) => (
          <ListItem
            key={contact.id}
            disableGutters
            secondaryAction={
              <Tooltip title="Delete" placement="right">
                <IconButton onClick={() => handleDelete(contact.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Tooltip>
            }
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" align="left">
                  {`${contact.name}`}
                </Typography>
              }
            />
            <ListItemText
              primary={
                <Typography variant="string" align="left">
                  {`${contact.phone}`}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
  );
};
