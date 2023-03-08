import {useState} from "react";
import DataTable from "react-data-table-component";
import {FiEdit, FiTrash} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import {UncontrolledTooltip} from "reactstrap";
import {useGetPosts} from "../../hooks/postHooks";
import DeleteModal from "../deleteModal";

export const UserTable = () => {
    const navigate = useNavigate()
    const {isLoading, data} = useGetPosts()
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const handleDeleteClick = (id) => {
        setIsOpenDeleteModal(true)
        setDeleteId(id)
    };
    const columns = [
        {
            name: "Ad",
            selector: (row) => row.name,
        },
        {
            name: "Soyad",
            selector: (row) => row.username,
        },
        {
            name: "Telefon",
            selector: (row) => row.phone,
        },
        {
            name: "E-mail",
            selector: (row) => row.email,
        },
        {
            name: "Əməliyyatlar",
            cell: (row) => {
                return (
                    <div className="text-danger">
                        <FiEdit className="me-2" id={`edit-tooltip-${row.id}`} stroke="#44494b"
                                onClick={() => navigate(`/user/${row.id}`)} size={16}/>
                        <UncontrolledTooltip placement="top" target={`edit-tooltip-${row.id}`}>
                            Redaktə et
                        </UncontrolledTooltip>
                        <FiTrash id={`pw-tooltip-${row.id}`} size={16} onClick={() => handleDeleteClick(row.id)}/>
                        <UncontrolledTooltip placement="top" target={`pw-tooltip-${row.id}`}>
                            Sil
                        </UncontrolledTooltip>
                    </div>
                )
            }
        },
    ];
    return (
        <div className="react-dataTable">
            <DataTable
                noHeader
                className="react-dataTable"
                progressPending={isLoading}
                columns={columns}
                data={data}
            />
            <DeleteModal isOpenDeleteModal={isOpenDeleteModal} setIsOpenDeleteModal={setIsOpenDeleteModal}
                         deleteId={deleteId}/>
        </div>
    );
};


