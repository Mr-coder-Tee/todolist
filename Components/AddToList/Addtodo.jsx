import React ,{useState} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { icons, COLORS, FONTS } from "../../consts";
import SwitchSelector from "react-native-switch-selector";
import DatePicker from 'react-native-datepicker'

const option = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

const Addtodo = () => {


    const [optionpicker,setOption]=useState('High')
    const [date, setDate] = useState(new Date())



  const LeftComp = () => 
  (
    <View>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: COLORS.white }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeareaview}>
      <Header
        elevated={true}
        centerComponent={{
          text: "Add task",
          style: { color: COLORS.white, ...FONTS.h2, fontWeight: "bold" },
        }}
        containerStyle={{
          backgroundColor: COLORS.primary,
          alignItems: "center",
        }}
        leftComponent={<LeftComp />}
      />
      <View style={styles.container}>
        <Text style={{...FONTS.h4,fontWeight:'bold'}}>Priority</Text>
        <SwitchSelector
          options={option}
          initial={0}
          selectedColor={COLORS.white}
          buttonColor={COLORS.primary}
          borderColor={COLORS.secondary}
          hasPadding
          onPress={(value)=>setOption(value)}
        />
       {/* <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container:{
      padding:10,
  }
});

export default Addtodo;
