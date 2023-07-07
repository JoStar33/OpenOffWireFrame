import FieldButton from "components/atoms/buttons/FieldButton/FieldButton";
import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import { Field } from "types/apps/group";
import { fieldButtonGroupStyles } from "./FieldButtonGroup.style";

interface Props {
  fields: Field[];
  setFields: Dispatch<SetStateAction<Field[]>>;
}

const FieldButtonGroup = ({ fields, setFields }: Props) => {
  const handleFieldActive = (field: Field) => {
    setFields(
      fields.map((mappingField) => {
        if (mappingField.value === field.value) {
          mappingField.isActive = !mappingField.isActive;
        }
        return mappingField;
      })
    );
  };
  return (
    <View style={fieldButtonGroupStyles.container}>
      <Text style={fieldButtonGroupStyles.title}>최대 3가지 선택 가능</Text>
      <View style={fieldButtonGroupStyles.fieldContainer}>
        {fields.map((field) => (
          <FieldButton field={field} handlePress={handleFieldActive} />
        ))}
      </View>
    </View>
  );
};

export default FieldButtonGroup;
