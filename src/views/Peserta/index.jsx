import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
const Peserta = () => {
  const [peserta_makrab, setPesertaMakrab] = useState([]);

  useEffect(() => {
    getPeserta_makrab();
  }, []);

  const getPeserta_makrab = async () => {
    try {
      const res = await supabase.from("user").select();
      setPesertaMakrab(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  document.title = "Makrab | Peserta";

  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="text-center max-w-md mx-auto md:w-full">
          <h1 className="text-3xl font-bold">PESERTA MAKRAB</h1>
        </div>

        <div className="mx-auto md:w-full">
          <div className="my-6 flex justify-center">
            <table className="border-2 border-[#020181] shadow-sm overflow-auto">
              <thead className="border-b-2 border-[#020181] bg-[#020181]">
                <tr className="text-white">
                  <th className=" py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                    No
                  </th>
                  <th className=" py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                    Name
                  </th>
                  <th className=" py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                    NIM
                  </th>
                  <th className=" py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                    Kelas
                  </th>
                  <th className=" py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                    Angkatan
                  </th>
                  <th className=" py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                {peserta_makrab &&
                  peserta_makrab.length > 0 &&
                  peserta_makrab.map((peserta, index) => (
                    <tr key={index} className="text-teal-900">
                      <td className="py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                        {index + 1}
                      </td>
                      <td className="py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                        {peserta.nama}
                      </td>
                      <td className="py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                        {peserta.nim}
                      </td>
                      <td className="py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                        {peserta.kelas}
                      </td>
                      <td className="py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                        {peserta.angkatan}
                      </td>
                      <td className="py-3 lg:px-9 text-sm md:text-lg lg:text-xl p-2">
                        {peserta.pembayaran == "lunas"
                          ? "Lunas"
                          : peserta.pembayaran == "belum"
                          ? "Belum Lunas"
                          : "Belum Bayar"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peserta;
