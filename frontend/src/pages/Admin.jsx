import { useEffect, useState } from 'react';
import api from '../services/api';
import './css/admin.css';

const statuses = ['Pending','Confirmed','Packed','Shipped','Out For Delivery','Delivered','Cancelled'];

function Admin(){
 const [orders,setOrders]=useState([]);
 const [stats,setStats]=useState({});
 const load=()=>{ api.get('/admin/orders').then(({data})=>setOrders(data.orders)); api.get('/admin/stats').then(({data})=>setStats(data)); };
 useEffect(load,[]);
 const update=async(id,status)=>{ await api.put(`/admin/orders/${id}/status`,{status}); load(); };
 return <section className="admin"><h2>Admin Dashboard</h2><div className="stats"><div><b>{stats.users || 0}</b><span>Users</span></div><div><b>{stats.orders || 0}</b><span>Orders</span></div><div><b>${stats.revenue || 0}</b><span>Revenue</span></div></div><h3>Orders</h3><div className="admin-table">{orders.map(o=><div className="admin-row" key={o._id}><p>#{o._id.slice(-6)}</p><p>{o.user?.name}</p><p>${o.totalAmount}</p><select value={o.status} onChange={e=>update(o._id,e.target.value)}>{statuses.map(s=><option key={s}>{s}</option>)}</select></div>)}</div></section>
}
export default Admin;
