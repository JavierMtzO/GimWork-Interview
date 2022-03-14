import React, { useState, useContext, useEffect } from 'react'
import TransferContext from "../context/Transfer/TransferContext";
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';


function TransferButton() {
    const transferContext = useContext(TransferContext);
    const { selectedCategory, selectedSubCategory, selectedSender, selectedReceiver, bloodBagsSent, transferIsReady } = useContext(TransferContext);

    useEffect(() => {
        transferContext.getTransferStatus()
    }, [selectedCategory]);
    useEffect(() => {
        transferContext.getTransferStatus()
    }, [selectedSubCategory]);
    useEffect(() => {
        transferContext.getTransferStatus()
    }, [selectedSender]);
    useEffect(() => {
        transferContext.getTransferStatus()
    }, [selectedReceiver]);
    useEffect(() => {
        transferContext.getTransferStatus()
    }, [bloodBagsSent]);

    return (
        <View style={styles.container}>
            <Button
                title="Transfer"
                disabled={!transferIsReady}
                onPress={() => transferContext.makeTransfer()}
            />
        </View>
    );
}

export default TransferButton

const styles = StyleSheet.create({
    container: {
    },
});