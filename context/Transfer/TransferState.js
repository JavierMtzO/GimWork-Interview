import React, { useReducer } from "react";
import axios from "axios";

import TransferContext from "./TransferContext";
import TransferReducer from "./TransferReducer";

import { SELECT_CATEGORY, SELECT_SUBCATEGORY, SELECT_SENDER, GET_SENDER_BLOODBAGS, SELECT_RECEIVER, GET_RECEIVER_BLOODBAGS, GET_BLOODBAGS_SENT, GET_TRANSFER_STATUS, MAKE_TRANSFER, SET_SENDER_NULL } from "../types"


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
        dispatch({ type: SELECT_RECEIVER, payload: receiver });
        if (state.selectedSender == null) {
            console.log("Receiver = " + null);
            dispatch({ type: SELECT_RECEIVER, payload: null });
        }
        if (receiver != undefined) {
            console.log("Receiver = " + receiver);
            dispatch({ type: SELECT_RECEIVER, payload: receiver });
        }
    }
    const setSenderNull = () => {
        console.log("Sender = " + null);
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
        console.log("get sender bloodbags")
        console.log(number)
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
        console.log("get receiver bloodbags")
        console.log(numberReceiver)
        dispatch({ type: GET_RECEIVER_BLOODBAGS, payload: numberReceiver });
    }

    const sendBloodBags = (bloodBags) => {
        console.log("Bloodbags = " + bloodBags);
        dispatch({ type: GET_BLOODBAGS_SENT, payload: bloodBags });
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
                selectCategory,
                selectSubCategory,
                selectSender,
                selectReceiver,
                setSenderNull,
                getSenderBloodBags,
                getReceiverBloodBags,
                sendBloodBags
            }}
        >
            {props.children}
        </TransferContext.Provider>
    );
};

export default TransferState;