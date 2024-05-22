import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";

import { Navigator, router } from "expo-router";
import { ComponentProps, useState } from "react";
import { Screen, ScreenContainer } from "react-native-screens";

export function Tabs(props: ViewProps) {
  return (
    <View
      className="flex sm:flex-row flex-col-reverse"
      style={StyleSheet.absoluteFill}
    >
      <View
        className="pt-5 pb-8 gap-10 sm:w-20 flex-col max-sm:flex-row items-center max-sm:justify-center max-sm:border-t border-stone-500 lg:border-r"
        {...props}
      />
      <Tabs.Slot />
    </View>
  );
}

interface TabBarScreenProps {
  name: string;
  href: string;
  icon: ComponentProps<typeof MaterialIcons>["name"];
}

Tabs.Screen = function TabBarScreen({ name, icon, href }: TabBarScreenProps) {
  const context = Navigator.useContext();

  const { state, navigation } = context;

  const route = state.routes.find((route, i) => {
    return route.name === name;
  });

  if (!route) {
    console.warn(
      `Could not find route with name: ${name}. Options: ${state.routes
        .map((r) => r.name)
        .join(", ")}`
    );

    return null;
  }

  const onPress: PressableProps["onPress"] = (e) => {
    // Trigger the navigator
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    }) as any;

    if (!event.defaultPrevented) {
      e.preventDefault();
      router.replace(href);
    }
  };
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name={icon} size={30} color="black" />
    </Pressable>
  );
};

Tabs.Slot = function TabBarSlot() {
  const { state, descriptors } = Navigator.useContext();
  const focusedRouteKey = state.routes[state.index].key;
  const [loaded, setLoaded] = useState([focusedRouteKey]);

  if (!loaded.includes(focusedRouteKey)) {
    setLoaded([...loaded, focusedRouteKey]);
  }

  const { routes } = state;

  return (
    <ScreenContainer
      enabled={true}
      hasTwoStates
      style={{
        flex: 1,
        overflow: "hidden",
      }}
    >
      {routes.map((route, index) => {
        const descriptor = descriptors[route.key] as any;
        const { lazy = true, unmountOnBlur } = descriptor.options;
        const isFocused = state.index === index;

        if (unmountOnBlur && !isFocused) {
          return null;
        }

        if (lazy && !loaded.includes(route.key) && !isFocused) {
          // Don't render a lazy screen if we've never navigated to it
          return null;
        }

        return (
          <Screen
            activityState={isFocused ? 2 : 0}
            key={route.key}
            style={[
              StyleSheet.absoluteFill,
              {
                flex: 1,
                flexShrink: 0,
                zIndex: isFocused ? 0 : -1,
              },
            ]}
            accessibilityElementsHidden={!isFocused}
            importantForAccessibility={
              isFocused ? "auto" : "no-hide-descendants"
            }
            enabled={true}
            freezeOnBlur={descriptor.options.freezeOnBlur}
          >
            {descriptor.render()}
          </Screen>
        );
      })}
    </ScreenContainer>
  );
};
