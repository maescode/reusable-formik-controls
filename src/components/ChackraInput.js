import React from "react";
import { Field, Form } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const ChackraInput = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Input id={name} {...rest} {...field} />
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>
    </div>
  );
};

export default ChackraInput;
