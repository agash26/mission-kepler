import { Card } from 'flowbite-react';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="max-w-sm" imgSrc={user.img} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {user.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {user.location}
      </p>
    </Card>
  );
}
