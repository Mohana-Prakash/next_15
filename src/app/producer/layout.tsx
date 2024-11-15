import { ReactNode } from 'react';

export default function ProducerLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="superadmin-layout">
      <nav>Producer Sidebar</nav>
      <main>{children}</main>
    </div>
  );
}
