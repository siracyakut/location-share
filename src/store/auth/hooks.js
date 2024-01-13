import { useSelector } from "react-redux";

export const useAuth = () =>
  JSON.parse(useSelector((state) => state.auth.user));
