import Papa from "papaparse";

export function parseCsv<T>(csvContent: string): T[] {
  if (!csvContent || typeof csvContent !== "string") {
    return [];
  }

  const result = Papa.parse<Record<string, string>>(csvContent.trim(), {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false,
  });

  if (result.errors && result.errors.length > 0) {
    console.warn("CSV parsing warning:", result.errors);

    result.errors.forEach((error, index) => {
      console.warn(`CSV Error #${index + 1}:`, {
        type: error.type,
        code: error.code,
        message: error.message,
        row: error.row,
      });
    });
  }

  return (result.data || []) as unknown as T[];
}
