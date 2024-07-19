import { useState } from "react";
import Header from "./components/Header";
import UserList from "./pages/UserList";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <UserList searchQuery={searchQuery} />
    </>
  );
}
