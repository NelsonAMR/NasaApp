import React, { FC } from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { PostImage } from "../../types";

const TodayImage: FC<PostImage> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.url }} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.date}</Text>
      <Pressable onPress={() => alert("Ver imagem")} style={styles.button}>
        <Text style={styles.buttonText}>Ver imagen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 32,
  },
  image: {
    width: "100%",
    borderRadius: 32,
    height: 200,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
  },
  date: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    marginTop: 15,
    marginLeft: "auto",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 125,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#2c449d",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TodayImage;
