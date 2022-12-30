import { Text } from "../components/Themed";
import { StyleSheet, Button, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Video } from "expo-av";
import React from "react";

const Step = (props: any) => {
  const VideoOne = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <Text style={styles.Title}>{props.Title}</Text>
      <Text style={styles.Desc}>{props.Description}</Text>
      <Video
        ref={VideoOne}
        style={{ width: 300, height: 169 }}
        source={{
          uri: props.url,
        }}
        //resizeMode="stretch"
        useNativeControls
        //shouldPlay
        isLooping
        onPlaybackStatusUpdate={setStatus}
      ></Video>
      <Text style={styles.Title}>Options:</Text>
      <Picker
        // style={styles.Picker}
        selectedValue={props.Default}
        onValueChange={(itemValue, itemIndex) => props.Event(itemValue)}
      >
        {props.Values.map((v: any) => (
          <Picker.Item key={v} label={v} value={v} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    // marginVertical: 5,
    textAlign: "center",
  },
  Desc: {
    fontSize: 15,
    marginVertical: 5,
    textAlign: "center",
  },
  Picker: {
    backgroundColor: "#818080",
    width: 150,
    left: 73,
  },
  // video: {
  //   flex: 1,
  //   width: 300,
  //   //height: 5,
  //   // justifyContent: "center",
  //   // alignItems: "center",
  //   //alignSelf: "stretch",
  //   //resizeTo: "contain",
  // },
});

export default Step;
