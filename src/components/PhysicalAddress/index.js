import React, { useState, useEffect } from "react";
import Button from "@/UIElements/Button";
import AddressFields from "./components/AddressFields";
import { useSelector, useDispatch } from "react-redux";
import CONSTANTS from "./store/constants";
import { sendAddressDataAction } from "./store/actions";
import { useRouter } from "next/router";
import { showSelectAddressBottomSheetAction } from "../BottomSheets/store/actions";
import { t } from "i18next";

function PhysicalAddress() {
  // ROUTER
  const router = useRouter();
  // SELECTORS
  const stateList = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.states
  );
  // FORM STATE
  const [name, setName] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [landmark, setLandmark] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pinCode, setPincode] = useState();
  const [mobile, setMobileNumber] = useState();
  const [isDefault, setIsDefault] = useState(true);

  const [disableButton, setDisableButton] = useState(true);

  // FORM FIELDS
  const formFields = [
    {
      label: t("components.PhysicalAddress.index.name", "Full Name*"),
      placeholder: t(
        "components.PhysicalAddress.index.namePlaceholder",
        "e.g. Harsh"
      ),
      value: name,
      setValue: setName,
      errorMessage: t(
        "components.PhysicalAddress.index.nameError",
        "please add your Name (min. 3 characters)"
      ),
      isMandatory: 1,
      type: "text",
      // maxLength: "",
      length: 3,
      customClass: "Shipment__Modal__Body__Input--Field--Name",
    },
    {
      label: t(
        "components.PhysicalAddress.index.addressOne",
        "Address Line 1*"
      ),
      placeholder: t(
        "components.PhysicalAddress.index.addressOnePlaceholder",
        "e.g. Hno. 120"
      ),
      value: address1,
      setValue: setAddress1,
      errorMessage: t(
        "components.PhysicalAddress.index.addressOneError",
        "please add your Address Line 1 (min. 3 characters)"
      ),
      isMandatory: 1,
      type: "text",
      // maxLength: "",
      length: 3,
      customClass: "Shipment__Modal__Body__Input--Field--AddressOne",
    },
    {
      label: t(
        "components.PhysicalAddress.index.addressTwo",
        "Address Line 2 (Optional)"
      ),
      placeholder: t(
        "components.PhysicalAddress.index.addressTwoPlaceholder",
        "e.g. Civil lines (add Landmark, if any)"
      ),
      value: address2,
      setValue: setAddress2,
      // errorMessage: '',
      isMandatory: 0,
      type: "text",
      // maxLength: "",
      // length: "",
      customClass: "Shipment__Modal__Body__Input--Field--AddressTwo",
    },
    {
      label: t(
        "components.PhysicalAddress.index.landmark",
        "Landmark (Optional)"
      ),
      placeholder: t(
        "components.PhysicalAddress.index.landmarkPlaceholder",
        "e.g. Civil lines"
      ),
      value: landmark,
      setValue: setLandmark,
      // errorMessage: '',
      isMandatory: 0,
      type: "text",
      // maxLength: "",
      // length: "",
      customClass: "Shipment__Modal__Body__Input--Field--LandMark",
    },
    {
      label: t("components.PhysicalAddress.index.city", "City/District*"),
      placeholder: t(
        "components.PhysicalAddress.index.cityPlaceholder",
        "e.g. Delhi"
      ),
      value: city,
      setValue: setCity,
      errorMessage: t(
        "components.PhysicalAddress.index.cityError",
        "please enter your City here (min. 3 characters)"
      ),
      isMandatory: 1,
      type: "text",
      // maxLength: "",
      length: 3,
      customClass: "Shipment__Modal__Body__Input--Field--City",
    },
    {
      label: t("components.PhysicalAddress.index.state", "State*"),
      placeholder: t(
        "components.PhysicalAddress.index.statePlaceholder",
        "Select a state"
      ),
      value: state,
      setValue: setState,
      errorMessage: t(
        "components.PhysicalAddress.index.stateError",
        "please select your State here"
      ),
      isMandatory: 1,
      type: "text",
      // maxLength: "",
      // length: "",
      customClass: "Shipment__Modal__Body__Input--Field--State",
      list: stateList,
    },
    {
      label: t("components.PhysicalAddress.index.pincode", "Pincode*"),
      placeholder: t(
        "components.PhysicalAddress.index.pincodePlaceholder",
        "e.g. 110011"
      ),
      value: pinCode,
      setValue: setPincode,
      errorMessage: t(
        "components.PhysicalAddress.index.pincodeError",
        "please enter a valid pin code here"
      ),
      isMandatory: 1,
      type: "number",
      maxLength: 6,
      length: 6,
      customClass: "Shipment__Modal__Body__Input--Field--Pin",
    },
    {
      label: t("components.PhysicalAddress.index.mobile", "Mobile Number*"),
      placeholder: t(
        "components.PhysicalAddress.index.mobilePlaceholder",
        "e.g. 8126196827"
      ),
      value: mobile,
      setValue: setMobileNumber,
      errorMessage: t(
        "components.PhysicalAddress.index.mobileError",
        "please enter valid mobile number here"
      ),
      isMandatory: 1,
      type: "number",
      maxLength: 10,
      length: 10,
      customClass: "Shipment__Modal__Body__Input--Field--Mobile",
    },
  ];

  // DISPATCH
  const dispatch = useDispatch();

  const payload = {
    name,
    address1,
    address2,
    landmark,
    city,
    state,
    pinCode,
    mobile,
    isDefault,
    courseId: router?.query?.courseId,
  };

  const sendAddressData = (actionType, payload) => {
    dispatch(sendAddressDataAction(actionType, payload));
  };

  const saveAddress = () => {
    sendAddressData(CONSTANTS.SHIPMENT_ADDRESSDATA_POST, payload);
  };

  const updateAddress = () => {
    sendAddressData(CONSTANTS.SHIPMENT_EDITADDRESSDATA_PUT, {
      ...payload,
      addressId: activeAddress?.id,
    });
  };

  const handleClick = () => {
    isEditMode ? updateAddress() : saveAddress();
  };

  // SELECTORS
  const isEditMode = useSelector(
    (state) => state?.physicalShipmentReducer?.isEditMode
  );

  const activeAddress = useSelector(
    (state) => state?.physicalShipmentReducer?.activeAddress
  );

  // EFFECTS
  useEffect(() => {
    if (isEditMode && activeAddress) {
      setAddress1(activeAddress?.address1);
      setAddress2(activeAddress?.address2);
      setName(activeAddress?.name);
      setCity(activeAddress?.city);
      setState(activeAddress?.state);
      setLandmark(activeAddress?.landmark);
      setPincode(activeAddress?.pinCode);
      setMobileNumber(activeAddress?.mobile);

      setIsDefault(1);
    }
  }, [isEditMode, activeAddress]);

  useEffect(() => {
    if (
      name?.length >= 3 &&
      address1?.length >= 3 &&
      city?.length >= 3 &&
      state &&
      pinCode?.toString()?.length === 6 &&
      mobile?.length
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name, address1, city, state, pinCode, mobile]);

  return (
    <div className="AddressForm">
      <div className="AddressForm__Fields">
        {formFields?.map((item, i) => (
          <AddressFields {...item} key={i} />
        ))}
        <div className="AddressForm__Fields--Note">
          *{" "}
          {t(
            "components.PhysicalAddress.index.note",
            "Your address can’t be changed once the order is placed"
          )}
        </div>
      </div>
      <div className="AddressForm__Save">
        <Button onClick={handleClick} disabled={disableButton}>
          {t("components.PhysicalAddress.index.save", "Save Address")}
        </Button>
      </div>
    </div>
  );
}

export default PhysicalAddress;
