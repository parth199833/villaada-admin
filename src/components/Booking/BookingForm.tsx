"use client";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import flatpickr from "flatpickr";
import Link from "next/link";
import { useEffect, useState } from "react";

const BookingForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isTaxesChecked, setIsTaxesChecked] = useState(false);
  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-datepicker", {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);
  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Booking Form
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 ms-11 flex flex-col gap-6 ">
              <div className="flex w-full flex-row items-center justify-start gap-5">
                <p className="text-md mb-3 block w-50 font-extrabold text-black dark:text-white">
                  iCall URL
                </p>
                <p className="text-md mb-3 block w-96 font-medium text-black dark:text-white">
                  https://villaadaalmare.com/admin/add_calandar_data/1
                </p>
                <button className="flex justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Copy URL
                </button>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-5">
                <p className="text-md mb-3 block w-50 font-extrabold text-black dark:text-white">
                  iCall URL Website Data
                </p>
                <p className="text-md mb-3 block w-96 font-medium text-black dark:text-white">
                  https://villaadaalmare.com/admin/wesite_data/2
                </p>
                <button className="flex justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Copy URL
                </button>
              </div>
            </div>
            <hr className="mb-4.5 text-stroke dark:text-white" />
            <div>
              <div className="mb-4.5 flex flex-row items-center">
                <p className="text-md mb-3 block w-40 font-extrabold text-black dark:text-white">
                  Calender Links
                </p>
                <button className="flex justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Add URL
                </button>
              </div>
              <div className="ms-11">
                <div className="mb-3.5 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block w-1/6 font-extrabold text-black dark:text-white ">
                    Name
                  </p>
                  <input
                    type="text"
                    placeholder="Enter The Name"
                    className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-3.5 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block w-1/6 font-extrabold text-black dark:text-white ">
                    Link
                  </p>
                  <input
                    type="text"
                    placeholder="Enter The URL"
                    className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-3.5 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block w-1/6 font-extrabold text-black dark:text-white">
                    Name
                  </p>
                  <input
                    type="text"
                    placeholder="Enter The Name"
                    className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-10 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block w-1/6 font-extrabold text-black dark:text-white">
                    Link
                  </p>
                  <input
                    type="text"
                    placeholder="Enter The URL"
                    className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <button className="hover:text-primary">
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <hr className="mb-4.5 text-stroke dark:text-white" />
            <div>
              <div className="mb-4.5 flex flex-row items-center">
                <p className="text-md mb-3 block w-40 font-extrabold text-black dark:text-white">
                  Blocked Dates
                </p>
                <button className="flex justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Add Date
                </button>
              </div>
              <div className="ms-11">
                <div className="mb-10 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block font-extrabold text-black dark:text-white">
                    From
                  </p>
                  <div className="relative">
                    <input
                      className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      placeholder="mm/dd/yyyy"
                      data-class="flatpickr-right"
                    />

                    <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                          fill="#64748B"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-md mb-3 block  font-extrabold text-black dark:text-white">
                    To
                  </p>
                  <div className="relative">
                    <input
                      className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      placeholder="mm/dd/yyyy"
                      data-class="flatpickr-right"
                    />

                    <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                          fill="#64748B"
                        />
                      </svg>
                    </div>
                  </div>
                  <button className="hover:text-primary">
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <hr className="mb-4.5 text-stroke dark:text-white" />
            <div className="ms-11 gap-6">
              <div className="mb-10 flex w-full flex-row items-center justify-start gap-5">
                <p className="text-md mb-3 block w-1/3 font-extrabold text-black dark:text-white sm:w-[15%]">
                  Unit Prise
                </p>
                <input
                  type="number"
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary sm:w-1/6"
                />
                <p className="text-md mb-3 block w-1/3 font-extrabold  text-black dark:text-white sm:w-[15%]">
                  Prise per Weak
                </p>
                <input
                  type="number"
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary sm:w-1/6"
                />
                <p className="text-md mb-3 block w-1/2 font-extrabold  text-black dark:text-white sm:w-[15%]">
                  Prise per Month
                </p>
                <input
                  type="number"
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary sm:w-1/6"
                />
              </div>
              <div className="mb-10 flex w-full flex-row items-center justify-start gap-5">
                <p className="text-md mb-3 block w-1/2 font-extrabold text-black dark:text-white sm:w-[15%]">
                  Friday Pricing
                </p>
                <input
                  type="number"
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary sm:w-1/6"
                />
                <p className="text-md mb-3 block w-[15%] font-extrabold text-black dark:text-white">
                  Saturday Pricing
                </p>
                <input
                  type="number"
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary sm:w-1/6"
                />
                <p className="text-md mb-3 block  w-[15%]  font-extrabold text-black dark:text-white">
                  Sunday Pricing
                </p>
                <input
                  type="number"
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary sm:w-1/6"
                />
              </div>
            </div>
            <hr className="mb-4.5 text-stroke dark:text-white" />
            <div className="mb-10">
              <div className="mb-4.5">
                <label
                  htmlFor="checkboxLabel"
                  className="flex cursor-pointer select-none items-center font-extrabold"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxLabel"
                      className="sr-only"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                    <div
                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                        isChecked &&
                        "border-primary bg-gray dark:bg-transparent"
                      }`}
                    >
                      <span
                        className={`opacity-0 ${isChecked && "!opacity-100"}`}
                      >
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            strokeWidth="0.4"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  Minimum Number of Night
                </label>
              </div>
              <div className="ms-11">
                <div className="mb-3.5 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block w-1/4 font-extrabold text-black dark:text-white md:w-1/6">
                    Number of Night
                  </p>
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary md:w-1/4"
                  />
                </div>
              </div>
            </div>
            <hr className="mb-4.5 text-stroke dark:text-white" />
            <div className="mb-10">
              <div className="mb-4.5 flex flex-row items-center">
                <p className="text-md mb-3 block w-40 font-extrabold text-black dark:text-white">
                  Taxes per Stay
                </p>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-1/2 rounded border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary md:w-1/4"
                />
              </div>
              <div className="ms-11">
                <div className="mb-3.5 flex w-full flex-row items-center justify-start gap-5">
                  <p className="text-md mb-3 block w-1/6 font-extrabold text-black dark:text-white">
                    Taxes Type
                  </p>
                  <div className="flex flex-row gap-5">
                    <label
                      htmlFor="checkboxLabelTax"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelTax"
                          className="sr-only"
                          onChange={() => {
                            setIsTaxesChecked(!isTaxesChecked);
                          }}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                            isTaxesChecked && "border-primary"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                              isTaxesChecked && "!bg-primary"
                            }`}
                          >
                            {" "}
                          </span>
                        </div>
                      </div>
                      $
                    </label>
                    <label
                      htmlFor="checkboxLabelTax"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelTax"
                          className="sr-only"
                          onChange={() => {
                            setIsTaxesChecked(!isTaxesChecked);
                          }}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                            isTaxesChecked && "border-primary"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                              isTaxesChecked && "!bg-primary"
                            }`}
                          >
                            {" "}
                          </span>
                        </div>
                      </div>
                      %
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <button className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Submit
              </button>
              <button className="flex justify-center rounded bg-danger p-3 font-medium text-gray hover:bg-opacity-90">
                <Link href="/booking-main">Cancel</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookingForm;
