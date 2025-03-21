import { Link as RACLink } from "react-aria-components";
import { twc } from "react-twc";

export const Link = twc(
  RACLink,
)`text-gray-200 hover:bg-gray-50 hover:text-gray-950 focus-within:bg-gray-50 focus-within:text-gray-950 font-semibold p-1 outline-hidden transition-colors duration-200 ease-in-out underline`;
