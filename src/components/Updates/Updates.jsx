import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import img1 from "../../imgs/img1.png"; // Default avatar if needed
import img2 from "../../imgs/img2.png"; // Default avatar if needed
import img3 from "../../imgs/img3.png"; // Default avatar if needed

const Updates = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Typography variant="body1">No user is logged in.</Typography>;
  }

  // Select image based on role
  const roleImages = {
    admin: img1,
    merchant: img2, // you can use different images per role
    member: img3,
  };

  return (
    <div className="Updates">
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            boxShadow: 3,
            width: 400,
          }}
        >
          <CardMedia
            component="img"
            image={roleImages[user.role] || img1}
            alt={user.role}
            sx={{ width: 80, height: 80, borderRadius: "50%", mr: 2 }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h6">
              {user.name || user.storeName || user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: {user.role}
            </Typography>
            {user.email && (
              <Typography variant="body2" color="text.secondary">
                Email: {user.email}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              Last Login: {new Date(user.profile?.lastLogin).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Updates;
