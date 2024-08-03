import { createPresenter, initState } from "@admin/presenter";
import { UserDetails, UserDetailsReq } from "@admin/types";
import { useCallback, useState } from "react";
import DisplayUserDetails from "../components/DisplayUserDetails";
import SearchDetailsForm from "../components/SearchDetailsForm";
import { useStateStoreAdmin } from "../store";

export default function Test(params) {
  const state = useState(initState());
  const simpleStore = useStateStoreAdmin(state);
  const presenter = createPresenter(simpleStore);

  const onUserSearch = useCallback(
    (user: UserDetails) => {
      const { email, userNumber } = user;
      const userDetailsReq: UserDetailsReq = {
        email: email,
        userNumber: userNumber,
      };
      presenter.onGetUsersDetails(userDetailsReq);
    },
    [presenter]
  );

  return (
    <>
      <SearchDetailsForm onSearch={onUserSearch} />
      <DisplayUserDetails title="useState store" />
    </>
  );
}
