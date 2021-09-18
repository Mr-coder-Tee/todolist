import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../consts/index";
import Card from "./card";


const Todolist = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", ...FONTS.h1 }}>To do list</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.primary,
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.white,
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "rgba(0,0,0,.3)",
            }}
          >
            <Image
              source={icons.deleteall}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10,}}>
          <Text style={{textAlign:'center',...FONTS.h3,fontWeight:'bold'}}>Today</Text>
          <Text style={{textAlign:'center',...FONTS.h4,fontWeight:'bold'}}>Mon 3 Aug</Text>
      </View>

      <Card/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 10,
  },
});

export default Todolist;
