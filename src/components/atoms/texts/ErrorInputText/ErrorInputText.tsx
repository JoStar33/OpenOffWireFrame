import { Text } from "react-native";
import { errorInputTextStyles } from "./ErrorInputText.style";

interface Props {
  validation: (value: string) => string | undefined;
  value: string;
  width?: number;
}

const ErrorInputText = ({validation, value, width = 350}: Props) => {
  return (
    <>
      {validation(value) ? (
        <Text style={{...errorInputTextStyles.text, width: width}}>
          {validation(value)}
        </Text>
      ) : null}
    </>
  );
};

export default ErrorInputText;
