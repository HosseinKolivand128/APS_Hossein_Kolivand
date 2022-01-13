let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

function match(candidate, job) {
  return candidate.minSalary > job.maxSalary ? false : true;
}
console.log(match(job1, candidate1));
