import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const pageTitle = title ? `${title} | The North` : "The North | Strategic Creative Partner";
  const pageDescription = description || "Scale your in-house creative team with top global talent powered by industry-leading AI workflows.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  );
}
