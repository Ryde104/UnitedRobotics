import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
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
  const [Step3Value, setStep3Value] = React.useState("Opt3");

  function RenderPage() {
    if (m_nPage == -1) return setPage(m_nPage + 1), (<View></View>);
    if (m_nPage == 0)
      return (
        <Step
          Title="Step 1"
          Description="This is the desc for step 1"
          Default={Step1Value}
          Event={setStep1Value}
          Values={Step1Values}
          url="https://mmmmanager.blob.core.windows.net/step/1.MP4"
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
          url="https://mmmmanager.blob.core.windows.net/step/2.MP4"
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
          url="https://mmmmanager.blob.core.windows.net/step/3.MP4"
        ></Step>
      );
    else if (m_nPage == 3)
      return (
        <Complete
          Value1={Step1Value}
          Value2={Step2Value}
          Value3={Step3Value}
          Total={Total()}
        ></Complete>
      );
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
        m_nTotal += 1;
        break;
      case "Opt2":
        m_nTotal += 2;
        break;
      case "Opt3":
        m_nTotal += 3;
        break;
    }

    switch (Step2Value) {
      case "OptA":
        m_nTotal += 10;
        break;
      case "OptB":
        m_nTotal += 20;
        break;
      case "OptC":
        m_nTotal += 30;
        break;
    }
    switch (Step3Value) {
      case "Opt1":
        m_nTotal += 100;
        break;
      case "Opt2":
        m_nTotal += 200;
        break;
      case "Opt3":
        m_nTotal += 300;
        break;
    }

    return m_nTotal;
  }

  return (
    <View style={styles.container}>
      {RenderPage()}
      <Pressable style={styles.buttonLeft} onPress={Back}>
        <Text style={styles.text}>Back</Text>
      </Pressable>

      <Pressable style={styles.buttonRight} onPress={Next}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
  buttonLeft: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#0f2550",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  buttonRight: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#0f2550",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 130,
    //alignItems: "flex-start",
    // justifyContent: "center",
  },
});
