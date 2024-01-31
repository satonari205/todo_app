import { FC } from "react";
import Nav from "../components/nav/Nav";
import { Outlet } from "react-router-dom";

const Layouts: FC = () => {
  return (
    <>
      <div className="h-screen p-4">
        <div className="flex flex-col p-4 border rounded-xl">
          <Nav />
          <div className="my-5">
            <Outlet />
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}

export default Layouts;