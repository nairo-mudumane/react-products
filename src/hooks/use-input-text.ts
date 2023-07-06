import React from "react";
import { IUseInputText } from "./@types";
import helpers from "../helpers";

const messages = {
  required: "Este campo é obrigatorio",
  invalidPassword:
    "Minimo 6 caracteres, uma letra maiuscula, um numero e um caractere especial",
};

export function useInputText<T>(initialValues: T): T & IUseInputText<T> {
  function getInitialErrors(values: object): object {
    let errors = {};

    Object.keys(values).map((key) => (errors = { ...errors, [key]: "" }));

    return errors;
  }

  const initialErrors = getInitialErrors(initialValues as object);

  const [values, setValues] = React.useState<T>(initialValues);
  const [errors, setErrors] = React.useState<T>({} as T);

  const updateErrors = (newErrors: { [T: string]: string }) =>
    setErrors((prev) => ({ ...prev, ...newErrors }));

  const updateInitial = (key: string, value: string | number | boolean) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const clear = () => {
    setValues(initialValues);
    setErrors(initialErrors as T);
  };

  function onChange(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.currentTarget;

    if (errors) setErrors((prev) => ({ ...prev, [name]: undefined }));

    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function onBlur(event: React.FocusEvent<any, Element>) {
    const {
      name,
      value,
      type,
      required,
    }: EventTarget & (HTMLInputElement | HTMLTextAreaElement) =
      event.currentTarget;

    if (required && value === "") {
      updateErrors({ [name]: messages.required });
      return;
    }

    if (type === "text" || type === "number") {
      if (required) {
        if (value === "") {
          updateErrors({ [name]: messages.required });
          return;
        } else {
          updateErrors({ [name]: "" });
          return;
        }
      }
    }

    if (type === "email") {
      if (required) {
        if (!helpers.email.test(value)) {
          updateErrors({ [name]: "email invalido" });
          return;
        } else {
          updateErrors({ [name]: "" });
          return;
        }
      }

      if (value !== "" && !helpers.email.test(value)) {
        updateErrors({ [name]: "email invalido" });
        return;
      } else {
        updateErrors({ [name]: "" });
        return;
      }
    }

    if (type === "password") {
      if (!helpers.password.isValid(value)) {
        updateErrors({
          [name]: messages.invalidPassword,
        });
        return;
      } else {
        updateErrors({
          [name]: "",
        });
      }
    }

    if (type === "url" || name === "website" || name === "url") {
      if (required) {
        if (value === "") {
          updateErrors({
            [name]: "URL inválida! Exemplo: https://dominio.com",
          });
          return;
        } else {
          updateErrors({ [name]: "" });
          return;
        }
      }

      if (value !== "") {
        updateErrors({
          [name]: "URL inválida! Exemplo: https://dominio.com",
        });
        return;
      } else {
        updateErrors({ [name]: "" });
        return;
      }
    }
  }

  return {
    ...values,
    errors,
    updateErrors,
    updateInitial,
    clear,
    onChange,
    onBlur,
  };
}
