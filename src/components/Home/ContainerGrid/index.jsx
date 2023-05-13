import { Box } from "@mui/material";
import Counters from "../../../templates/Papers/counters";

export default function ContentMenuGrid() {
  return (
    <div className="bg-[#1a1a1a] w-full h-56 p-4 shadow-xl shadow-[#0f1011]">
      <div className="">
        <h2 className="">Cadastros Mensais</h2>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: 128,
          },
        }}
      >
        <div className="w-96 items-center flex-row flex justify-start">
          <Counters title={"Empresas"} amount={27} />
          <Counters title={"Contatos"} amount={22} />
          <Counters title={"Consultores"} amount={54} />
          <Counters title={"Contratos"} amount={54} />
        </div>
      </Box>
    </div>
  );
}
