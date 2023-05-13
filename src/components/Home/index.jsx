/* eslint-disable react/prop-types */
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SellIcon from "@mui/icons-material/Sell";
import Manager from "../Menu";
import TitleGreen from "../../templates/Title/titleGreen";
import ContentMenuGrid from "./ContainerGrid";

function ContainerContent({ children, title, Icon }) {
  return (
    <div className="w-full min-h-screen sm:flex sm:flex-row">
      <Menu />

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

function Menu() {
  return (
    <section className="w-full min-h-[80px] bg-[#1a1a1a] sm:w-[250px] sm:border-b-0 sm:border-r-teal-700 float-left">
      <div className="w-full h-[90px] flex items-center sm:justify-center flex-col text-white">
        <h3>UP4TECH</h3>
        <p className="text-[13px]">Backoffice</p>
      </div>

      <div className="hidden sm:w-full sm:flex sm:flex-col sm:items-center sm:min-h-[400px] sm:cursor-pointer px-5">
        <section className="text-neutral-400 w-full">
          <p className="text-[16px] mb-8 border-[#00e2ac] border-b-2">
            Atalhos Rápidos
          </p>
          <ul className="align-center pl-2 text-[14px] text-slate-400">
            <li className="text-neutral-400 mb-2 flex hover:bg-[#1a1e21] p-[5px] hover:rounded">
              <HomeIcon
                color="#fff"
                sx={{
                  width: 20,
                  marginRight: 2,
                }}
              />
              <p>Home</p>
            </li>
            <li className="text-neutral-400 mb-2 flex hover:bg-[#1a1e21] p-[5px] hover:rounded">
              <SellIcon
                color="#fff"
                sx={{
                  width: 20,
                  marginRight: 2,
                }}
              />
              <p>Vendas</p>
            </li>
            <li className="text-neutral-400 mb-2 flex hover:bg-[#1a1e21] p-[5px] hover:rounded">
              <MonetizationOnIcon
                color="#fff"
                sx={{
                  width: 20,
                  marginRight: 2,
                }}
              />
              <p>Propostas</p>
            </li>
          </ul>
        </section>

        <section className="text-neutral-400 w-full mb-8">
          <p className="text-[16px] mb-8 border-[#00e2ac] border-b-2">
            Área Administrador
          </p>
          <Manager />
        </section>
      </div>
    </section>
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
