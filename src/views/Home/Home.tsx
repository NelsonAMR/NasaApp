import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { format, sub } from "date-fns";

import Header from "../../components/Header";
import TodayImage from "../../components/TodayImage";
import LastFiveDays from "../../components/LastFiveDays";
import getData from "../../utils/fetch";
import { PostImage } from "../../types";

function Home() {
  const [todayImage, setTodayImage] = useState<PostImage>({});
  const [lastFiveDays, setlastFiveDays] = useState<PostImage[]>([]);

  const loadTodayImage = async () => {
    try {
      const data = await getData();
      setTodayImage(data);
      return todayImage;
    } catch (error) {
      console.error(error);
      setTodayImage({});
    }
  };

  const loadLastFiveDayImages = async () => {
    try {
      const date = new Date();
      const todayDate = format(date, "yyyy-MM-dd");
      const lastFiveDays = format(sub(date, { days: 5 }), "yyyy-MM-dd");

      const data = await getData(
        `&start_date=${lastFiveDays}&end_date=${todayDate}`
      );

      setlastFiveDays(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTodayImage();
    loadLastFiveDayImages();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      <LastFiveDays lastFiveDays={lastFiveDays} />
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
});

export default Home;
