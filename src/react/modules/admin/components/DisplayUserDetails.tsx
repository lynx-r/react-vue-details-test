import { UserDetails } from "@admin/types";

interface Props {
  title: string;
  usersDetails: UserDetails[];
}

const DisplayUserDetails = (props: Props) => {
  const { title, usersDetails } = props;
  const usersItems = usersDetails.map((user) => (
    <li key={user.id}>{user.email}</li>
  ));
  return (
    <>
      <label>{title}</label>
      <ul>{usersItems}</ul>
      <label>Found users: {usersDetails.length} </label>
    </>
  );
};

export default DisplayUserDetails;
