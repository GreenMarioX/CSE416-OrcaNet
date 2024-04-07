import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, PlusIcon } from "lucide-react";
import { useState } from "react";

const OverviewHeader = (props: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  addJob: (hash: string) => void;
}) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex">
        <FilterInput setFilter={props.setFilter} />
        <Button className="ml-2" onClick={() => props.setStatusFilter("all")}>
          All
        </Button>
        <Button
          className="ml-2"
          onClick={() => props.setStatusFilter("downloading")}
        >
          Downloading
        </Button>
        <Button
          className="ml-2"
          onClick={() => props.setStatusFilter("paused")}
        >
          Paused
        </Button>
        <Button className="ml-2" onClick={() => props.setStatusFilter("error")}>
          Error
        </Button>
        <Button
          className="ml-2"
          onClick={() => props.setStatusFilter("completed")}
        >
          Completed
        </Button>
      </div>
      <AddJob addJob={props.addJob} />
    </div>
  );
};
export default OverviewHeader;

const FilterInput = (props: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [buffer, setBuffer] = useState("");
  return (
    <div className="relative min-w-28">
      <Input
        type="text"
        value={buffer}
        onChange={(e) => setBuffer(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.setFilter(buffer);
          }
        }}
        placeholder="Filter..."
      />
      {/* <span className="absolute left-2 top-2">Filter</span> */}
      <Filter
        className="absolute right-2 top-2"
        onClick={(e) => props.setFilter(buffer)}
      />
    </div>
  );
};

const AddJob = (props: { addJob: (hash: string) => void }) => {
  const [active, setActive] = useState(false);
  const [buffer, setBuffer] = useState("");
  return (
    <div>
      {active ? (
        <div className="relative min-w-28">
          <Input
            type="text"
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                props.addJob(buffer);
                setBuffer("");
                setActive(false);
              }
            }}
            placeholder="Filter..."
          />
          <PlusIcon
            className="absolute right-2 top-2"
            onClick={(e) => {
              props.addJob(buffer);
              setBuffer("");
              setActive(false);
            }}
          />
        </div>
      ) : (
        <Button className="ml-20" onClick={(e) => setActive(true)}>
          Add Job
        </Button>
      )}
    </div>
  );
};
