import Image from "next/image";
import Node from "./components/Node";
import data from "@/data/data";

export default function Home() {
  return (
    <div className="p-2">
      <Node criteria={data.inclusion} operator='OR' description={'Approved:'} />
      <Node criteria={data.exclusion} operator='OR' description={'Denied:'} />
    </div>
  );
}
