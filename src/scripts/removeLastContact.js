import { readContacts } from "../utils/readContacts.js";
import updateContacts from "../utils/updateContacts.js";


export const removeLastContact = async () => {
    const contacts = await readContacts();
    contacts.pop();
    await updateContacts(contacts);
};

removeLastContact();

