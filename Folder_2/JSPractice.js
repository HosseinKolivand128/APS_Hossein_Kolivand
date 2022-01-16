let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

function match(candidate, job) {
  console.log(job.maxSalary + "&&&" + candidate.minSalary);
  if (!candidate.minSalary || !job.maxSalary) throw "not valid";
  return candidate.minSalary * 0.9 <= job.maxSalary ? true : false;
}
console.log(match(candidate1, job1));
