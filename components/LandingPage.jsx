import { useState } from "react";
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LandingPage = (props) => {
  const { eventName, setEventName } = props;
  const [userInput, setUserInput] = useState("");

  const handleValidation = () => {
    const pattern = /^[a-zA-Z0-9\s]*$/;
    if (!pattern.test(userInput)) {
      Alert.alert(
        "Found invalid characters",
        "Please try again.",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: true }
      );
    }
  };

  const navigation = useNavigation();

  const searchEventByName = () => {
    setEventName(userInput);
    navigation.navigate("Events");
  };

  const clearTextInput = () => {
    setUserInput("");
  };

  function navigateToLocation() {
    navigation.navigate("Location");
  }

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.LandingPage_View}
      scrollEnabled={true}
    >
      <View style={{ paddingBottom: 30, marginTop: 20 }}>
        <Image
          source={require("../images/Landing_Page_Concert.jpeg")}
          style={styles.LandingPage_Image}
        />
      </View>

      <Text style={styles.LandingPage_TextInfo}>
        Welcome to Event Buddy! For all your festival needs, concert needs and
        everything in between. Let's start with a search for events to start
        finding buddies
      </Text>

      <Text style={styles.LandingPage_TextInfo}>Search events by name:</Text>

      <View>
        <TextInput
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
          style={styles.LandingPage_TextInput}
          placeholder="Coachella, Leeds, Evolution ..."
          onBlur={handleValidation}
        />
        <TouchableOpacity style={styles.closeButton} onPress={clearTextInput}>
          <Icon name="close" size={15} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 10 }}>
        <TouchableHighlight
          style={styles.LandingPage_Buttons}
          onPress={searchEventByName}
        >
          <Text style={styles.Landing_Page_Buttons_Text}>
            Search for events
          </Text>
        </TouchableHighlight>
      </View>

      <View style={{ paddingTop: 50 }}>
        <TouchableHighlight
          style={styles.LandingPage_Buttons}
          onPress={navigateToLocation}
        >
          <Text style={styles.Landing_Page_Buttons_Text}>
            ...or see events near you
          </Text>
        </TouchableHighlight>
      </View>

      {/* </View> */}
    </KeyboardAwareScrollView>
  );
};

export default LandingPage;

/*

<View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 20}}>
        <TouchableHighlight  style={styles.LandingPage_Buttons} onPress={searchEventByName} >
          <Text style={styles.Landing_Page_Buttons_Text}>Search for events</Text>
        </TouchableHighlight>
    </View>


*/
