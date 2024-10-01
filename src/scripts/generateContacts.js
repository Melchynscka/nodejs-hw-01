import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import  updateContacts  from '../utils/updateContacts.js';

export const generateContacts = async (number) => {
    const contacts = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    contacts.push(...newContacts);
    await updateContacts(contacts);
};

generateContacts(5);

