import { Pressable, PressableProps, Text, View, ViewProps } from "react-native";

import { Navigator, router } from "expo-router";
import { useState } from "react";
import { Screen, ScreenContainer } from "react-native-screens";

export function MediaTabs(props: ViewProps) {
  return (
    <>
      <View
        className="flex flex-row justify-center items-center gap-10 m-5"
        {...props}
      />
      <MediaTabs.Slot />
    </>
  );
}

interface TabBarScreenProps {
  name: string;
  href: string;
}

MediaTabs.Screen = function TabBarScreen({ name, href }: TabBarScreenProps) {
  const onPress: PressableProps["onPress"] = (e) => {
    e.preventDefault();
    router.replace(href);
  };
  return (
    <Pressable onPress={onPress}>
      <Text className="text-md font-bold">{name}</Text>
    </Pressable>
  );
};

MediaTabs.Slot = function TabBarSlot() {
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
        flexShrink: 0,
      }}
    >
      {routes.map((route, index) => {
        const descriptor = descriptors[route.key] as any;
        const { lazy = true, unmountOnBlur } = descriptor.options;
        const isFocused = state.index === index;

        if (!isFocused) {
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
              {
                zIndex: isFocused ? 0 : -1,
                display: isFocused ? "flex" : "none",
                flex: 1,
                flexShrink: 0,
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
