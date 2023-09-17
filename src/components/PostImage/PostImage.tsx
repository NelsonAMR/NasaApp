import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PostImage, PostImageNav } from "../../types";
import { useNavigation } from "@react-navigation/native";

function PostImages(props: PostImage) {
  const { navigate } = useNavigation<PostImageNav>();
  const handlePress = () => navigate("Details", props);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.date}</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver imagen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(52, 74, 155)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: "white",
  },
  button: {
    backgroundColor: "white",
    height: 40,
    width: 110,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginStart: "auto",
    marginTop: 12,
  },
  buttonText: {
    color: "rgb(52, 74, 155)",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PostImages;
