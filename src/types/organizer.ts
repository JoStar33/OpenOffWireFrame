import { RadioButtonProps } from "react-native-radio-buttons-group";

interface Organizer extends RadioButtonProps {
  id: string;
  label: string;
  value: string;
};

export type { Organizer };
