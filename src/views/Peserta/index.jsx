import { useState, useEffect, lazy, Fragment } from "react";
import { supabase } from "../../supabase";
const Table = lazy(() => import("../../components/Table"));
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
    <Fragment>
      <Table>
        {peserta_makrab &&
          peserta_makrab.length > 0 &&
          peserta_makrab.map((el, i) => (
            <tr key={i} className="text-gray-700 ">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <p className="font-semibold text-black">{i + 1}</p>
                </div>
              </td>
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <p className="font-semibold text-black">{el.nama}</p>
                </div>
              </td>
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <p className="font-semibold text-black">{el.nim}</p>
                </div>
              </td>
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <p className="font-semibold text-black">{el.kelas}</p>
                </div>
              </td>
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <p className="font-semibold text-black">{el.angkatan}</p>
                </div>
              </td>
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <p className="font-semibold text-black">
                    {el.pembayaran == "lunas"
                      ? "Lunas"
                      : el.pembayaran == "belum"
                      ? "Belum Lunas"
                      : "Belum Bayar"}
                  </p>
                </div>
              </td>
            </tr>
          ))}
      </Table>
    </Fragment>
  );
};

export default Peserta;
