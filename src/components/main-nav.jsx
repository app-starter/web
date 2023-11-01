import Link from "next/link";

import { cn } from "@/lib/utils";
export default function MainNav({ className }) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
    </nav>
  );
}
