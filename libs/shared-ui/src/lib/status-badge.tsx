import { View, Text, StyleSheet } from 'react-native';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  // Logic to choose color based on status
  const getBackgroundColor = () => {
    if (status === 'SEARCHING') return '#F59E0B'; // Orange
    if (status === 'ACCEPTED') return '#10B981'; // Green
    return '#6B7280'; // Grey
  };

  return (
    <View style={[styles.badge, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
