import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

// 1. Import Shared UI & Logic (The Monorepo Magic)
import { PrimaryButton, StatusBadge } from '@porter-clone/shared-ui';
import { useOrderStore } from '@porter-clone/data-access';

export const App = () => {
  // 2. Hook into the Shared Store
  const { status, price, requestRide, reset } = useOrderStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>User App 👤</Text>
        <Text style={styles.subtitle}>Book a Mini Truck</Text>

        {/* Shared UI Component */}
        <StatusBadge status={status} />

        {/* Price Logic (Only shows when price > 0) */}
        {price > 0 && (
          <Text style={styles.price}>
            Estimated Price:{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{price}</Text>
          </Text>
        )}

        <View style={styles.buttonContainer}>
          {status === 'IDLE' ? (
            <PrimaryButton title="Book Porter Now" onPress={requestRide} />
          ) : (
            <PrimaryButton
              title={status === 'COMPLETED' ? 'Book Another' : 'Cancel Ride'}
              onPress={reset}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 30,
  },
  price: {
    fontSize: 20,
    color: '#059669',
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#D1FAE5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    maxWidth: 300,
  },
});

export default App;
