import React from "react";
import { Card } from "flowbite-react";
import { User } from "../types/User";
import Skills from "./Skills";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="border border-white hover:border-gray-400 transition-colors duration-200">
      <div className="flex items-start">
        <img
          src={user.img}
          alt={`${user.name}'s profile`}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-1">
            {user.location}
          </p>
          <div className="mt-2 flex space-x-2">
            {user?.skills?.map((skill, index) => (
              <Skills key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserCard;
