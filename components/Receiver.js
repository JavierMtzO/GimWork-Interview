import React, { useContext, useEffect } from 'react'
import TransferContext from "../context/Transfer/TransferContext";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import getCities from './getCities'

const totalWidth = Dimensions.get("window").width;

const widthWindow = totalWidth / 3;
const widthContainer = totalWidth * .90;

function Receiver() {
    const transferContext = useContext(TransferContext);
    const { selectedCategory, selectedSubCategory, selectedSender, receiverBloodBags, selectedReceiver, bloodBagsSent } = useContext(TransferContext);
    let receivers = getCities(transferContext.selectedSender);
    let addition, recBloodBags, moveBloodBags;
    useEffect(() => {
        transferContext.getReceiverBloodBags(selectedCategory, selectedSubCategory, selectedReceiver)
    }, [selectedReceiver]);
    useEffect(() => {
        transferContext.getReceiverBloodBags(selectedCategory, selectedSubCategory, selectedReceiver)
    }, [selectedCategory]);
    useEffect(() => {
        transferContext.getReceiverBloodBags(selectedCategory, selectedSubCategory, selectedReceiver)
    }, [selectedSubCategory]);
    useEffect(() => {
        recBloodBags = receiverBloodBags
        moveBloodBags = bloodBagsSent
        addition = recBloodBags - moveBloodBags;
    }, [bloodBagsSent]);

    recBloodBags = receiverBloodBags
    moveBloodBags = bloodBagsSent
    addition = recBloodBags + moveBloodBags;


    return (

        < View style={styles.container} >
            <Text>To</Text>
            <View style={styles.select}>
                {selectedSender ? (
                    <View>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: "City" }}
                            onValueChange={(receiver) => transferContext.selectReceiver(receiver)}
                            items={receivers}
                        />
                    </View>
                ) : (
                        <Text>No Sender selected</Text>
                    )}
            </View>
            {selectedCategory && selectedSubCategory && selectedReceiver ? (
                < View style={styles.text}>
                    <Text style={styles.text}> {addition} </Text>
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

export default Receiver

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
