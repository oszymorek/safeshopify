import AdminNav from '../components/admin/AdminNav';

export const metadata = {
  title: 'SafeShopify Admin',
  description: 'SafeShopify Admin Dashboard',
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
