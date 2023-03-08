import { ReactNode } from 'react';

const Table = (props: { headerCols: ReactNode[]; data: ReactNode[][] }) => {
  return (
    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {props.headerCols.map((col, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-5 py-3 text-md font-bold text-left text-white uppercase bg-secondary-400 border-b border-gray-200"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {props.data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-5 py-2 text-sm bg-white border-b border-gray-200"
                      >
                        <p className="text-gray-900 whitespace-no-wrap">
                          {col}
                        </p>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Table };
