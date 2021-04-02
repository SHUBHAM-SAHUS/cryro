import React from "react";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import OTPInput from "./../form-components/otpInput";
import { getValidationMessage } from "../../../../utils/Validation.js";

// Textinput component

export const TextInput = ({
  handler,
  touched,
  hasError,
  meta,
  status,
  errors
}) => {
  return (
    <div className="pb-3">
      <TextField
        className="d-block"
        type={meta.type}
        variant="standard"
        label={meta.label}
        fullWidth='true'
        error={touched && status === "INVALID"}
        {...handler()}
      />
      <small className="input_error" style={{ color: "#f44336" }}>
        {touched && status === "INVALID" && getValidationMessage(meta, errors)}
      </small>
    </div>
  );
};

// Checkbox component
export const CheckBox = ({ handler, meta }) => (
  <div className="lo-W-All">
    <FormControlLabel
      control={<Checkbox color="primary" {...handler("checkbox")} />}
      label={meta.label}
    />
  </div>
);


export const OtpInput = ({handler, meta}) => (
  <div className="pb-3">
    <OTPInput
        autoFocus
        isNumberInput
        length={4}
        className="otpContainer"
        inputClassName="otpInput"
        onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
      />

  </div>

)