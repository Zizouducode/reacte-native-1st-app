import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import logo from "./assets/logo.png";
import film from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import mackenzie from "./assets/mackenzie.jpg";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="" backgroundColor="white" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Interstellar</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>2014</Text>
            <Text style={styles.details}>PG-13</Text>
            <Text style={styles.details}>2h 49min</Text>
            <Text style={styles.details}>Adventure, Drama, Sci-Fi</Text>
          </View>
        </View>
        <View style={styles.moovie}>
          <Image source={film} style={styles.Imagefilm}></Image>
          <View style={styles.moovieDescritpionContainer}>
            <Text style={styles.moovieDescritpion}>
              A team of explorers travel through a wormhole in spance in an
              attempt to ensure humanity's survival.
            </Text>
            <TouchableHighlight
              style={styles.buttonAddWatchList}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.reviewsContainer}>
          <View style={styles.reviewContainer}>
            <FontAwesome name="star" size={24} color="#E6B91E" />
            <Text style={styles.reviews}>8.6/10</Text>
            <Text style={styles.reviewsNumber}>1.1M</Text>
          </View>
          <View style={styles.reviewContainer}>
            <FontAwesome name="star-o" size={24} color="white" />
            <Text style={styles.reviews}>RATE THIS</Text>
          </View>
          <View style={styles.reviewContainer}>
            <View style={styles.metaScore}>
              <Text style={styles.metaScoreNumber}>74</Text>
            </View>
            <Text style={styles.reviews}>Metascore</Text>
            <Text style={styles.reviewsNumber}>46 critic reviews</Text>
          </View>
        </View>
        <View style={styles.lineBreak}></View>
        <View style={styles.actorsContainer}>
          <View style={styles.actorHeader}>
            <Text style={styles.actorTitle}>Top Billed Cast</Text>
            <Text style={styles.actorSeeAll}>SEL ALL</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.actorsCardContainer}>
              <View style={styles.actorContainer}>
                <Image source={matthew} style={styles.actorImage}></Image>
                <View style={styles.actorNameContainer}>
                  <Text style={styles.actorName} numberOfLines={1}>
                    Matthew McConaughey
                  </Text>
                  <Text style={styles.actorRole}>Cooper</Text>
                </View>
              </View>
              <View style={styles.actorContainer}>
                <Image source={anne} style={styles.actorImage}></Image>
                <View style={styles.actorNameContainer}>
                  <Text style={styles.actorName} numberOfLines={1}>
                    Anne Hataway
                  </Text>
                  <Text style={styles.actorRole}>Band</Text>
                </View>
              </View>
              <View style={styles.actorContainer}>
                <Image source={jessica} style={styles.actorImage}></Image>
                <View style={styles.actorNameContainer}>
                  <Text style={styles.actorName} numberOfLines={1}>
                    Jessica Jesaispas
                  </Text>
                  <Text style={styles.actorRole}>Murph</Text>
                </View>
              </View>
              <View style={styles.actorContainer}>
                <Image source={mackenzie} style={styles.actorImage}></Image>
                <View style={styles.actorNameContainer}>
                  <Text style={styles.actorName} numberOfLines={1}>
                    Mackenzie Jesaispasaussi
                  </Text>
                  <Text style={styles.actorRole}>Hello</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View>
            <View style={styles.creditsContainer}>
              <Text style={styles.credits}>Director</Text>
              <Text style={styles.creditsName}>Christopher Nolan</Text>
            </View>
            <View style={styles.creditsContainer}>
              <Text style={styles.credits}>Writers</Text>
              <Text style={styles.creditsName}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#212121",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    height: Dimensions.get("window").height,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    backgroundColor: "#393939",
    height: 45,
    justifyContent: "center",
    marginLeft: -10,
    marginRight: -10,
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  titleContainer: {
    height: 100,
  },

  title: {
    color: "white",
    fontSize: 30,
    marginTop: 8,
    marginBottom: 10,
  },

  detailsContainer: {
    flexDirection: "row",
  },

  details: {
    color: "lightgrey",
    fontWeight: "500",
    marginRight: 8,
    fontSize: 12,
  },

  moovie: {
    flexDirection: "row",
  },

  Imagefilm: {
    height: 150,
    width: 120,
    resizeMode: "cover",
    flex: 2,
    backgroundColor: "blue",
  },

  moovieDescritpionContainer: {
    padding: 10,
    width: "100%",
    flex: 5,
  },

  moovieDescritpion: {
    color: "white",
    fontWeight: "500",
    // backgroundColor: "red",
  },

  buttonAddWatchList: {
    backgroundColor: "#0277BD",
    width: "100%",
    marginTop: 20,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  reviewsContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
    marginBottom: 25,
  },

  reviewContainer: {
    alignItems: "center",
  },

  reviews: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
    marginTop: 10,
  },

  reviewsNumber: {
    color: "lightgrey",
    fontSize: 12,
  },

  metaScore: {
    height: 20,
    width: 20,
    backgroundColor: "#62C74F",
    justifyContent: "center",
    alignItems: "center",
  },

  metaScoreNumber: {
    color: "white",
  },

  lineBreak: {
    backgroundColor: "#191919",
    height: 15,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: 20,
  },

  actorHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actorTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },

  actorSeeAll: {
    color: "#0277BD",
    fontWeight: "700",
    fontSize: 12,
  },

  actorsCardContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },

  actorContainer: {
    marginTop: 20,
    width: 140,
    marginRight: 10,
  },

  actorImage: {
    height: 180,
    width: 140,
    resizeMode: "cover",
  },

  actorNameContainer: {
    backgroundColor: "#2A2A2A",
    height: 50,
    padding: 10,
  },

  actorName: {
    color: "white",
    fontWeight: "500",
  },

  actorRole: {
    color: "lightgrey",
    fontWeight: "500",
    fontSize: 12,
  },

  creditsContainer: {
    marginBottom: 20,
  },

  credits: {
    color: "white",
    fontWeight: "600",
    lineHeight: 25,
  },
  creditsName: {
    color: "lightgrey",
    fontWeight: "600",
    fontSize: 12,
  },
});
