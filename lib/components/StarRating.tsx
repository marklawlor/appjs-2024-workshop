import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Rating({
  average,
  size = 30,
}: {
  average: number;
  size?: number;
}) {
  const rate = average / 2;

  return (
    <Text className="flex text-blue-500">
      {[...Array(5)].map((_, index) =>
        rate % 1 !== 0 && index === Math.floor(rate) ? (
          <MaterialIcons key={index} name="star-half" size={size} />
        ) : index < rate ? (
          <MaterialIcons key={index} name="star" size={size} />
        ) : (
          <MaterialIcons key={index} name="star-border" size={size} />
        )
      )}
    </Text>
  );
}
