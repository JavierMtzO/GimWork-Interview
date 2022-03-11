import React, { useReducer } from "react";
import axios from "axios";

import TransferContext from "./TransferContext";
import TransferReducer from "./TransferReducer";

import { SELECT_CATEGORY, SELECT_SUBCATEGORY, SELECT_SENDER, GET_SENDER_BLOODBAGS, SELECT_RECEIVER, GET_RECEIVER_BLOODBAGS, GET_BLOODBAGS_SENT, GET_TRANSFER_STATUS, MAKE_TRANSFER, SET_SENDER_NULL } from "../types"


const TransferState = (props) => {
    const initialState = {
        selectedCategory: null,
        selectedSubCategory: null,
        selectedSender: null,
        senderBloodBags: 0,
        selectedReceiver: null,
        receiverBloodBags: 0,
        bloodBagsSent: 0,
        transferIsReady: false,
        transferMade: false,
    };

    const [state, dispatch] = useReducer(TransferReducer, initialState);

    const selectCategory = (category) => {
        console.log("Category = " + category);
        dispatch({ type: SELECT_CATEGORY, payload: category });
    }
    const selectSubCategory = (subcategory) => {
        console.log("SubCategory = " + subcategory);
        dispatch({ type: SELECT_SUBCATEGORY, payload: subcategory });
    }
    const selectSender = (sender) => {
        console.log("Sender = " + sender);
        dispatch({ type: SELECT_SENDER, payload: sender });
        if (state.selectedReceiver != null && state.selectedReceiver == sender) {
            console.log("Receiver = " + null);
            console.log("Sender = " + null);
            dispatch({ type: SELECT_RECEIVER, payload: null });
            dispatch({ type: SELECT_SENDER, payload: null });
        }
    }
    const selectReceiver = (receiver) => {
        if (receiver != undefined) {
            console.log("Receiver = " + receiver);
            dispatch({ type: SELECT_RECEIVER, payload: receiver });
        }
    }
    const setSenderNull = () => {
        console.log("Sender = " + null);
        dispatch({ type: SET_SENDER_NULL, payload: null });
    }
    return (
        <TransferContext.Provider
            value={{
                selectedCategory: state.selectedCategory,
                selectedSubCategory: state.selectedSubCategory,
                selectedSender: state.selectedSender,
                senderBloodBags: state.senderBloodBags,
                selectedReceiver: state.selectedReceiver,
                receiverBloodBags: state.receiverBloodBags,
                bloodBagsSent: state.bloodBagsSent,
                transferIsReady: state.transferIsReady,
                transferMade: state.transferMade,
                selectCategory,
                selectSubCategory,
                selectSender,
                selectReceiver,
                setSenderNull
            }}
        >
            {props.children}
        </TransferContext.Provider>
    );
};

export default TransferState;