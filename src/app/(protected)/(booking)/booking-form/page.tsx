import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import BookingForm from "@/components/Booking/BookingForm";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <h2 className="mb-5 text-title-lg font-extrabold text-black dark:text-white">
        Update Booking Form
      </h2>

      <div className="flex flex-col gap-10">
        <BookingForm />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
