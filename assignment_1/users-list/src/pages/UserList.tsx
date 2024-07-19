import React from 'react';
import UserCard from "../components/UserCard";
import rawData from "../data/data.json";
import { User } from "../types/User";

const data = rawData as User[];

interface UserListProps {
  searchQuery: string;
}

const UserList: React.FC<UserListProps> = ({ searchQuery }) => {
  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      (user.skills &&
        user.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery)
        )) ||
      user.location.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <div className="flex flex-wrap -mx-2">
        {filteredData.length > 0 ? (
          filteredData.map((user) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4" key={user.id}>
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <div>No users available</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
