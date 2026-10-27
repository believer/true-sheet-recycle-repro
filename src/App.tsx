import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [mounted, setMounted] = useState(true);
  const sheet = useRef<TrueSheet>(null);

  return (
    <View style={styles.screen}>
      <Button
        title={mounted ? 'Unmount card' : 'Mount card'}
        onPress={() => setMounted(m => !m)}
      />
      <Button title="Present sheet" onPress={() => sheet.current?.present()} />

      {mounted && (
        <View style={styles.card}>
          <Text style={styles.text}>
            This box should stay empty. Red means TrueSheetView is visible.
          </Text>
          <TrueSheet ref={sheet} detents={['auto']} backgroundColor="red">
            <Text style={styles.sheetContent}>Sheet content</Text>
          </TrueSheet>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    gap: 20,
  },
  card: {
    height: 200,
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    color: 'gray',
  },
  sheetContent: {
    padding: 40,
    color: 'white',
  },
});
