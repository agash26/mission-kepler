import UserCard from '../components/UserCard';
import rawData from '../data/data.json';
import { User } from '../types/user';

const data = rawData as User[];

function UserList() {
  return (
    <div className="flex flex-wrap -mx-2">
      {data.length > 0 ? (
        data.map((user) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4" key={user.id}>
            <UserCard user={user} />
          </div>
        ))
      ) : (
        <div>No users available</div>
      )}
    </div>
  );
}

export default UserList;
