export const addBusiness = (business) => ({
    type: 'ADD_BUSINESS',
    value: business
})

export const removeBusiness = (index) => ({
    type: 'REMOVE_BUSINESS',
    value: index
})