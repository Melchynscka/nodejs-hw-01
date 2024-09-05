import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), "utf-8");
        console.log('Contacts successfully written to file');
    } catch (error) {
        console.error('Error writing contacts to file:', error);
    }
};

