import {FiX} from "react-icons/fi";
import {Button, Modal, ModalBody, ModalHeader} from "reactstrap";
import {useDeletePost} from "../../hooks/postHooks";

const DeleteModal = ({
                         isOpenDeleteModal,
                         setIsOpenDeleteModal,
                         deleteId
                     }) => {
    const {mutate} = useDeletePost(setIsOpenDeleteModal)
    const handleDeleteModal = () => {
        setIsOpenDeleteModal((state) => !state);
    };

    const handleDeleteUser = async () => {
        const id = await deleteId;
        mutate(id);
    };

    const CloseBtn = (
        <FiX className="cursor-pointer" size={15} onClick={handleDeleteModal}/>
    );

    return (
        <Modal
            isOpen={isOpenDeleteModal}
            className="sidebar-lg"
            contentClassName="p-0 overflow-hidden"
        >
            <ModalHeader close={CloseBtn} tag="div"></ModalHeader>
            <ModalBody className="flex-grow-1 pb-sm-0 pb-3">
                <div className="mb-1 d-flex justify-content-between">
                    Silmək istədiyinizə əminsiniz?
                </div>
                <div className="mb-1 d-flex justify-content-between">
                    <Button color="secondary" outline onClick={handleDeleteModal}>
                        Xeyr
                    </Button>
                    <Button type="submit" color="primary" onClick={handleDeleteUser}>
                        Bəli
                    </Button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default DeleteModal