import { getAllContacts } from './getAllContacts.js';
import  updateContacts  from '../utils/updateContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);

    await updateContacts(contacts);
};

addOneContact();

