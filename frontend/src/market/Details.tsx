import { GeneralInfoPanel } from "./GeneralInfoPanel";
import { JobInfo } from "./MarketPage";
import { PeerPanel } from "./PeerPanel";

const Details = (props: { jobInfo: JobInfo }) => {
  return (
    <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)] gap-4">
      <GeneralInfoPanel jobInfo={props.jobInfo} />
      <PeerPanel />
    </div>
  );
};

export default Details;
