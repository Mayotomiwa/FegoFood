import { ImageSourcePropType } from "react-native";

export interface Meals {
  id: number;
  name: string;
  price: number;
  info: string;
  img: ImageSourcePropType;
}
