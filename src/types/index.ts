import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type RootStack = {
  Home: undefined;
  Details: PostImage;
};

export type PostImageNav = NativeStackNavigationProp<RootStack, "Details">;

export type PostImageRoute = NativeStackScreenProps<
  RootStack,
  "Details"
>["route"];
