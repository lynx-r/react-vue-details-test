import { usePiniaStore } from "@/vue/modules/admin/store";
import { createPresenter, initState } from "@admin/presenter";
import { UserDetails, UserDetailsReq } from "@admin/types";
import { useState } from "react";
import DisplayUserDetails from "../components/DisplayUserDetails";
import SearchDetailsForm from "../components/SearchDetailsForm";
import { useStateStoreAdmin } from "../store";
import createReduxStore from "../store/createReduxStore";

const IndexPage = () => {
  const state = useState(initState());
  const simpleStore = useStateStoreAdmin(state);
  const presenterState = createPresenter(simpleStore);

  const reduxStore = createReduxStore();
  const presenterRedux = createPresenter(reduxStore);

  const currentStore = usePiniaStore();
  const presenterPinia = createPresenter(currentStore);

  const onUserSearch = (user: UserDetails) => {
    const { email, userNumber } = user;
    const userDetailsReq: UserDetailsReq = {
      email: email,
      userNumber: userNumber,
    };
    presenterState.onGetUsersDetails(userDetailsReq);
    presenterRedux.onGetUsersDetails(userDetailsReq);
    presenterPinia.onGetUsersDetails(userDetailsReq);
  };

  return (
    <>
      <t-module-header>Admin module </t-module-header>
      <SearchDetailsForm onSearch={onUserSearch} />
      <DisplayUserDetails
        title="useState store"
        usersDetails={presenterState.usersDetails}
      />
      <DisplayUserDetails
        title="Redux store"
        usersDetails={presenterRedux.usersDetails}
      />
      <DisplayUserDetails
        title="Pinia store"
        usersDetails={presenterPinia.usersDetails}
      />
    </>
  );
};

export default IndexPage;
