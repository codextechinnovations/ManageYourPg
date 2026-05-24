import { CheckCircle2, XCircle } from 'lucide-react'

export function ComparisonTable({ caption, headers, rows }) {
  return (
    <figure className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b-2 border-gray-200">
            {headers.map(h => (
              <th key={h} className="text-left py-3 px-4 font-bold text-gray-900 first:rounded-l-lg last:rounded-r-lg bg-gray-50">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              {row.cells.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

export function ComparisonRow({ label, ours, theirs }) {
  return {
    cells: [
      <span className="font-medium text-gray-900">{label}</span>,
      <span className="flex items-center gap-1.5 text-green-700">
        <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> {ours}
      </span>,
      <span className="flex items-center gap-1.5 text-red-600">
        <XCircle className="w-4 h-4 flex-shrink-0" /> {theirs}
      </span>,
    ],
  }
}
