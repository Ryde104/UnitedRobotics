import { Text, View } from "../components/Themed";

const Step = (props: any) => {
  // return <div>

  // <p>Title: {props.Title}</p>

  // {/* <p>value: {props.Default}</p> */}

  // {/* <select value={props.Default} onChange={props.Event}>
  //     {props.Values.map((v: any) => <option value={v}>{v}</option>)}
  //  </select> */}

  // </div>

  return (
    <View>
      <Text>{props.Title}</Text>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Step;
