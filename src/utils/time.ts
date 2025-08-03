export const calculateDuration = (start: string, end: string): string => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? new Date() : new Date(end);
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
  
    return `${years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : ""}${remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}` : ""}`.trim();
  };