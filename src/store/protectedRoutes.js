import { useAuth } from "@/store/auth-context";
import { usePathname } from "next/navigation";

export const ProtectedRoutes = ({ children }) => {
  const { isAdmin } = useAuth(); // remember where we got this

  console.log(usePathname());
  if (!isAdmin && usePathname().startsWith("/admin")) {
    return <p className="">You are not allowed here</p>;
  }

  return children;
};
