import { GET_DATA, SELECT_CATEGORY, SELECT_SUBCATEGORY, SELECT_SENDER, GET_SENDER_BLOODBAGS, SELECT_RECEIVER, GET_RECEIVER_BLOODBAGS, GET_BLOODBAGS_SENT, GET_TRANSFER_STATUS, MAKE_TRANSFER, SET_SENDER_NULL } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_DATA:
            return {
                ...state,
                bloodBags: payload,
            };
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: payload,
            };
        case SELECT_SUBCATEGORY:
            return {
                ...state,
                selectedSubCategory: payload,
            };
        case SELECT_SENDER:
            return {
                ...state,
                selectedSender: payload,
            };
        case SELECT_RECEIVER:
            return {
                ...state,
                selectedReceiver: payload,
            };
        case SET_SENDER_NULL:
            return {
                ...state,
                selectedSender: payload,
            };
        case GET_SENDER_BLOODBAGS:
            return {
                ...state,
                senderBloodBags: payload,
            };
        case GET_RECEIVER_BLOODBAGS:
            return {
                ...state,
                receiverBloodBags: payload,
            };
        case GET_BLOODBAGS_SENT:
            return {
                ...state,
                bloodBagsSent: payload,
            };
        case GET_TRANSFER_STATUS:
            return {
                ...state,
                transferIsReady: payload,
            };
        case MAKE_TRANSFER:
            return {
                ...state,
                transferMade: payload,
            };
        default:
            return state;
    }
};
