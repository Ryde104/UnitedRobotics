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
      <Text>{props.Title}</Text>
      <Text>{props.Description}</Text>
      <Text>Video Player</Text>
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

      <Text>Options:</Text>
      <Picker
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
