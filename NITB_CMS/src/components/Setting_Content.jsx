import styles from './Setting_Content.module.css';
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

function Settings_Content() {
    const [users, setUsers] = useState([
        { id: 1, title: 'Abrar', orderBy: 'abc@example.com' },
        { id: 2, title: 'Afsar', orderBy: 'xyz@example.com' },
        { id: 3, title: 'Arman', orderBy: 'efgh@example.com' },
        { id: 4, title: 'Rehman', orderBy: 'lomp@example.com' },
        { id: 5, title: 'Kashi', orderBy: 'xyz@example.com' },
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [userToEdit, setUserToEdit] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedOrderBy, setEditedOrderBy] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newOrderBy, setNewOrderBy] = useState('');

    const handleDelete = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        setUsers(users.filter(user => user.id !== userToDelete.id));
        setShowDeleteModal(false);
    };

    const handleEdit = (user) => {
        setUserToEdit(user);
        setEditedTitle(user.title);
        setEditedOrderBy(user.orderBy);
        setShowEditModal(true);
    };

    const confirmEdit = () => {
        setUsers(users.map(user => user.id === userToEdit.id ? { ...user, title: editedTitle, orderBy: editedOrderBy } : user));
        setShowEditModal(false);
    };

    const handleAdd = () => {
        setShowAddModal(true);
    };

    const confirmAdd = () => {
        if (newTitle.trim() && newOrderBy.trim()) {
            const newUser = {
                id: users.length + 1,
                title: newTitle,
                orderBy: newOrderBy,
            };
            setUsers([...users, newUser]);
            setShowAddModal(false);
            setNewTitle('');
            setNewOrderBy('');
        }
    };

    return (
        <main id='main' className={styles.main}>
            <div className={`${styles.container} mt-4`}>
                <h2>Settings</h2>
                <div>
                    <button 
                        className={`${styles.add_button} btn btn-success mb-1`} 
                        onClick={handleAdd}
                    >
                        <IoMdAdd /> ADD
                    </button>
                </div>
                <table className={`${styles.table} table table-striped`}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Order By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.title}</td>
                                <td>{user.orderBy}</td>
                                <td>
                                    <button 
                                        className={`${styles.button} btn btn-primary btn-sm me-2`} 
                                        onClick={() => handleEdit(user)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className={`${styles.button} btn btn-danger btn-sm`} 
                                        onClick={() => handleDelete(user)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Delete Confirmation Modal */}
                {showDeleteModal && (
                    <div className={`${styles.modal} modal d-block`} tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button 
                                        type="button" 
                                        className="btn-close" 
                                        onClick={() => setShowDeleteModal(false)} 
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete {userToDelete.title}?</p>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        No
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        onClick={confirmDelete}
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit User Modal */}
                {showEditModal && (
                    <div className={`${styles.modal} modal d-block`} tabIndex="-1">
                        <div className="modal-dialog">
                            <div className={`modal-content ${styles.my_edit_modal}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit User</h5>
                                    <button 
                                        type="button" 
                                        className="btn-close" 
                                        onClick={() => setShowEditModal(false)} 
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={editedTitle} 
                                                onChange={(e) => setEditedTitle(e.target.value)} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Order By</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                value={editedOrderBy} 
                                                onChange={(e) => setEditedOrderBy(e.target.value)} 
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        onClick={() => setShowEditModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={confirmEdit}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Add User Modal */}
                {showAddModal && (
                    <div className={`${styles.modal} modal d-block`} tabIndex="-1">
                        <div className="modal-dialog">
                            <div className={`modal-content ${styles.my_edit_modal}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Add New User</h5>
                                    <button 
                                        type="button" 
                                        className="btn-close" 
                                        onClick={() => setShowAddModal(false)} 
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={newTitle} 
                                                onChange={(e) => setNewTitle(e.target.value)} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Order By</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                value={newOrderBy} 
                                                onChange={(e) => setNewOrderBy(e.target.value)} 
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        onClick={() => setShowAddModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={confirmAdd}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Settings_Content;
