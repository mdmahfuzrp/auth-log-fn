// src/pages/dashboard/AdminDashboard.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { selectUser } from "../../features/auth/authSlice";
import { loadAdminData } from "../../features/auth/dashboardSlice";
import Cards from "../../components/Cards/Cards";
import { adminCardsData } from "../../Data/Data";

const AdminDashboard = () => {
  const user = useSelector(selectUser);
  const { admin, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(loadAdminData(user.id));
    }
  }, [user, dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (!admin) return <Typography>No data found</Typography>;

  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#e57482ff", // stylish blue
          letterSpacing: 1.2,
          textTransform: "uppercase",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          marginTop: "10px",
        }}
      >
        Admin Dashboard
      </Typography>

      <Cards cardsData={adminCardsData} />

      {/* Managed Users Table */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        Managed Users
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admin.managedUsers.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.id}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>{u.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* System Logs */}
      <Typography variant="h6">System Logs</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Log ID</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admin.systemLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.id}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>
                  {new Date(log.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminDashboard;
