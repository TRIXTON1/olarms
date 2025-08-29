import React, { useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./sidebar.module.css";
import logo from "./assets/logo.png";
import dashboardIcon from "./assets/dashboard.png";
import customersIcon from "./assets/customers.png";
import walletIcon from "./assets/wallet.png";
import paymentsIcon from "./assets/payments.png";
import transactionsIcon from "./assets/transactions.png";
import invoicesIcon from "./assets/invoices.png";
import notificationsIcon from "./assets/notifications.png";
import settingsIcon from "./assets/settings.png";
import logoutIcon from "./assets/logout.png";
import supporticon from "./assets/support.png";
import Header from "./Header";
import Settings from "./Settings";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  return (
    <div className={classes.layout}>
      {/* Sidebar */}
      <div
        className={`${classes.sidebar} 
          ${mobileOpen ? classes.showMobile : ""} 
          ${desktopOpen ? classes.expanded : classes.collapsed}`}
      >
        {/* Logo & Collapse Toggle */}
        <div className={classes.logoWrapper}>
          <img
            src={logo}
            alt="OLARMS Logo"
            className={classes.logoImg}
            onClick={() => {
              if (!desktopOpen) setDesktopOpen(true);
            }}
            style={{ cursor: !desktopOpen ? "pointer" : "default" }}
          />

          {desktopOpen ? (
            <button
              className={classes.collapseBtn}
              onClick={() => setDesktopOpen(false)}
            >
              <ChevronLeft size={20} color="#fff" />
            </button>
          ) : (
            <button
              className={classes.collapseBtn}
              onClick={() => setDesktopOpen(true)}
            >
              <ChevronRight size={20} color="#fff" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className={classes.nav}>
          <a href="#"><img src={dashboardIcon} alt="Dashboard" className={classes.icon} />{desktopOpen && "Dashboard"}</a>
          <a href="#"><img src={customersIcon} alt="Customers" className={classes.icon} />{desktopOpen && "Customers"}</a>
          <a href="#"><img src={walletIcon} alt="Wallet" className={classes.icon} />{desktopOpen && "Wallet"}</a>
          <a href="#"><img src={paymentsIcon} alt="Payments" className={classes.icon} />{desktopOpen && "Payments"}</a>
          <a href="#"><img src={transactionsIcon} alt="Transactions" className={classes.icon} />{desktopOpen && "Transactions"}</a>
          <a href="#"><img src={invoicesIcon} alt="Invoices" className={classes.icon} />{desktopOpen && "Invoices & Receipts"}</a>
          <a href="#"><img src={notificationsIcon} alt="Notifications" className={classes.icon} />{desktopOpen && "Notifications"}</a>
        </nav>

        {/* Bottom buttons */}
        <div className={classes.bottom}>
          <button className={classes.settingss}>
            <img src={supporticon} alt="Settings" className={classes.icon} />
            {desktopOpen && "Support"}
          </button>
          <button className={classes.settings}>
            <img src={settingsIcon} alt="Settings" className={classes.icon} />
            {desktopOpen && "Settings"}
          </button>
          <button className={classes.logout}>
            <img src={logoutIcon} alt="Logout" className={classes.icon} />
            {desktopOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className={classes.main}>
        <Header />
        <div className={classes.content}>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
