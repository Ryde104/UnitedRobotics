import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Complete from "../components/Compete";

import EditScreenInfo from "../components/EditScreenInfo";
import Step from "../components/Step";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const [m_nPage, setPage] = React.useState(0);

  const Step1Values = ["Opt1", "Opt2", "Opt3"];
  const [Step1Value, setStep1Value] = React.useState("Opt1");

  const Step2Values = ["OptA", "OptB", "OptC"];
  const [Step2Value, setStep2Value] = React.useState("OptB");

  const Step3Values = ["Opt1", "Opt2", "Opt3"];
  const [Step3Value, setStep3Value] = React.useState("Opt1");

  function RenderPage() {
    if (m_nPage == 0)
      return (
        <Step
          Title="Step 1"
          Description="This is the desc for step 1"
          Default={Step1Value}
          Event={setStep1Value}
          Values={Step1Values}
          url="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        ></Step>
      );
    else if (m_nPage == 1)
      return (
        <Step
          Title="Step 2"
          Description="This is the desc for step 2"
          Default={Step2Value}
          Event={setStep2Value}
          Values={Step2Values}
          url="https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
        ></Step>
      );
    else if (m_nPage == 2)
      return (
        <Step
          Title="Step 3"
          Description="This is the desc for step 3"
          Default={Step3Value}
          Event={setStep3Value}
          Values={Step3Values}
          url="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        ></Step>
      );
    else if (m_nPage == 3) return <Complete Value1={Step1Value}></Complete>;
  }

  function Back() {
    setPage(m_nPage - 1);
  }

  function Next() {
    setPage(m_nPage + 1);
  }
  function Total() {
    let m_nTotal = 0;

    switch (Step1Value) {
      case "Opt1":
        m_nTotal += 5;
        break;
      case "Opt2":
        m_nTotal += 15;
        break;
      case "Opt3":
        m_nTotal += 25;
        break;
    }

    switch (Step2Value) {
      case "OptA":
        m_nTotal += 5;
        break;
      case "OptB":
        m_nTotal += 15;
        break;
      case "OptC":
        m_nTotal += 25;
        break;
    }
    switch (Step3Value) {
      case "Opt1":
        m_nTotal += 5;
        break;
      case "Opt2":
        m_nTotal += 15;
        break;
      case "Opt3":
        m_nTotal += 25;
        break;
    }

    return <Text>Total: {m_nTotal}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote</Text>

      {RenderPage()}
      {Total()}

      <Pressable style={styles.button} onPress={Back}>
        <Text style={styles.text}>Back</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={Next}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    width: 225,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
