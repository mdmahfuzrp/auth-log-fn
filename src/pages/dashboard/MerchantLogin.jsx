import LoginForm from "../../components/Auth/LoginForm";

const MerchantLogin = ({ role }) => {
  return (
    <div>
      <LoginForm role={role} />
    </div>
  );
};

export default MerchantLogin;
