import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";

const Home = () => {
  document.title = "Makrab | Home";

  return (
    <div className="container mx-auto my-24">
      <div className="flex flex-wrap items-center">
        <div className="w-full pt-5">
          <h1
            className="text-[#3FE1A7] text-center text-[2.5rem] font-semibold"
            data-aos="zoom-in"
            data-set-once="true"
            data-aos-duration="500"
          >
            MAKRAB <span className="text-[#0014FF]">2023</span>
          </h1>
        </div>
        <div className="md:flex w-full">
          <div className="pt-9 w-full grid place-items-center">
            <img
              src={background}
              className="object-cover md:w-[30rem] w-[17rem]"
              data-aos="fade-left"
              data-set-once="true"
              data-aos-duration="700"
            />
          </div>
          <div className="grid place-items-center w-full">
            <div className="pt-5 w-[80vw] md:w-[50vw]">
              <p
                className="text-justify md:text-lg"
                data-aos="fade-right"
                data-set-once="true"
                data-aos-duration="900"
              >
                Makrab atau Malam Keakaraban, Merupakan sebuah acara Himpunan
                mahasiswa teknik informatika UNINUS, Dalam acara ini Mahasiswa
                Informatika akan disambut secara hangat oleh kepengurusan
                Himpunan, Dalam makrab kali ini HIMATIF mengambil tema "PURSUE
                CHANGE FROM SOLIDARITY" yang berarti Mengejar perubahan dari
                solidaritas dengan cara membangun kekeluargaan dan sikap
                solidaritas.
              </p>
            </div>
            <div className="w-full grid place-items-center md:grid md:place-items-start mt-7 md:mt-[-1rem]">
              <Link
                to="/daftar"
                className="bg-[#3FE1A7] text-white px-3 py-2 rounded-md hover:bg-[#06d48c]"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
