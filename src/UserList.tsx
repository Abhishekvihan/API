import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

interface Props {
  page: number;
  title: string;
}

const UserList: React.FC<Props> = ({ title, page }) => {
  const [users, setUsers] = useState<any>([]);
  console.log(`UserList re-rendering with page: ${page} & title: ${title}`);
  useEffect(() => {
    axios
      .get(
        'https://randomuser.me/api/?inc=id,name,gender,picture,email&page=' +
          page +
          ' &results=20'
      )
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
      });

    console.log('hi there');
  }, [page]);

  return (
    <div className="">
      {<div>Title:{title}</div>}
      {users.map((u: any) => (
        <UserRow
          email={u.email}
          gender={u.gender}
          picture={u.picture.medium}
          name={u.name.first}
        />
      ))}
    </div>
  );
};
export default React.memo(UserList);
