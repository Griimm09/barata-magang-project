import { useState } from 'react';
import UpdateComputers from './UpdateComponent/UpdateComputers'; 
import Pinjam from './UpdateComponent/Pinjam'; 
import PengembalianKantor from './UpdateComponent/PengembalianKantor'; 
import UpdateKaryawan from './UpdateComponent/UpdateKaryawan';
import SerahTerimaAset from './UpdateComponent/SerahTerimaAset';
import DeleteComputers from './UpdateComponent/DeleteComputers';

const UpdateData = () => {
  const [visibleDialog, setVisibleDialog] = useState('');

  const handleUpdate = (type) => {
    setVisibleDialog(type);
  };

  const closeDialog = () => {
    setVisibleDialog('');
  };

  return (
    <div className="flex items-center justify-center p-2 mb-20 mt-40">
      <div className="bg-white p-2 rounded-lg w-full max-w-lg space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Update Data</h1>
        <div className="mt-2 mx-auto w-1/2 sm:w-1/3 lg:w-1/2 h-0.5 bg-gray-300"></div>

        <div className="grid grid-cols-2 gap-6 md:gap-4">
          <button
            className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => handleUpdate('Komputer')}
          >
            Update Komputer
          </button>
          <button
            className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => handleUpdate('Karyawan')}
          >
            Update Karyawan
          </button>
          <button
            className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => handleUpdate('Pinjam')}
          >
            Pinjam Aset
          </button>
          <button
            className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => handleUpdate('DeleteComputers')}
          >
            Delete Komputer
          </button>
          <button
            className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => handleUpdate('PengembalianKantor')}
          >
            Pengembalian Aset Kantor
          </button>
          <button
            className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => handleUpdate('SerahTerimaAset')}
          >
            Serah Terima Aset
          </button>
        </div>
      </div>

      <UpdateComputers
        open={visibleDialog === 'Komputer'}
        handleClose={closeDialog}
      />
      <UpdateKaryawan
        open={visibleDialog === 'Karyawan'}
        handleClose={closeDialog}
      />
      <Pinjam
        open={visibleDialog === 'Pinjam'}
        handleClose={closeDialog}
      />
      <DeleteComputers
        open={visibleDialog === 'DeleteComputers'}
        handleClose={closeDialog}
      />
      <PengembalianKantor
        open={visibleDialog === 'PengembalianKantor'}
        handleClose={closeDialog}
      />
      <SerahTerimaAset
        open={visibleDialog === 'SerahTerimaAset'}
        handleClose={closeDialog}
      />

    </div>
  );
};

export default UpdateData;
