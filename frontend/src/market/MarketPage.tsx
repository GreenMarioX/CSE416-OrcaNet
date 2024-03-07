import { DataTable } from "./DataTable";
import { columns } from "./columns";

import SearchBar from "./SearchBar";

import fakeSeeds from "./fakeSeeds";

const MarketPage = () => {
  return (
    <div id="market-page" className="p-5 grow">
      <SearchBar />
      <DataTable columns={columns} data={fakeSeeds} />
    </div>
  );
};

export default MarketPage;
