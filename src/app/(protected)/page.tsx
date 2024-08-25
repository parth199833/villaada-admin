import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MainDashBoard from "@/components/Dashboard/MainDashBoard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <MainDashBoard />
      </DefaultLayout>
    </>
  );
}
