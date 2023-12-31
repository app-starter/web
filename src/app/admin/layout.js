import AsideMenu from "@/components/admin/aside-menu";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";

export const metadata = {
  title: "App Starter Dasboard",
  description: "Generated by create next app",
};

export default function DasboardLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex ">
          <div className="flex flex-col w-1/5 bg-slate-200 h-screen items-center pt-10">
            <h2 className="text-2xl font-semibold px-4">App Starter</h2>
            <AsideMenu />
          </div>

          <div className="flex flex-col w-4/5">
            <div className="flex h-16 items-center px-4">
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>

            <div className="flex  bg-slate-100">
              <div className="flex mx-5 my-5  w-full  ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
