import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faStar,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const cardScale = new Animated.Value(0); // Initialize card scale
  const cardPosition = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: cardPosition.x }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.timing(cardPosition, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          // Handle like action, e.g., move to next card
          cardPosition.setValue({ x: 0, y: 0 });
        });
      } else if (gestureState.dx < -120) {
        Animated.timing(cardPosition, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          // Handle dismiss action, e.g., move to next card
          cardPosition.setValue({ x: 0, y: 0 });
        });
      } else {
        Animated.spring(cardPosition, {
          toValue: { x: 0, y: 0 },
          friction: 5,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={22} color="#404040" />
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>SCOOP UP</Text>
        <FontAwesomeIcon icon={faFilter} size={22} color="#404040" />
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.card,
          {
            transform: [
              { translateX: cardPosition.x },
              { ...cardPosition.getTranslateTransform() },
            ],
          },
        ]}
      >
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.image}
        />
        <View style={styles.distanceBox}>
          <Text style={{ color: "black" }}>50 m</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Jessica Parker, 23
          </Text>
          <Text style={{ fontSize: 16 }}>Professional model</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesomeIcon icon={faHeart} size={24} color="purple" />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/* Bottom Navigation Bar Placeholder */}
      <View
        style={{
          height: 60,
          backgroundColor: "lightgray",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* Placeholder icons, adjust as needed */}
        <FontAwesomeIcon icon={faHeart} size={24} color="purple" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    height: SCREEN_HEIGHT * 0.7,
    width: SCREEN_WIDTH * 0.9,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  distanceBox: {
    position: "absolute",
    bottom: "22%",
    left: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
  },
  info: {
    padding: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
