// //import * as React from "react"; // is it in use?
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Avatar, Card, Badge, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
// import MessageBoard from "./MessageBoard";

// import { Card, Badge, Button, Icon, View } from '@rneui/themed';
// //import { Badge, View } from "react-native-elements";
// //import styles from "../styles";

function EventCard({
  //sorted by date ascending by default?
  event_title,
  event_place,
  event_genre,
  event_date,
  event_img_URL_preview,
  event_buddies, //from our 'users' DB
  event_talks, //from our 'messages' DB
}) {
  const navigation = useNavigation();

  const goToMessageBoard = () => {
    navigation.navigate("MessageBoard");
  };

  return (
    <Card>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{event_title}</Text>
          <Text style={styles.location}>{event_place}</Text>
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Card.Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: event_img_URL_preview }}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>Starts:&nbsp;</Text>
              <Text style={styles.genre}>{event_date}</Text>
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>Event genre: </Text>
              <Text style={styles.genre}>{event_genre}</Text>
            </View>
            <View></View>
            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                Buddies going: {event_buddies}
              </Text>
              {/* <Text style={styles.genre}>{event_buddies}</Text>  */}
              <Button style={styles.button}>Join the event</Button>
            </View>

            <View style={styles.buddiesContainer}>
              <Text style={styles.genreLabel}>
                Talks about event: {event_talks}
              </Text>
              {/* <Text style={styles.genre}>{event_talks}</Text> */}
              <Button style={styles.button} onPress={goToMessageBoard}>
                Message board
              </Button>
              {/* <TouchableHighlight  style={styles.button} onPress={() => {setCurrentUserTags(`${currentUserTags} #${NewUserTag} `)}}>
            <Text >Message board</Text>
          </TouchableHighlight> */}
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}
// to highlight changes: //, {{backgroundColor: 'red', margin: 50}}
// position: "absolute" ?

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    //paddingVertical: 15,
    justifyContent: "space-between",
  },
  titleContainer: {
    //flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
    color: "gray",
  },
  bodyContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "30%",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 9,
  //   // paddingHorizontal: 25,
  //   borderRadius: 3,
  //   elevation: 3,
  //   backgroundColor: '#ec8e2f',
  //   width: 130
  // },
});

// --------------2-----------------
//   mainContainer: {
//     flexDirection: 'column',
//     flex: 1,
//     //margin: 10,
//     borderRadius: 10,
//     // overflow: 'hidden',
//     // flexDirection: 'row-reverse',
//     // justifyContent: 'space-between',
//   },
//   titleContainer: {
//    // fontSize: 14,
//     fontWeight: 'bold',
//     //marginBottom: 1,
//   },
//   bodyContainer: {
//     flexDirection: 'row',
//     flex: 1,
//     //margin: 10,
//     borderRadius: 10,
//     // overflow: 'hidden',
//     // flexDirection: 'row-reverse',
//     // justifyContent: 'space-between',
//     justifyContent: 'space-between',
//   },
//   title: {
//     fontSize: 14,
//    // fontWeight: 'bold',
//     //marginBottom: 10,
//   },
//   location: {
//     fontSize: 14,
//    // fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   imageContainer: {
//     //width: '40%',
//    // flexDirection: 'row',
//     justifyContent: 'space-between',

//   },
//   image: {
//     width: '30%',
//     height: 150,

//   },
//   textContainer: {
//     width:  'auto',
//     flex: 1,
//     padding: 10,
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//     alignItems: 'left',
//   },
//     buddiesContainer: {
//     // fontSize: 14,
//      fontWeight: 'bold',
//      //marginBottom: 1,

//    },

//   location: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   genreContainer: {
//     flexDirection: 'row',
//     alignItems: 'left',
//     marginBottom: 5,
//   },
//   genreLabel: {
//     fontWeight: 'bold',
//     marginRight: 5,
//   },
//   genre: {
//     fontSize: 16,
//   },
//   attendeesContainer: {
//     flexDirection: 'row-reverse',
//     alignItems: 'left',
//     marginBottom: 5,
//   },
//   attendeesLabel: {
//     fontWeight: 'bold',
//     marginRight: 5,
//   },

//   detailsButton: {
//     margin: 10,
//    // flexDirection: 'row-reverse',
//    //alignItems: 'left',
//   },

//   button: {
//     marginLeft: 10,
//     flexDirection: 'row-reverse',
//     alignItems: 'left',
//   },
//   messagesContainer: {
//     flexDirection: 'row',
//     alignItems: 'left',
//     marginBottom: 5,
//   },
//   messagesLabel: {
//     fontWeight: 'bold',
//     marginRight: 5,
//   },

// -----------1----------
// //     container: {
// //       flex: 1,
// //     flexDirection: 'row',
// //         justifyContent: 'center',
// //         alignItems: 'stretch',
// //         marginRight: 10,
// //     },
// //     // fonts: {
// //     //   marginBottom: 8,
// //     // },

// //     button: {
// //        // flexDirection: 'row',
// //         borderRadius: 1,
// //         marginLeft: 10,
// //       },
// //     image: {
// //       width: 70,
// //       height: 70,
// //       marginRight: 10,
// //     },

// //     });

export default EventCard;