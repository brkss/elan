import AntDesign from "@expo/vector-icons/AntDesign";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { TabBarButton } from "./TabBarButton";
import { router } from "expo-router";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setDimensions] = React.useState({
    height: 20,
    width: 100,
  });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);
  const addRecordPositionY = useSharedValue(-20);
  const addRecordOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  const addRecordAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: addRecordPositionY.value },
        { translateX: "-50%" },
      ],
      opacity: addRecordOpacity.value,
    };
  });

  // Trigger pop animation when record route is active
  React.useEffect(() => {
    console.log("routes : ", state.routes[state.index]);
    if (state.routes[state.index].name === "product") {
      addRecordPositionY.value = withTiming(0, { duration: 250 });
      addRecordOpacity.value = withTiming(1, { duration: 300 });
    } else {
      addRecordPositionY.value = withTiming(50, { duration: 200 });
      addRecordOpacity.value = withTiming(0, { duration: 200 });
    }
  }, [state.index]);

  return (
    <>
      <View onLayout={onTabbarLayout} style={styles.tabbar}>
        {state.routes[state.index].name === "product" && (
          <AnimatedPressable
            onPress={() => {
              router.push("/(tabs)/product/add");
            }}
            style={[
              {
                padding: 10,
                backgroundColor: "#242424",
                borderRadius: 30,
                position: "absolute",
                top: -60,
                left: "50%",
                transform: [{ translateX: "-50%" }],
                zIndex: 1000,
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              },
              addRecordAnimatedStyle,
            ]}
          >
            <AntDesign name="scan" size={20} color="white" />

            <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: 500 }}>
              Scan Product
            </Text>
          </AnimatedPressable>
        )}
        <Animated.View
          style={[
            animatedStyle,
            {
              position: "absolute",
              backgroundColor: "#242424",
              borderRadius: 30,
              marginHorizontal: 12,
              height: dimensions.height - 15,
              width: buttonWidth - 25,

              alignSelf: "center",
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

            tabPositionX.value = withSpring(buttonWidth * index, {
              duration: 200,
            });
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            // If long pressing on record tab, navigate to AddRecord
            if (route.name === "record") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              navigation.navigate("Record/AddRecord");
              return;
            }

            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarButton
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name as any}
              color={isFocused ? "#ffffff" : "#ffffff"}
              label={label as string}
            />
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 45,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
});
