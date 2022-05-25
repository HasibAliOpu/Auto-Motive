import Swal from "sweetalert2";

const DeleteModal = (url, refetch) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "btn bg-red-600 hover:bg-red-700 border-none text-white mr-3",
      cancelButton:
        "btn bg-green-500 hover:bg-green-600 border-none text-white",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this Product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {
        // fetch for delete part
        fetch(url, {
          method: "DELETE",
        });
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Product has been Deleted.",
          "success"
        );
        refetch();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Product not Deleted!",
          "Your Product is safe :)",
          "info"
        );
      }
    });
};

export default DeleteModal;
