import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  tabName: string;
}

export const Tab: FC<Props> = ({tabName}) => {
  const nav = useNavigate();
  const pageHandler = () => {
    nav(`/${tabName}`);
  }

  return(
    <>
      <button role="tab" className="tab" onClick={pageHandler}>
        {tabName}
      </button>
    </>
  );
}