import React, { useEffect, useContext } from 'react';
import TransferContext from "./context/Transfer/TransferContext";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Dimensions } from 'react-native';

import TransferState from "./context/Transfer/TransferState";

import Groups from './components/Groups'
import Sender from './components/Sender'
import Receiver from './components/Receiver'
import Percentage from './components/Percentage'
import TransferButton from './components/TransferButton'

const totalHeight = Dimensions.get("window").height;
const totalWidth = Dimensions.get("window").width;

export default function App() {
  const transferContext = useContext(TransferContext);

  // transferContext.getData();
  // useEffect(() => {
  //   transferContext.getData();
  // }, []);

  return (
    <TransferState>
      <View style={styles.container}>
        <Groups />
        <Sender />
        <Percentage />
        <Receiver />
        <TransferButton />
        <StatusBar style="auto" />
      </View>
    </TransferState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: totalHeight,
    width: totalWidth,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
