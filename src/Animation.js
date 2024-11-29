import { Button, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

const Animation = () => {
    const width = useSharedValue(100);

  const handlePress = () => {
    width.value = width.value + 50;
  };
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

export default Animation

const styles = StyleSheet.create({})