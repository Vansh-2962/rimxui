import { Typography } from "@/components/Typography";

interface PropDetail {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

interface PropTableConfig {
  title: string;
  props: PropDetail[];
}

interface ShowcaseAPIReferenceProps {
  title?: string;
  propTables: PropTableConfig[];
}

export const ShowcaseAPIReference: React.FC<ShowcaseAPIReferenceProps> = ({
  title = "API Reference",
  propTables,
}) => {
  return (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        {title}
      </Typography>

      <div className="space-y-6">
        {propTables.map((table, index) => (
          <div key={index}>
            <Typography type="heading" level={3} variant="default" size="lg">
              {table.title}
            </Typography>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 table-fixed">
                <colgroup>
                  <col className="w-1/6" />
                  <col className="w-2/6" />
                  <col className="w-1/6" />
                  <col className="w-2/6" />
                </colgroup>
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {table.props.map((prop, propIndex) => (
                    <tr key={propIndex}>
                      <td className="px-6 py-4 text-sm font-medium">
                        {prop.name}
                      </td>
                      <td className="px-6 py-4 text-sm break-words">
                        {prop.type}
                      </td>
                      <td className="px-6 py-4 text-sm">{prop.defaultValue}</td>
                      <td className="px-6 py-4 text-sm">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
