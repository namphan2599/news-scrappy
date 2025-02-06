import Article from "@/components/article";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

const newsapiKey = "3982090dfe0042069f6700717c07071d";

export default function Index() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapiKey}`
      );
      const data = await res.json();

      setNews(data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.centerContainer}>
      <FlatList
        data={news}
        renderItem={({ item }) => <Article article={item} />}
        refreshing={loading}
        onRefresh={() => fetchNews()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
