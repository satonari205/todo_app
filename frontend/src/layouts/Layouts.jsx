import Nav from "../components/nav/Nav";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <div className="h-screen p-4">
        <div className="flex flex-col p-4 border rounded-xl max-w-2xl mx-auto">
          <Nav />
          <div className="my-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layouts;