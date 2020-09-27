export default (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        case 'GET_TRANSACTION':
            return {
                ...state,
                loading: false,
                transaction: action.payload
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}