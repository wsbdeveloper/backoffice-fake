/* eslint-disable react/prop-types */
import HomeIcon from "@mui/icons-material/Home";
import TitleGreen from "../../templates/Title/titleGreen";
import ContentMenuGrid from "./ContainerGrid";
import Sidebar from "../Sidebar";

function ContainerContent({ children, title, Icon }) {
  return (
    <div className="w-full min-h-screen sm:flex sm:flex-row">
      <Sidebar />

      <div className=" w-full px-5 my-10">
        <div className="flex justify-between flex-row w-[100px]">
          <Icon />
          <h1 className="text-xl">{title}</h1>
        </div>

        {children}
      </div>
    </div>
  );
}


export function ComponentHome() {
  return (
    <>
      <ContainerContent
        title={"Home"}
        Icon={() => <HomeIcon sx={{ color: "#00e2ac" }} />}
      >
        <TitleGreen title={"Painel de Gerenciamento"} />
        <ContentMenuGrid />
      </ContainerContent>
    </>
  );
}
