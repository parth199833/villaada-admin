import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import BookingTable from "@/components/Booking/BookingTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BookingMainPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Booking Table" />

      <div className="flex flex-col gap-10">
        <BookingTable />
      </div>
    </DefaultLayout>
  );
};

export default BookingMainPage;
