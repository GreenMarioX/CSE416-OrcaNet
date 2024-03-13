import Sidebar from "./Sidebar";
import JobPanel from "./JobPanel";

const MarketPage = () => {
  return (
    <div id="market-page" className="relative grow bg-background">
      <Sidebar />
      <JobPanel />
    </div>
  );
};

export default MarketPage;
