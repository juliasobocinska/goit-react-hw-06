import React from "react";
import { useSelector, useDispatch } from "react-redux";  
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm"; 
import SearchBox from "./components/SearchForm";
import { addContact } from "./redux/contactsSlice";  
import "./App.css";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);  
  const dispatch = useDispatch();  

  const handleAddContact = (contact) => {
    dispatch(addContact(contact)); 
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
      <SearchBox />
      <ContactForm onAddContact={handleAddContact} /> 
    </div>
  );
};

export default App;
