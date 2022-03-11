import { SELECT_CATEGORY, SELECT_SUBCATEGORY, SELECT_SENDER, GET_SENDER_BLOODBAGS, SELECT_RECEIVER, GET_RECEIVER_BLOODBAGS, GET_BLOODBAGS_SENT, GET_TRANSFER_STATUS, MAKE_TRANSFER, SET_SENDER_NULL } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
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
        default:
            return state;
    }
};
