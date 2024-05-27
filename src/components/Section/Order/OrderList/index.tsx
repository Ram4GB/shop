'use client';
import { FC } from 'react';
import { Tables } from '../../../../../database.types';

import { buttonVariants } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface OrderListProps {
  orders: Tables<'orders'>[];
}

const OrderList: FC<OrderListProps> = ({ orders }) => {
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
          <span className="text-white bg-slate-950 p-2">{props.row.original.status}</span>
        ) : !props.getValue() ? (
          () => <span className="text-black bg-red-500 p-2">Pending</span>
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
        return <button className={cn(buttonVariants({ variant: 'link' }), 'px-0')}>Details</button>;
      },
    },
  ];

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
    </div>
  );
};

export default OrderList;
