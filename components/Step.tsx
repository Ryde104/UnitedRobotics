import { Text, View } from "../components/Themed";
import { Picker } from '@react-native-picker/picker';

const Step = (props: any) => {
  return (
    <View>
      <Text>{props.Title}</Text>
      <Text>{props.Description}</Text>
      <Text>Video Player</Text>
      <Text>Options:</Text>
      <Picker selectedValue={props.Default}
        onValueChange={(itemValue, itemIndex) =>
          props.Event(itemValue)
        }>
        {props.Values.map((v: any) => <Picker.Item key={v} label={v} value={v} />)}
      </Picker>
    </View>
  );
};

export default Step;
