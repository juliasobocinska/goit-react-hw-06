import { createSlice } from '@reduxjs/toolkit';


const loadContactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
};

const initialState = {
  items: loadContactsFromLocalStorage(),
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

    addContact(state, action) {
      state.items.push(action.payload);  
      
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);  
        
        localStorage.setItem('contacts', JSON.stringify(state.items));
      }
    },
  },
});

// Eksportowanie akcji i reducer
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
