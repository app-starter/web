import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export default function UserCard({ user, className }) {
  return (
    <div className={cn("flex flex-col border  rounded-2xl", className)}>
      <div className="flex">
        <div className="h-16 w-16 bg-current mx-2 rounded-full m-1" />
        <div className="flex flex-col  py-1">
          <span className="uppercase font-semibold ">eyup Yildirim</span>
          <span className="font-sans">Details For User dkallkdfklsa l</span>
        </div>
      </div>
      <div className="flex justify-between  my-2 mx-2">
        <div>
          <Badge className="mx-1">Admin</Badge>
          <Badge className="bg-green-300 text-black-100 ">SuperPower</Badge>
        </div>
        <div className="">
          <span className="mx-1 h-8 w-8 bg-slate-800 text-cyan-200 ">x</span>
          <span className="mx-1 h-8 w-8 bg-slate-800 text-cyan-200 "> y</span>
          <span className="mx-1 h-8 w-8 bg-slate-800 text-cyan-200">...</span>
        </div>
      </div>
    </div>
  );
}
