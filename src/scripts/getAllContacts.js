import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contacts =  await readContacts();
    if (!contacts) {
        return null;
    }
    return contacts;
};

    console.log(await getAllContacts()); 


