export const daysAgo = (dateString: string) => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - givenDate.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return `${Math.floor(diffInDays)} days ago`; // Return the number of days, rounded down
};
