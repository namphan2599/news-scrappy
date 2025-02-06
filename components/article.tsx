import { Link } from "expo-router";
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Article({ article }: { article: any }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Linking.openURL(article.url)}>
          <Image style={styles.banner} src={article.urlToImage} />
          <Text style={styles.title}>{article.title}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{article.author}</Text>
            <Text>{article.source.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  banner: {
    maxWidth: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
