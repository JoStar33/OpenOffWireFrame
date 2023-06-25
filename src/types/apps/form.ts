interface FormModel {
  type: string;
  name: string;
  label: string;
}

interface FormValidateModel {
  type: string;
  name: string;
  label: string;
  required: {
    value: boolean;
    message: string;
  };
  validate: (value: string) => string | undefined;
}

interface SubmitValue {
  [key: string]: string;
}

export type { FormModel, FormValidateModel, SubmitValue };

