import { useNavigate } from "react-router-dom";

export const Tab = ({ tabName }) => {
  const nav = useNavigate();
  const pageHandler = () => {
    nav(`/${tabName}`);
  }

  return (
    <button role="tab" className="tab" onClick={pageHandler}>
      {tabName}
    </button>
  );
}