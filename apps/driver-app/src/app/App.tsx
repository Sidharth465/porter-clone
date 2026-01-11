import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { PrimaryButton, StatusBadge } from '@porter-clone/shared-ui';
import { useOrderStore } from '@porter-clone/data-access';

export const App = () => {
  // Using the SAME shared store, but different actions
  const { status, acceptRide, reset } = useOrderStore();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E7EB',
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Driver App 🚚
      </Text>

      <StatusBadge status={status} />

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 10 }}>New Request Nearby!</Text>

        {status !== 'ACCEPTED' ? (
          <PrimaryButton title="Accept Order" onPress={acceptRide} />
        ) : (
          <PrimaryButton title="Complete Job" onPress={reset} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
