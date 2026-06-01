import { useEffect, useState } from "react";
import "./css/adminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    };

    fetchUsers();
  }, []);

  return (
    <section className="admin-users-page">
      <div className="admin-users-head">
        <div>
          <h1>Users</h1>
          <p>Manage registered customers and admin accounts.</p>
        </div>
      </div>

      <div className="admin-users-table-wrapper">
        <table className="admin-users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="user-info">
                    <div className="user-avatar">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>

                    <span className="user-name">
                      {user.name}
                    </span>
                  </div>
                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={
                      user.role === "admin"
                        ? "role-admin"
                        : "role-user"
                    }
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="empty-users">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminUsers;