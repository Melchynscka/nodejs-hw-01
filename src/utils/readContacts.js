import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const currentContactJSON = await fs.readFile(PATH_DB, "utf-8");
        return JSON.parse(currentContactJSON);
    } catch (error) {
        console.error('Error reading contacts file:', error);
        return null;
    }
};