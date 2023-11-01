import Link from "next/link";

import { cn } from "@/lib/utils";
export default function AsideMenu({ className }) {
  return (
    <nav className={cn("flex flex-col items-center ", className)}>
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary mt-5 p-3 bg-white w-full text-center py-2 rounded-md "
      >
        Show Current App Page
      </Link>
      <Link
        href="/admin/users"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary mt-5 p-3 bg-white w-full text-center py-2 rounded-md"
      >
        Users
      </Link>
      <Link
        href="/admin/roles"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary mt-5 p-3 bg-white w-full text-center py-2 rounded-md"
      >
        Roles
      </Link>
    </nav>
  );
}
