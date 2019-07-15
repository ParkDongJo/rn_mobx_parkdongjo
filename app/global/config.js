import { 
  Animated,
  Easing,
} from "react-native";

let MoveExpand = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 1],
    });
  
    const scaleY = position.interpolate({
      inputRange,
      outputRange: ([0, 1, 1]),
    });
  
    return {
      opacity,
      transform: [
        { scaleY }
      ]
    };
}
  
export const TransitionConfiguration = () => {
    return {
      transitionSpec: {
        duration: 200,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: (sceneProps) => {
        const { position, scene } = sceneProps;
        const { index, route } = scene
        const params = route.params || {}; // <- That's new
        const transition = params.transition || 'default'; // <- That's new
        return {
          default: MoveExpand(index, position),
        }[transition];
      },
    }
}