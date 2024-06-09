// utils.js
export const calculateExperience = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  let totalExperience = '';
  if (years > 0) {
    totalExperience += `${years} tahun`;
    if (months > 0) {
      totalExperience += `, ${months} bulan`;
    }
  } else {
    totalExperience += `${months} bulan`;
  }

  return totalExperience;
};
