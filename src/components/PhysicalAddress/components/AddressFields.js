import React, { useState } from "react";
import Input from "@/UIElements/Input";
import { showSelectStateBottomSheetAction } from "../../BottomSheets/store/actions";
import { useDispatch } from "react-redux";
import Dropdown from "../../UIElements/Dropdown";

function AddressFields({
  label,
  placeholder,
  value,
  setValue,
  customClass,
  errorMessage,
  isMandatory,
  list,
  type,
  length,
  maxLength,
}) {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const verify = (value) => {
    if (value?.length < length) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="AddressField">
      <div className="AddressField__Label">{label}</div>
      <div className="AddressField__Input">
        {list?.length ? (
          <Dropdown
            customClass="AddressField__Input__List"
            heading={
              <Input
                value={value}
                onChange={(e) => {
                  if (maxLength !== undefined) {
                    if (e?.target?.value?.length <= maxLength) {
                      setValue(e.target.value);
                    } else {
                    }
                  } else {
                    setValue(e.target.value);
                  }
                }}
                placeholder={placeholder}
                onBlur={(e) => verify(e?.target?.value)}
                type={type}
                maxLength={maxLength}
                onClick={() => setValue("")}
              />
            }
          >
            {(value
              ? list?.filter((item) =>
                  item?.name?.toLowerCase()?.includes(value?.toLowerCase())
                )
              : list
            )?.map((item) => (
              <div
                key={item?.key}
                className="AddressField__Input__List--Item"
                onClick={() => setValue(item?.name)}
              >
                {item?.name}
              </div>
            ))}
          </Dropdown>
        ) : (
          <Input
            value={value}
            onChange={(e) => {
              if (maxLength !== undefined) {
                if (e?.target?.value?.length <= maxLength) {
                  setValue(e.target.value);
                } else {
                }
              } else {
                setValue(e.target.value);
              }
            }}
            placeholder={placeholder}
            onBlur={(e) => verify(e?.target?.value)}
            type={type}
            maxLength={maxLength}
          />
        )}
        {error && isMandatory ? (
          <div className="AddressField__Input--Error">{errorMessage}</div>
        ) : null}
      </div>
    </div>
  );
}

export default AddressFields;
