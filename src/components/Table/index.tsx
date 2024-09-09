import { cn } from "@/lib/utils";

export type TABLE_COLUMN = {
  title: string;
  dataIndex?: string;
  key: string;
  render?: (text: any, row: any) => JSX.Element | string | null;
  width?: number|string;
  className?: string;
  thClassName?: string;
}

export type TABLE_PROPS = {
  columns: TABLE_COLUMN[];
  dataSource: any[];
  className?: string;
}

const TABLE_ID = 'id'

const Table = ({ columns, dataSource, className }: TABLE_PROPS) => {
  return (
    <table className={cn("w-full table-fixed text-center text-sm", className)}>
      <colgroup>
        {columns.map((col: TABLE_COLUMN) => <col key={col.key} width={col.width} />)}
      </colgroup>
      <thead>
        <tr className="font-roboto font-normal text-sm">
          {columns.map((col: TABLE_COLUMN) => <th key={col.key} className={cn("font-normal p-2", col.thClassName)}>{col.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((row: any) => <tr key={row[TABLE_ID]}>
          {columns.map((col: TABLE_COLUMN) => (
            <td key={col.key} className={cn("p-2", col.className)}>{col.render ? col.render(row[col.dataIndex ?? col.key], row) : row[col.dataIndex ?? col.key]}</td>
          ))}
        </tr>)}
      </tbody>
    </table>
  )
};

export default Table;
