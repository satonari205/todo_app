import { Tab } from "./tabs/tab";

const Nav = () => {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <Tab tabName="tasks"/>
      <Tab tabName="diary"/>
      <Tab tabName="calender"/>
    </div>
  );
}

export default Nav;