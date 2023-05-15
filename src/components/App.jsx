// Встановлення через термінал генератора id
// $ npm install --save nanoid

import {ContactForm} from "./Form/ContactForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";
import css from "./App.module.css"; // підключення стилів

// Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { addContacts, deleteContacts } from "../redux/tasksContacts";
import { contactFilter } from "../redux/filterContacts";

export const App = () => {

  const dispatch = useDispatch();// Отримуємо посилання на функцію відправки екшенів
  const contact = useSelector(state => state.contacts);// ОТРИМАННЯ МАСИВУ 
  const filter = useSelector(state => state.filter);// ОТРИМАННЯ FILTER


// ADD CONTACT - додаємо контакт до масиву
const addContact = ({ name, number }) => {
  if (contact.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        alert(`${name} is alredy in contacts`); // якщо є, то виводимо повідомлення
  } else {
        dispatch(addContacts( name, number )); // ADD CONTACT - зберігаємо
  }
}

// FILTER - фільтруємо введені данні 
const filterOn = () => {
  const filteredContacts = contact.filter(state => state.name.toLowerCase().includes(filter.toLowerCase()))

  return filteredContacts;
}


// РЕНДНЕРІНГ сторінки
      return (
      <div className={css.container}>
        <h1 className={css.section_title}>Phonebook</h1>
        <ContactForm addContact={addContact}/>

        <h2 className={css.section_title}>Contacts</h2>
        <Filter  filter={filter} handleChange={event => dispatch(contactFilter( event.currentTarget.value ))}/>
        <ContactsList onClickDelete={e => dispatch(deleteContacts(e.currentTarget.id))} contacts={filterOn()}></ContactsList>
      </div>
  );};