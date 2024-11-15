import { ReactNode } from 'react';

export default function ConsumerLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="superadmin-layout">
      <nav>Consumer Sidebar</nav>
      <main>{children}</main>
    </div>
  );
}
