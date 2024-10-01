import { readContacts } from '../utils/readContacts.js';
import  updateContacts  from '../utils/updateContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const contacts = await readContacts();
    contacts.push(createFakeContact());

    await updateContacts(contacts);
};

addOneContact();

