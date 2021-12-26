export const addBusiness = (business) => ({
    type: 'ADD_BUSINESS',
    value: business
})

export const removeBusiness = (index) => ({
    type: 'REMOVE_BUSINESS',
    value: index
})

export const addUser = (user) => ({
    type: 'ADD_USER',
    value: user
})

export const removeUser = (user) => ({
    type: 'REMOVE_USER',
    value: user
})