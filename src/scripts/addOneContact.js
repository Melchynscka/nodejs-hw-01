import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const currentContactJSON = await fs.readFile(PATH_DB, "utf-8");
    const currentContact = currentContactJSON ? JSON.parse(currentContactJSON) : [];
    const newContact1 = createFakeContact();
    currentContact.push(newContact1);
    await fs.writeFile(PATH_DB, JSON.stringify(currentContact));
};

addOneContact();

