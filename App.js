import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Dimensions } from 'react-native';

import TransferState from "./context/Transfer/TransferState";

import Groups from './components/Groups'
import Sender from './components/Sender'
import Receiver from './components/Receiver'
import Percentage from './components/Percentage'

const totalHeight = Dimensions.get("window").height;
const totalWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <TransferState>
      <View style={styles.container}>
        <Groups />
        <Sender />
        <Percentage />
        <Receiver />
        <Button
          title="Transfer"
        />
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
