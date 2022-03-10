import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

const totalWidth = Dimensions.get("window").width;

const widthWindow = totalWidth / 3;

function Percentage() {
    const [range, setRange] = useState(0)
    return (
        <View style={styles.container}>
            <Text>Transfer {Math.floor(range)} blood bags</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={7}
                minimumTrackTintColor="gray"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setRange(value)}
            />
        </View>
    );
}

export default Percentage

const styles = StyleSheet.create({
    container: {
    },
});