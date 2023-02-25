export const getContacts = async () => {
    // return массив
    const responce = await fetch('http://localhost:1717/contacts')
    const contacts = await responce.json()
    return contacts
}