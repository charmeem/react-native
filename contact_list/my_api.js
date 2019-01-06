const processContact = contact => ({
    name:`${contact.name.first} ${contact.name.last}`,
    phone: contact.phone

})

export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=5')
    const {results} = await response.json()

    return results.map(processContact)

}

// const processContact = contact => ({
//     name:`${contact.name.first} ${contact.name.last}`,
//     phone: contact.phone
//
// })
//
// export const fetchUsers = async () => {
//     const response = await fetch('https://www.charmeem.com/admin/style/jsonadm/order?page[limit]=200')
//     const {results} = await response.json()
//
//     return results.map(processContact)
//
// }