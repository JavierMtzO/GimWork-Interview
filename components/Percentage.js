import React, { useState, useContext, useEffect } from 'react'
import TransferContext from "../context/Transfer/TransferContext";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';


function Percentage() {
    const { senderBloodBags, selectedCategory, selectedSubCategory, selectedSender, selectedReceiver } = useContext(TransferContext);
    const transferContext = useContext(TransferContext);
    const [range, setRange] = useState(0)
    useEffect(() => {
        transferContext.sendBloodBags(Math.floor(range))
    }, [range]);
    useEffect(() => {
        transferContext.sendBloodBags(0)
    }, [selectedCategory]);
    useEffect(() => {
        transferContext.sendBloodBags(0)
    }, [selectedSubCategory]);
    useEffect(() => {
        transferContext.sendBloodBags(0)
    }, [selectedSender]);
    useEffect(() => {
        transferContext.sendBloodBags(0)
    }, [selectedReceiver]);
    return (
        <View style={styles.container}>
            {selectedCategory && selectedSubCategory && selectedSender && selectedReceiver ? (
                <View>
                    <Text>Transfer {Math.floor(range)} blood bags</Text>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={senderBloodBags}
                        minimumTrackTintColor="gray"
                        maximumTrackTintColor="#000000"
                        onValueChange={(value) => setRange(value)}
                    />
                </View>
            ) : (
                    <View>

                    </View>
                )}
        </View>
    );
}

export default Percentage

const styles = StyleSheet.create({
    container: {
    },
});