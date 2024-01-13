import { Link as RACLink } from "react-aria-components";
import { twc } from "react-twc";

export const Link = twc(
  RACLink,
)`text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out underline`;
