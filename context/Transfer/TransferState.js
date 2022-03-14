import React, { useReducer } from "react";
import axios from "axios";

import TransferContext from "./TransferContext";
import TransferReducer from "./TransferReducer";

import { GET_DATA, SELECT_CATEGORY, SELECT_SUBCATEGORY, SELECT_SENDER, GET_SENDER_BLOODBAGS, SELECT_RECEIVER, GET_RECEIVER_BLOODBAGS, GET_BLOODBAGS_SENT, GET_TRANSFER_STATUS, MAKE_TRANSFER, SET_SENDER_NULL } from "../types"


const TransferState = (props) => {
    const initialState = {
        bloodBags: [
            {
                city: "Paris",
                aplus: 5,
                aminus: 8,
                bplus: 20,
                bminus: 7,
                oplus: 14,
                ominus: 21,
                abplus: 1,
                abminus: 10,
            },
            {
                city: "Marseille",
                aplus: 5,
                aminus: 10,
                bplus: 8,
                bminus: 4,
                oplus: 5,
                ominus: 4,
                abplus: 14,
                abminus: 7,
            },
            {
                city: "Nice",
                aplus: 8,
                aminus: 5,
                bplus: 20,
                bminus: 7,
                oplus: 4,
                ominus: 21,
                abplus: 7,
                abminus: 4,
            },
            {
                city: "Lille",
                aplus: 5,
                aminus: 1,
                bplus: 20,
                bminus: 8,
                oplus: 7,
                ominus: 9,
                abplus: 14,
                abminus: 1,
            }
        ],
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

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:9001/bloodbags");
            console.log(res);
            const data = res;
            dispatch({ type: GET_DATA, payload: data });
        } catch (error) {
            console.error("Error en la aplicación");
        }
    };

    const selectCategory = (category) => {
        dispatch({ type: SELECT_CATEGORY, payload: category });
    }
    const selectSubCategory = (subcategory) => {
        dispatch({ type: SELECT_SUBCATEGORY, payload: subcategory });
    }
    const selectSender = (sender) => {
        dispatch({ type: SELECT_SENDER, payload: sender });
        if (state.selectedReceiver != null && state.selectedReceiver == sender) {
            dispatch({ type: SELECT_RECEIVER, payload: null });
            dispatch({ type: SELECT_SENDER, payload: null });
        }
    }
    const selectReceiver = (receiver) => {
        dispatch({ type: SELECT_RECEIVER, payload: receiver });
        if (state.selectedSender == null) {
            dispatch({ type: SELECT_RECEIVER, payload: null });
        }
        if (receiver != undefined) {
            dispatch({ type: SELECT_RECEIVER, payload: receiver });
        }
    }
    const setSenderNull = () => {
        dispatch({ type: SET_SENDER_NULL, payload: null });
    }

    const getSenderBloodBags = (category, subcategory, sender) => {
        let number = 0;
        let index = 0;
        if (sender == "Paris") { index = 0 }
        if (sender == "Marseille") { index = 1 }
        if (sender == "Nice") { index = 2 }
        if (sender == "Lille") { index = 3 }
        if (sender == null) { dispatch({ type: GET_SENDER_BLOODBAGS, payload: 0 }); }

        if (category == 'A') {
            if (subcategory == 'plus') { number = state.bloodBags[index].aplus }
            if (subcategory == 'minus') { number = state.bloodBags[index].aminus }
        }
        if (category == 'B') {
            if (subcategory == 'plus') { number = state.bloodBags[index].bplus }
            if (subcategory == 'minus') { number = state.bloodBags[index].bminus }
        }
        if (category == 'O') {
            if (subcategory == 'plus') { number = state.bloodBags[index].oplus }
            if (subcategory == 'minus') { number = state.bloodBags[index].ominus }
        }
        if (category == 'AB') {
            if (subcategory == 'plus') { number = state.bloodBags[index].abplus }
            if (subcategory == 'minus') { number = state.bloodBags[index].abminus }
        }
        dispatch({ type: GET_SENDER_BLOODBAGS, payload: number });
    }

    const getReceiverBloodBags = (category, subcategory, receiver) => {
        let numberReceiver = 0;
        let indexReceiver = 0;
        if (receiver == "Paris") { indexReceiver = 0 }
        if (receiver == "Marseille") { indexReceiver = 1 }
        if (receiver == "Nice") { indexReceiver = 2 }
        if (receiver == "Lille") { indexReceiver = 3 }
        if (receiver == null) { dispatch({ type: GET_RECEIVER_BLOODBAGS, payload: 0 }) }

        if (category == 'A') {
            if (subcategory == 'plus') { numberReceiver = state.bloodBags[indexReceiver].aplus }
            if (subcategory == 'minus') { numberReceiver = state.bloodBags[indexReceiver].aminus }
        }
        if (category == 'B') {
            if (subcategory == 'plus') { numberReceiver = state.bloodBags[indexReceiver].bplus }
            if (subcategory == 'minus') { numberReceiver = state.bloodBags[indexReceiver].bminus }
        }
        if (category == 'O') {
            if (subcategory == 'plus') { numberReceiver = state.bloodBags[indexReceiver].oplus }
            if (subcategory == 'minus') { numberReceiver = state.bloodBags[indexReceiver].ominus }
        }
        if (category == 'AB') {
            if (subcategory == 'plus') { numberReceiver = state.bloodBags[indexReceiver].abplus }
            if (subcategory == 'minus') { numberReceiver = state.bloodBags[indexReceiver].abminus }
        }
        dispatch({ type: GET_RECEIVER_BLOODBAGS, payload: numberReceiver });
    }

    const sendBloodBags = (bloodBags) => {
        dispatch({ type: GET_BLOODBAGS_SENT, payload: bloodBags });
    }

    const getTransferStatus = () => {
        if (state.category !== null && state.subcategory !== null && state.selectedSender !== null && state.selectedReceiver !== null && state.bloodBagsSent >= 1) {
            dispatch({ type: GET_TRANSFER_STATUS, payload: true });
        } else {
            dispatch({ type: GET_TRANSFER_STATUS, payload: false });
        }
    }

    const makeTransfer = () => {
        console.log("Transfer Made!!!!");
        dispatch({ type: MAKE_TRANSFER, payload: true });
    }

    return (
        <TransferContext.Provider
            value={{
                bloodBags: state.bloodBags,
                selectedCategory: state.selectedCategory,
                selectedSubCategory: state.selectedSubCategory,
                selectedSender: state.selectedSender,
                senderBloodBags: state.senderBloodBags,
                selectedReceiver: state.selectedReceiver,
                receiverBloodBags: state.receiverBloodBags,
                bloodBagsSent: state.bloodBagsSent,
                transferIsReady: state.transferIsReady,
                transferMade: state.transferMade,
                getData,
                selectCategory,
                selectSubCategory,
                selectSender,
                selectReceiver,
                setSenderNull,
                getSenderBloodBags,
                getReceiverBloodBags,
                sendBloodBags,
                getTransferStatus,
                makeTransfer
            }}
        >
            {props.children}
        </TransferContext.Provider>
    );
};

export default TransferState;