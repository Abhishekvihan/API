import React from 'react';
// import UserLists from './UserList';

interface Props {
  email: string;
  gender: string;
  picture: string;
  name: string;
}

const UserRow: React.FC<Props> = ({ email, gender, picture, name }) => {
  return (
    <div className="flex items-center justify-between flex-1 mx-auto space-x-10 space-y-8 bg-gray-100 border border-gray-500">
      <div className="flex-shrink text-sm font-bold border border-gray-600">
        Email: {email}{' '}
      </div>
      <div className="self-center text-sm font-bold border border-gray-600">
        Gender: {gender}{' '}
      </div>
      <div className="self-center flex-shrink-0 text-sm font-bold border border-gray-600">
        <img src={picture} alt="pictures" />
      </div>
      <div className="self-center text-sm font-bold border border-gray-600">
        Name: {name}{' '}
      </div>
    </div>
  );
};
export default React.memo(UserRow);
