// src/pages/dashboard/MerchantDashboard.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import { selectUser } from "../../features/auth/authSlice";
import { loadMerchantData } from "../../features/auth/dashboardSlice";

const MerchantDashboard = () => {
  const user = useSelector(selectUser);
  const { merchant, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(loadMerchantData(user.id));
    }
  }, [user, dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (!merchant) return <Typography>No data found</Typography>;

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
        }}
      >
        Merchant Dashboard
      </Typography>
      {/* Purchases Table */}
      <Typography variant="h6">Purchases</Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchant.purchases.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.customer}</TableCell>
                <TableCell>{p.amount}</TableCell>
                <TableCell>{p.status}</TableCell>
                <TableCell>
                  {p.status === "pending" && (
                    <Button variant="contained">Approve</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Notifications */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mt: 3,
          borderRadius: 2,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#1976d2",
            letterSpacing: 0.5,
          }}
        >
          Notifications
        </Typography>

        <List>
          {merchant.notifications.map((n) => (
            <ListItem
              key={n.id}
              sx={{
                mb: 1,
                borderRadius: 1,
                backgroundColor: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <ListItemText
                primary={n.message}
                secondary={
                  <Chip
                    label={n.status}
                    color={n.status === "unread" ? "error" : "success"}
                    size="small"
                  />
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default MerchantDashboard;
