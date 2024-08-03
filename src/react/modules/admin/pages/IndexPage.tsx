import { createPresenter, initState } from "@admin/presenter";
import { UserDetails, UserDetailsReq } from "@admin/types";
import { useState } from "react";
import DisplayUserDetails from "../components/DisplayUserDetails";
import SearchDetailsForm from "../components/SearchDetailsForm";
import { useStateStoreAdmin } from "../store";

const IndexPage = () => {
  const state = useState(initState());
  const simpleStore = useStateStoreAdmin(state);
  const presenter = createPresenter(simpleStore);

  const onUserSearch = (user: UserDetails) => {
    const { email, userNumber } = user;
    const userDetailsReq: UserDetailsReq = {
      email: email,
      userNumber: userNumber,
    };
    presenter.onGetUsersDetails(userDetailsReq);
  };
  console.log("???");

  return (
    <>
      <SearchDetailsForm onSearch={onUserSearch} />
      <DisplayUserDetails
        title="useState store"
        usersDetails={presenter.usersDetails}
      />
    </>
  );
};

export default IndexPage;
