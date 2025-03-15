import PasswordForm from './LoginForm';
import AdminPage from './AdminPage';
import { cookies } from 'next/headers';

export default async function Admin() {
  const cookieStore = cookies();
  const password = process.env.ADMIN_PASSWORD as string;
  const storedPassword = (await cookieStore).get("password")?.value;

  const authenticated = storedPassword === password;

  return authenticated ? <AdminPage /> : <PasswordForm />;
}