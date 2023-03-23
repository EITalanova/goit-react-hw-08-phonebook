import AddContacts from './AddContacts/AddContacts';
import ContactList from './ContactList/ContactList';
import ContactEll from './ContactEll/ContactEll';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectRefreshing,
} from 'redux/auth/selectors';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';
import { ContactPage } from 'pages/ContactsPage/ContactsPage';
import SingUpPage from 'pages/SingUpPage/SingUpPage';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101',
      }}
    >
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactsPage />} />
              }
            />
            <Route
              path="signup"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SingUpPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}

    </div>
  );
}

export default App;
