import { Text, View } from "../components/Themed";
import { StyleSheet, Image } from "react-native";

const Complete = (props: any) => {
  return (
    <View>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />

      <Text style={styles.V1}>{props.Value1}</Text>
      <Text style={styles.V2}>{props.Value2}</Text>
      <Text style={styles.V3}>{props.Value3}</Text>
      <Text style={styles.Total}>Total ${props.Total}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  V1: {
    fontSize: 20,
  },
  V2: {
    fontSize: 20,
  },
  V3: {
    fontSize: 20,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 130,
  },
  Total: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Complete;
