import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";
import image from "../../assets/logo-makrab.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Inputs";
import Checkbox from "../../components/Inputs/Checkbox";
import { z } from "zod";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

const Daftar = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = z.object({
    nama: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    nim: z
      .string()
      .min(13, { message: "Nim setidak nya harus ada 14 digit" })
      .max(14, { message: "Maksimal karakter nim adalah 14" })
      .includes("4103700", {
        message: "Bukan nim informatika",
      }),
    kelas: z.string().min(1, { message: "Kelas harus di isi" }),
    whatsapp: z
      .string()
      .min(10, { message: "Nomor Whatsapp setidaknya harus 10 karakter" })
      .max(13, { message: "Nomor whatsapp tidak bisa lebih dari 13" }),
    angkatan: z
      .string()
      .min(1, { message: "Angkatan harus diisi" })
      .max(4, { message: "Maksimal 4 karakter" }),
    penyakit: z.string().optional(),
    term: z.literal(true, {
      errorMap: () => ({ message: "Terms dan Condition Harus disetujui" }),
    }),
  });

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      nama: "",
      nim: "",
      kelas: "",
      whatsapp: "",
      angkatan: "",
      penyakit: "",
      term: false,
    },
  });

  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const { nama, nim, kelas, whatsapp, angkatan, penyakit } = data;
    const payload = { nama, nim, kelas, angkatan, penyakit };
    try {
      setLoading(true);
      const { error } = await supabase
        .from("user")
        .insert({ ...payload, wa: whatsapp });
      if (error) {
        setLoading(false);
        MySwal.fire({
          title: "Telah terjadi error",
          text: error.message,
          icon: "error",
        });
      }
      setLoading(false);

      if (!error) {
        navigate("/peserta");
        MySwal.fire({
          title: "Selamat Anda Berhasil terdaftar!",
          text: "Kini anda telah terdaftar di Makrab 2023",
          icon: "success",
        });
      }
    } catch (err) {
      throw err;
    }
  });

  document.title = "Makrab | Register";

  return (
    <div className="flex justify-between items-center w-full h-auto px-8">
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img src={image} />
      </div>
      <div className="w-full md:w-1/2 h-full">
        <h1 className="text-[#0014FF] font-semibold text-3xl text-center">
          <span className="text-[#3FE1A7] px-2">MAKRAB</span> 2023
        </h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-y-3 w-full">
          <Input
            control={control}
            type="text"
            label="Nama"
            required
            name="nama"
            placeholder="Masukan Nama Anda"
          />

          <Input
            control={control}
            type="text"
            label="Nim"
            required
            name="nim"
            placeholder="Masukan Nim Anda"
          />

          <Input
            control={control}
            type="text"
            label="Kelas"
            required
            name="kelas"
            placeholder="Masukan Kelas Anda"
          />

          <Input
            control={control}
            type="number"
            label="No Whatsapp"
            required
            name="whatsapp"
            placeholder="Masukan No Whatsapp Anda"
          />

          <Input
            control={control}
            type="number"
            label="Angkatan"
            required
            name="angkatan"
            placeholder="Masukan Angkatan Anda"
          />

          <Input
            control={control}
            type="text"
            placeholder="isi - jika tidak ada riwayat penyakit"
            name="penyakit"
            label="Riwayat Penyakit"
          />
          <Checkbox name="term" control={control} />

          <button
            id="btn"
            className="bg-[#313ED1] p-2 text-white rounded-lg mt-6 hover:bg-[#060e63] disabled:bg-gray-200 w-full"
            disabled={!isValid}
          >
            {loading ? "Sedang Memproses..." : "Daftar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Daftar;
