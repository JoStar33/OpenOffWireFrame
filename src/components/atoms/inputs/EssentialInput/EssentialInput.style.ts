import { StyleSheet } from 'react-native';
export const essentialInputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20
  },
  inputContainer: {
    height: 54,
    borderRadius: 8,
    borderWidth: 1.5
  },
  phoneInputContainer: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  label: {
    alignItems: "flex-start",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#B9B9B9",
    marginBottom: 4
  },
  errorText: {
    color: "red",
  },
});