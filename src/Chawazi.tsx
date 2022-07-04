import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';
// @ts-ignore
const Chawazi = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  // @ts-ignore

  const panResponder = useRef(
    // @ts-ignore

    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          // @ts-ignore

          x: pan.x._value,
          // @ts-ignore

          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;
  return (
    <>
      <View>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    </>
  );
};
// @ts-ignore
const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
  },
});
export default Chawazi;
