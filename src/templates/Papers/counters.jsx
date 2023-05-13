/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";

export default function Counters({ ...props }) {
  return (
    <Paper
      elevation={2}
      about="empresas"
      content="empresas"
      autoFocus={true}
      sx={{ backgroundColor: "#1c1c1c" }}
      onMouseOver={() => {}}
      aria-details="empresas"
      variant="outlined"
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 128,
        width: 120,
        borderWidth: 1,
        borderColor: "#169cb854",
        cursor: "pointer",
      }}
      className="mx-10 hover:bg-[#1a1e21]  transition-all hover:delay-400 duration-300 ease-in-out "
    >
      <div className="w-full mt-5 text-center">
        <b className="text-[#f2fef2]">{props.title}</b>
      </div>
      <div className="w-full h-full mt-3 text-3xl text-center">
        <b className="text-[#00e2ac]">{props.amount}</b>
      </div>
    </Paper>
  );
}
