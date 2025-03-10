'use client';

import React from 'react';
import Layout from './Layout';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default ClientLayout; 