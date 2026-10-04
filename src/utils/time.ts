/** Parses a "YYYY-MM" string (or "Present") into a month index, avoiding UTC/local timezone drift. */
const toMonthIndex = (value: string): number => {
  if (value === "Present") {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month - 1);
};

const plural = (count: number, unit: string) => `${count} ${unit}${count === 1 ? "" : "s"}`;

/** Formats "YYYY-MM" as e.g. "Jan 2025". */
export const formatMonth = (value: string): string => {
  if (value === "Present") return value;
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

/** Inclusive duration between two "YYYY-MM" dates, e.g. Jun to Aug is "3 months". */
export const calculateDuration = (start: string, end: string): string => {
  const months = toMonthIndex(end) - toMonthIndex(start) + 1;
  if (months <= 0) return "";

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return [years && plural(years, "year"), remainingMonths && plural(remainingMonths, "month")]
    .filter(Boolean)
    .join(" ");
};
