import React from "react";
import { Text, View } from "react-native";
import {WebView} from 'react-native-webview'
import { Ionicons } from "@expo/vector-icons";

const Location = ({navigation}) => {
return (

    <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: 'https://www.google.com'
          }}
          style={{flex: 1}}
        />
      </View>
	// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	// <Text style={{ color: "#006600", fontSize: 40 }}>User Screen!</Text>
	// <Ionicons name="md-person-circle-outline" size={80} color="#006600" />
	// </View>
);
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       margin: 40
//     },
//     text: {
//       fontSize: 16,
//       margin: 20,
//       marginBottom: 0
//     },
//     bold: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       marginTop: 40
//     },
//     link: {
//       margin: 20,
//       fontSize: 16,
//       color: 'blue',
//       textDecorationLine: 'underline'
//     }
//   });

export default Location;
