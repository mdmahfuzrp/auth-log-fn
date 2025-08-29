import React from "react";
import LoginForm from "../../components/Auth/LoginForm";

const AdminLogin = ({ role }) => {
  return (
    <div>
      <LoginForm role={role} />
    </div>
  );
};

export default AdminLogin;
