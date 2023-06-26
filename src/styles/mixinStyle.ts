import { Platform, StyleSheet } from "react-native";

const mixinStyle = StyleSheet.create({
  input: {
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  dialog: {
    margin: 0,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 10,
      },
      web: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    })
  },
  mixinShadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 10,
      },
      web: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    })
  }
});

export { mixinStyle };
