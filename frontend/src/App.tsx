import HomePage from "./home/HomePage";
import StorePage from "./store/StorePage";
import MarketPage from "./market/MarketPage";
import MarketPageAlt from "./market-alt/MarketPageAlt";
import WalletPage from "./wallet/WalletPage";
import SettingsPage from "./settings/SettingsPage";
import Sidebar from "./sidebar/Sidebar";
import SettingsPageAlt from "./settings-alt/SettingsPageAlt";
import ProfilePage from "./settings-alt/profile/ProfilePage";
import AccountPage from "./settings-alt/account/AccountPage";
import AppearancePage from "./settings-alt/appearance/AppearancePage";
import NotificationsPage from "./settings-alt/notifications/NotificationPage";
import DisplayPage from "./settings-alt/display/DisplayPage";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="App" className="flex overflow-hidden">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/market-alt" element={<MarketPageAlt />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings-alt" element={<SettingsPageAlt />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="appearance" element={<AppearancePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="display" element={<DisplayPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

const pageMap: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "Store", path: "/store" },
  { label: "Market", path: "/market" },
  { label: "Wallet", path: "/wallet" },
  { label: "Settings", path: "/settings" },
];

import { Button } from "@/components/ui/button";

const NavLink = (props: { label: string; path: string }) => {
  return (
    <Link to={props.path}>
      <Button>{props.label}</Button>
    </Link>
  );
};
