import Image from "next/image";
import DecisionTreeNode from "./components/DecisionTreeNode";
import criterionData from "@/data/criterionData";

export default function Home() {
  return (
    <div className="p-10">
      <DecisionTreeNode
        criteria={criterionData.inclusion}
        operator="OR"
        description={"Approved:"}
      />
      <DecisionTreeNode criteria={criterionData.exclusion} operator="OR" description={"Denied:"} />
    </div>
  );
}
