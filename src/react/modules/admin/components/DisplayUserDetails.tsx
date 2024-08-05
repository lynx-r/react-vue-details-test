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
    <t-display-card className="mb-6">
      <t-label>{title}</t-label>
      <ul>{usersItems}</ul>
      <t-label-info>Found users: {usersDetails.length} </t-label-info>
    </t-display-card>
  );
};

export default DisplayUserDetails;
