import Sidebar from "./Sidebar";
import JobPanel from "./JobPanel";
import { createContext, useContext, useState } from "react";

export const MarketPageContext = createContext({ jobID: "-1" });

const MarketPage = () => {
  const [jobID, setJobID] = useState("-1");
  return (
    <MarketPageContext.Provider value={{ jobID }}>
      <div id="market-page" className="relative grow bg-background">
        <Sidebar setJobID={setJobID} />
        <JobPanel />
      </div>
    </MarketPageContext.Provider>
  );
};

export default MarketPage;
