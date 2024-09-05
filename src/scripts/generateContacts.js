import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
    const currentContactJSON = await fs.readFile(PATH_DB, "utf-8");
    const currentContact = currentContactJSON ? JSON.parse(currentContactJSON) : [];
    const generatedContacts = Array(number).fill(0).map(createFakeContact);
    const newContactList = [...currentContact, ...generatedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newContactList));
};

generateContacts(5);

