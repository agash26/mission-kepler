import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

export default function Header({ setSearchQuery }: HeaderProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <header>
      <Navbar fluid rounded>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Users
          </span>
        </NavbarBrand>
      </Navbar>
      <Navbar fluid rounded>
        <div className="flex justify-between items-center w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Users"
              onChange={handleSearchChange}
              className="px-4 py-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </div>
          </div>
          <NavbarCollapse>
            <NavbarLink href="#">
              Reputation
            </NavbarLink>
            <NavbarLink href="#" active>New Users</NavbarLink>
            <NavbarLink href="#">Voters</NavbarLink>
            <NavbarLink href="#">Editors</NavbarLink>
            <NavbarLink href="#">Moderators</NavbarLink>
          </NavbarCollapse>
        </div>
      </Navbar>
    </header>
  );
}
