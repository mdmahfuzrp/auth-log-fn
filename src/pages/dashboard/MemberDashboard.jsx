// src/pages/dashboard/MemberDashboard.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Paper,
  Divider,
  Chip,
  ListItemText,
  ListItem,
  List,
  Grid,
} from "@mui/material";
import { selectUser } from "../../features/auth/authSlice";
import { loadMemberData } from "../../features/auth/dashboardSlice";
import React from "react";

const MemberDashboard = () => {
  const user = useSelector(selectUser);
  const { member, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(loadMemberData(user.id));
    }
  }, [user, dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (!member) return <Typography>No data found</Typography>;

  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1976d2", // stylish blue
          letterSpacing: 1.2,
          textTransform: "uppercase",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          mb: 3, // margin bottom
        }}
      >
        Member Dashboard
      </Typography>

      {/* Points Summary */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
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
          Points Summary
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: "none",
                backgroundColor: "#e3f2fd",
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Total Points
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {member.pointsSummary.totalPoints}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: "none",
                backgroundColor: "#e8f5e9",
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Earned
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="success.main">
                {member.pointsSummary.earned}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: "none",
                backgroundColor: "#ffebee",
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Redeemed
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="error.main">
                {member.pointsSummary.redeemed}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Transactions */}
      <Paper
        sx={{ p: 3, borderRadius: 3, boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}
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
          Transactions
        </Typography>

        <List>
          {member.transactions.map((t) => (
            <React.Fragment key={t.id}>
              <ListItem
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                <ListItemText
                  primary={`${t.merchant}`}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {t.pointsUsed
                          ? `Used ${t.pointsUsed} points`
                          : `Earned ${t.pointsEarned} points`}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(t.timestamp).toLocaleDateString()}
                      </Typography>
                    </>
                  }
                />
                <Chip
                  label={t.pointsUsed ? "Used" : "Earned"}
                  color={t.pointsUsed ? "error" : "success"}
                  size="small"
                />
              </ListItem>
              <Divider sx={{ my: 0.5 }} />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default MemberDashboard;
