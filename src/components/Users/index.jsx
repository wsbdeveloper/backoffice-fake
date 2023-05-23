/* eslint-disable react/prop-types */
import PeopleIcon from '@mui/icons-material/People';
import Sidebar from '../Sidebar'
import TitleGreen from "../../templates/Title/titleGreen";
import EnhancedTable from '../../templates/Tables';

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


export function ComponentUsers() {
  return (
    <>
      <ContainerContent
        title={"Clientes"}
        Icon={() => <PeopleIcon sx={{ color: "#00e2ac" }} />}
      >
        <TitleGreen title={"Painel de Gerenciamento"} />
        <EnhancedTable />
      </ContainerContent>
    </>
  );
}
