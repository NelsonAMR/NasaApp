import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PostImages from "../PostImage";
import { PostImage } from "../../types";

interface Props {
  lastFiveDays: PostImage[];
}

function LastFiveDays({ lastFiveDays }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Five Days</Text>

      <View style={styles.content}>
        {lastFiveDays &&
          lastFiveDays?.map((item, index) => (
            <PostImages {...item} key={index} />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    merginVertical: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 16,
  },
  content: {},
});

export default LastFiveDays;
