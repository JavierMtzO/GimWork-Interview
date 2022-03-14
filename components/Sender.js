import React, { useContext, useEffect } from 'react'
import TransferContext from "../context/Transfer/TransferContext";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const totalWidth = Dimensions.get("window").width;

const widthWindow = totalWidth / 3;
const widthContainer = totalWidth * .90;

function Sender() {
    const transferContext = useContext(TransferContext);
    const { selectedCategory, selectedSubCategory, selectedSender, senderBloodBags, bloodBagsSent } = useContext(TransferContext);
    let substraction, senBloodBags, moveBloodBags;
    useEffect(() => {
        transferContext.getSenderBloodBags(selectedCategory, selectedSubCategory, selectedSender)
    }, [selectedSender]);
    useEffect(() => {
        transferContext.getSenderBloodBags(selectedCategory, selectedSubCategory, selectedSender)
    }, [selectedCategory]);
    useEffect(() => {
        transferContext.getSenderBloodBags(selectedCategory, selectedSubCategory, selectedSender)
    }, [selectedSubCategory]);
    useEffect(() => {
        senBloodBags = senderBloodBags
        moveBloodBags = bloodBagsSent
        substraction = senBloodBags - moveBloodBags;
    }, [bloodBagsSent]);

    senBloodBags = senderBloodBags
    moveBloodBags = bloodBagsSent
    substraction = senBloodBags - moveBloodBags;

    return (
        <View style={styles.container}>
            <Text>From</Text>
            <View style={styles.select}>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "City" }}
                    onValueChange={(sender) => transferContext.selectSender(sender)}
                    items={[
                        { label: "Paris", value: "Paris" },
                        { label: "Marseille", value: "Marseille" },
                        { label: "Nice", value: "Nice" },
                        { label: "Lille", value: "Lille" },
                    ]}
                />
            </View>
            {/* bloodBagsReceived = getBloodBags(selectedCategory, selectedSubCategory, selectedSender) */}
            {selectedCategory && selectedSubCategory && selectedSender ? (
                < View style={styles.text}>
                    <Text style={styles.text}> {substraction} </Text>
                </View>
            ) : (
                    <View style={styles.text}>
                        <Text style={styles.text}> 0 </Text>
                    </View>
                )
            }
        </View >
    );
}

export default Sender

const styles = StyleSheet.create({
    container: {
        width: widthContainer,
        backgroundColor: '#E7E9EB',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
    },
    select: {
        backgroundColor: 'white',
        width: widthWindow,
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    text: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 5,
        width: widthWindow,
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
});
