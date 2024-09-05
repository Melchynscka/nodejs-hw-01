import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    if (!contacts) {
        return null;
    }
    return await JSON.parse(contacts).length;
};

console.log(await countContacts());

