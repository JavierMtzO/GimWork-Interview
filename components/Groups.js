import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const totalWidth = Dimensions.get("window").width;
const widthWindow = totalWidth / 3;

function Groups() {
    return (
        <View style={styles.container}>
            <View style={styles.select}>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "Category" }}
                    onValueChange={(category) => console.log(category)}
                    items={[
                        { label: "A", value: "A" },
                        { label: "B", value: "B" },
                        { label: "O", value: "O" },
                        { label: "AB", value: "AB" },
                    ]}
                />
            </View>
            <View style={styles.select}>
                <RNPickerSelect
                    placeholder={{ label: "Subcategory" }}
                    onValueChange={(subcategory) => console.log(subcategory)}
                    items={[
                        { label: "+", value: "plus" },
                        { label: "-", value: "minus" },
                    ]}
                />
            </View>
        </View>
    );
}

export default Groups

const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        width: totalWidth,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    select: {
        width: widthWindow,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
    },
});
