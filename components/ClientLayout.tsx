'use client';

import React from 'react';
import Layout from './Layout';
import LangAttribute from './LangAttribute';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <LangAttribute />
      <Layout>{children}</Layout>
    </>
  );
};

export default ClientLayout; 