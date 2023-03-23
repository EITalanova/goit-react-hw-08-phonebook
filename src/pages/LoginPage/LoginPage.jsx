import { Link } from 'react-router-dom';

import { LoginForm } from 'components/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <p>
        Haven't got an acount yet?
        {<Link to="/signup">Sign up</Link>} now!
      </p>
    </div>
  );
};
