import LoginForm from "../../components/Auth/LoginForm";

const MemberLogin = ({ role }) => {
  return (
    <div>
      <LoginForm role={role} />
    </div>
  );
};

export default MemberLogin;
