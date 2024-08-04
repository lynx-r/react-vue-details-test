import { UserDetails } from "@admin/types";
import { useState } from "react";

import { InputEvent } from "@/react/types";
import { DEFAULT_USER_DETAILS } from "@admin/constants";

interface Props {
  onSearch: (user: UserDetails) => void;
}

const SearchDetailsForm = (props: Props) => {
  const { onSearch } = props;
  const [userDetails, setUserDetails] =
    useState<UserDetails>(DEFAULT_USER_DETAILS);

  const handleChange = (e: InputEvent) =>
    setUserDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <>
      <t-form-group>
        <t-form-label>User details form asdfsdfs dfdsfdfgdfg</t-form-label>
        <t-form-text-item>
          <label htmlFor="email">Email sdfdsfdsfgdf sgdfgfdgh</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            value={userDetails.email}
            onChange={handleChange}
          />
        </t-form-text-item>
        <t-form-text-item>
          <label htmlFor="userNumber">number</label>
          <input
            id="userNumber"
            type="text"
            placeholder="number"
            value={userDetails.userNumber}
            onChange={handleChange}
          />
        </t-form-text-item>
        <t-form-button-group>
          <button
            onClick={() => onSearch(userDetails)}
            type="button"
          >
            Search
          </button>
        </t-form-button-group>
      </t-form-group>
    </>
  );
};

export default SearchDetailsForm;
