import { cssInterop } from "nativewind";
import "../global.css";

import { Image } from "expo-image";

cssInterop(Image, {
  className: "style",
});
