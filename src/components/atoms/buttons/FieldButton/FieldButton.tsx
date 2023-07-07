import { Field } from "types/apps/group";
import ColorButton from "../ColorButton/ColorButton";

interface Props {
  field: Field;
  handlePress: (field: Field) => void;
}

const FieldButton = ({ field, handlePress }: Props) => {
  return (
    <>
      {field.isActive ? (
        <ColorButton
          label={field.label}
          color="#FFF"
          marginRight={15}
          marginBottom={15}
          backgroundColor={"#9B84F8"}
          handleClick={() => handlePress(field)}
        />
      ) : (
        <ColorButton
          label={field.label}
          marginRight={15}
          marginBottom={15}
          color={"#9B84F8"}
          borderColor="#9B84F8"
          backgroundColor={"transparent"}
          handleClick={() => handlePress(field)}
        />
      )}
    </>
  );
};

export default FieldButton;
