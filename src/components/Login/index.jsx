export default function ComponentLogin() {
  return (
    <section className="w-full sm:fixed justify-center items-center bg-gradient-to-r from-[#0000008d] from-% via-[#000000] via-90% to-[#000000e5]">
      <section className="w-full h-screen justify-center rounded-md sm:rounded-none p-[20px] sm:flex sm:flex-col sm:justify-center sm:items-center text-center">
        <div className="w-full pb-[10px] flex flex-col justify-center items-center">
          <h3 className="w-[100%] text-[#fffafa] font-bold text-3xl">
            Olá, <span className="text-[#02CFAA]">Seja bem-vindo</span>
          </h3>
          <p className="w-[100%] text-[#C0C0C0] text-sm items-center text-center">
            Utilize suas credenciais de acesso em caso tenha dúvidas entrar em
            contato.
          </p>
          <div className="w-full h-full mt-[20px] flex flex-col items-center text-left">
            <div className="w-full  h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100">
              <label className="text-[#fafafa] text-lg">Usuário:</label>
              <input
                type="text"
                className="w-full bg-[#0f1010] p-2 outline-0 text-[#02CFAA] mt-[3px]"
                placeholder="meu usuário"
                id="loginUser"
              />
            </div>
            <div className="w-full h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100 mt-[15px]">
              <label className="text-[#fafafa] text-lg">Senha:</label>
              <div className="w-full mt-[3px] flex flex-row">
                <input
                  type="text"
                  className="w-full bg-[#0f1010] p-2 outline-0 text-[#02CFAA]"
                  placeholder="minha senha"
                  id="loginPassword"
                />
              </div>
            </div>
            <div className="w-full sm:max-w-[400px] mt-[10px]">
              <div className="w-full h-[60px] flex flex-col sm:flex-row sm:justify-between">
                <div className="max-w-[50%] h-[30px] flex flex-row items-center cursor-pointer">
                  <a className="text-[#C0C0C0] hover:text-[#0EA5E9] text-sm">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <button
                className="w-full h-[40px] bg-[#02CFAA] rounded-md text-lg font-bold"
                onClick={() => alert("ops memude")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
