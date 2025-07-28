enum Status {
  Active,
  Inactive,
  Pending,
}

function printStatus(status: Status) {
  console.log("Current status is:", Status[status]);
}

printStatus(Status.Active);
