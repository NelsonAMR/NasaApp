import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { PostImageRoute } from "../../types";
import Header from "../../components/Header";

function Details() {
  const { params } = useRoute<PostImageRoute>();

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image
          source={{ uri: params.url }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.date}>{params.date}</Text>
        <Text style={styles.explanation}>{params.explanation}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "rgb(20, 39, 110)",
  },
  content: {
    backgroundColor: "#2c449d",
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 200,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    color: "white",
    fontSize: 14,
  },
  explanation: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
  },
});

export default Details;
