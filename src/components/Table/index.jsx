const Table = ({ children }) => {
  return (
    <section className="container  mx-auto pt-24 p-6 font-inter">
      <div className="text-center max-w-md mx-auto md:w-full pb-5">
        <h1 className="text-3xl font-bold">PESERTA MAKRAB</h1>
      </div>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-white  bg-[#020181] uppercase border-b border-gray-600">
                <th className="px-4 py-3">No</th>

                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">NIM</th>
                <th className="px-4 py-3">Kelas</th>
                <th className="px-4 py-3">Angkatan</th>
                <th className="px-4 py-3">Keterangan</th>
              </tr>
            </thead>
            <tbody className="bg-white">{children}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
