import React, { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { getJdById, getJdReport } from "./api";
import PaginationFooter from "../pagination/footerPagination";
import { useLocation } from "react-router-dom";
import JDSection from "./jdDetails";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CandidateTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currJd, setCurrentJd] = useState(null);
  const [rightOpen, setRightOpen] = useState(false); // panel starts closed

  const query = useQuery();
  const jdId = query.get("jdId");

  // fetch candidates + JD
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await getJdReport(0, 5000, jdId);
        const responseForJd = await getJdById(jdId);
        setData(response.data.content || []);
        setCurrentJd(responseForJd.data);
      } catch (err) {
        console.error("Error fetching candidates", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [jdId]);

  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Experience", accessorKey: "experience" },
    { header: "Designation", accessorKey: "designation" },
    { header: "Company", accessorKey: "company" },
    { header: "Location", accessorKey: "location" },
    { header: "Email", accessorKey: "email" },
    {
    header: "CV Score",
    accessorFn: (row) => row.cv_score ?? row.cvScore ?? row.score ?? "-",
    cell: (info) => (
      <span className="font-medium text-gray-700">{info.getValue()}</span>
    ),
  },
    {
      header: () => <div className="text-center w-full">CV</div>,
      accessorKey: "cvpath",
      cell: (info) => (
        <div className="flex justify-center items-center">
          <a
            href={info.getValue()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View
          </a>
        </div>
      ),
    },
  ];

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  const table = useReactTable({
    data,
    columns,
    state: { pagination: { pageIndex, pageSize } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full bg-white p-4 rounded-lg border border-gray-200 relative">
      {/* ---------- Right Panel Toggle Button (only if data exists) ---------- */}
      {data.length > 0 && (
        <button
          onClick={() => setRightOpen((o) => !o)}
          className="absolute top-3 right-3 z-40 p-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {rightOpen ? (
            <ChevronRight size={18} className="text-white" />
          ) : (
            <ChevronLeft size={18} className="text-white" />
          )}
        </button>
      )}

      {/* ---------- Table Container ---------- */}
      <div className="relative">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          {/* Table header with title */}
          {currJd && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Candidate List
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currJd.title} &mdash; Created on{" "}
                {new Date(currJd.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          )}

          <div className="overflow-auto  max-h-[500px]">
            <table className="min-w-full  border-separate border-spacing-0 text-sm">
              {/* Table Head */}
              <thead className="sticky top-0 z-20 bg-gray-100 text-gray-700 shadow-sm">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-2 text-left font-semibold border-b whitespace-nowrap min-w-[140px] bg-gray-100"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              {/* Table Body */}
              <tbody>
                {loading ? (
                  // Skeleton loader
                  Array.from({ length: pageSize }).map((_, i) => (
                    <tr key={`skeleton-${i}`}>
                      {columns.map((col, j) => (
                        <td
                          key={j}
                          className="px-4 py-3 border-b min-w-[140px]"
                        >
                          <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                        </td>
                      ))}
                    </tr>
                  ))
                ) : data.length === 0 ? (
                  // No data message
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-6 text-center text-gray-500"
                    >
                      Report not ready yet. You will be notified once the report is
                      ready via mail.
                    </td>
                  </tr>
                ) : (
                  // Render table rows
                  table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-4 py-2 border-b min-w-[140px]"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination only if data exists */}
          {data.length > 0 && (
            <PaginationFooter
              totalPages={table.getPageCount()}
              currentPage={pageIndex + 1}
              onPageChange={(newPage) => setPageIndex(newPage - 1)}
            />
          )}
        </div>

        {/* Right Panel Overlay (only if data exists) */}
        {data.length > 0 && (
          <AnimatePresence>
            {rightOpen && (
              <motion.div
                key="right-panel"
                initial={{ x: 420 }}
                animate={{ x: 0 }}
                exit={{ x: 420 }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 right-0 h-full w-[420px] bg-gray-50 rounded-lg border border-gray-200 shadow-lg z-30 overflow-auto"
              >
                <div className="p-3 space-y-4">
                  {currJd && <JDSection job={currJd} />}
                  <div className="bg-white rounded-md border p-3 text-sm text-gray-600">
                    <p className="font-medium mb-2">Filters (Coming Soon)</p>
                    <p className="text-xs text-gray-400">
                      You can add filters here later.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default CandidateTable;
