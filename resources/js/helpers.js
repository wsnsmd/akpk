import Swal from 'sweetalert2';

export function delData() {
  const swalDelete = Swal.mixin({
    customClass: {
      confirmButton: 'order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3',
      cancelButton: 'order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3'
    },
    buttonsStyling: false
  })
  
  return swalDelete.fire({
    title: 'Apakah anda yakin??',
    text: "Anda tidak akan dapat mengembalikannya!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal',
    reverseButtons: false
  });
  
}