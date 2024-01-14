import { Link as RACLink } from "react-aria-components";
import { twc } from "react-twc";

export const Link = twc(
  RACLink,
)`text-blue-500 hover:bg-blue-800 hover:text-gray-50 focus-within:bg-blue-800 focus-within:text-gray-50 p-1 outline-none transition-colors duration-200 ease-in-out underline`;
