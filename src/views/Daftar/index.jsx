import { supabase } from "../../supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/logo-makrab.png";
const Daftar = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [penyakit, setPenyakit] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const savePesertaM = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("user").insert([
        {
          nama: nama,
          nim: nim,
          kelas: kelas,
          wa: whatsapp,
          angkatan: angkatan,
          penyakit: penyakit,
        },
      ]);
      if (error) throw error;

      navigate("/peserta");
    } catch (error) {
      console.log(error);
    }
  };

  document.title = "Makrab | Register";

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center items-center">
        <div className="hidden pl-28 items-center lg:block lg:w-1/2">
          <img src={image} alt="" className="absolute top-[25vh]" />
        </div>

        <div className="flex flex-wrap justify-center items-center lg:w-1/2">
          <div className="md:w-1/2 w-full flex justify-center items-center max-w-sm mx-auto">
            <div className="md:p-6 mb-12">
              <h1 className="text-[#0014FF] flex justify-center py-12 text-4xl font-semibold">
                <span className="text-[#3FE1A7] px-2">MAKRAB</span> 2023
              </h1>
              <form onSubmit={savePesertaM}>
                <label htmlFor="" className="text-lg md:text-lg ml-5 md:ml-0">
                  Nama Lengkap
                </label>
                <div className="w-full grid place-items-center">
                  <input
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    type="text"
                    className="bg-slate-200 p-1 mb-8 mt-2 pl-6 rounded-lg w-[80vw] lg:w-full focus:outline-teal-500 focus:outline-8"
                    placeholder="Masukan nama"
                    required
                  />
                </div>
                <label htmlFor="" className="text-lg md:text-lg ml-5 md:ml-0">
                  NIM
                </label>
                <div className="w-full grid place-items-center">
                  <input
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    type="text"
                    className="bg-slate-200 p-1 mb-8 mt-2 pl-6 rounded-lg w-[80vw] lg:w-full focus:outline-teal-500 focus:outline-8"
                    placeholder="Masukan NIM"
                    required
                  />
                </div>
                <label htmlFor="" className="text-lg md:text-lg ml-5 md:ml-0">
                  Kelas
                </label>
                <div className="w-full grid place-items-center">
                  <input
                    value={kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    type="text"
                    className="bg-slate-200 p-1 mb-8 mt-2 pl-6 rounded-lg w-[80vw] lg:w-full focus:outline-teal-500 focus:outline-8"
                    placeholder="Masukan kelas"
                    required
                  />
                </div>
                <label htmlFor="" className="text-lg md:text-lg ml-5 md:ml-0">
                  Whatsapp
                </label>
                <div className="w-full grid place-items-center">
                  <input
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    type="text"
                    className="bg-slate-200 p-1 mb-8 mt-2 pl-6 rounded-lg w-[80vw] lg:w-full focus:outline-teal-500 focus:outline-8"
                    placeholder="Masukan nomor whatsapp"
                    required
                  />
                </div>
                <label htmlFor="" className="text-lg md:text-lg ml-5 md:ml-0">
                  Angkatan
                </label>
                <div className="w-full grid place-items-center">
                  <input
                    value={angkatan}
                    onChange={(e) => setAngkatan(e.target.value)}
                    type="text"
                    className="bg-slate-200 p-1 mb-8 mt-2 pl-6 rounded-lg w-[80vw] lg:w-full focus:outline-teal-500 focus:outline-8"
                    placeholder="Angkatan"
                    required
                  />
                </div>
                <label htmlFor="" className="text-lg md:text-lg ml-5 md:ml-0">
                  Riwayat Penyakit
                </label>
                <div className="w-full grid place-items-center">
                  <input
                    value={penyakit}
                    onChange={(e) => setPenyakit(e.target.value)}
                    type="text"
                    className="bg-slate-200 p-1 mb-8 mt-2 pl-6 rounded-lg w-[80vw] lg:w-full focus:outline-teal-500 focus:outline-8"
                    placeholder="Jika tidak punya riwayat penyakit isi -  "
                    required
                  />
                </div>
                <div className="py-4  max-w-xs  w-[80vw]">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label htmlFor="" className="p-2">
                    Dengan mendaftar makrab berarti saya menyetujui ketentuan
                    dan tata tertib yang telah ditentukan
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    id="btn"
                    className="bg-[#313ED1] p-2 text-white rounded-lg mt-6 hover:bg-[#060e63]"
                    disabled={!isChecked}
                    hidden={!isChecked}
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
