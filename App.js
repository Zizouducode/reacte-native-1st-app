import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, Platform, ScrollView, Image } from "react-native";
import Constants from "expo-constants";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="black" />
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#191919",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    height: 500,
    paddingLeft: 10,
  },
  header: {
    backgroundColor: "#212121",
    height: 45,
    justifyContent: "center",
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
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
});
