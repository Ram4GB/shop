'use client';
import { FC, useEffect, useState } from 'react';
import { Tables } from '../../../../../database.types';

import { buttonVariants } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ColumnDef, PaginationState, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import OrderDetail from '../OrderDetail';

interface OrderListProps {
  orders: Tables<'orders'>[];
  page: number;
  limit: number;
}

const OrderList: FC<OrderListProps> = ({ orders, limit, page }) => {
  const router = useRouter();
  const columns: ColumnDef<Tables<'orders'>>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'total_amount',
      header: 'Total',
      cell: ({ row }) => {
        return `${row.original.total_amount}.00$`;
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell(props) {
        return props.getValue() === 'Paid' ? (
          <span className="text-white bg-slate-700 p-2 rounded-sm">{props.row.original.status}</span>
        ) : !props.getValue() ? (
          <span className="text-white bg-red-500 p-2 rounded-sm">Pending</span>
        ) : null;
      },
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
      cell(props) {
        return new Date(props.row.original.created_at).toLocaleString();
      },
    },
    {
      header: 'Actions',
      accessorKey: 'id',
      cell(props) {
        return (
          <button
            onClick={() => {
              setSelectedOrder(props.row.original);
              setOpenCart(true);
            }}
            className={cn(buttonVariants({ variant: 'link' }), 'px-0')}
          >
            Details
          </button>
        );
      },
    },
  ];

  const [selectedOrder, setSelectedOrder] = useState<Tables<'orders'> | null>(null);
  const [openCart, setOpenCart] = useState(false);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: page - 1,
    pageSize: limit,
  });

  const table = useReactTable({
    data: orders,
    columns,
    rowCount: 10,
    manualPagination: true,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  useEffect(() => {
    router.push(`/orders?page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  return (
    <div>
      <Table className="min-w-[580px]">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={buttonVariants({
            variant: 'link',
          })}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={buttonVariants({
            variant: 'link',
          })}
        >
          <ChevronRight />
        </button>
      </div>
      <OrderDetail openCart={openCart} order={selectedOrder} setOpenCart={setOpenCart} />
    </div>
  );
};

export default OrderList;
