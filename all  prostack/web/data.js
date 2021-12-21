let employees = [
    { id: 101, name: "praveenkumar", sal: 45000 },
    { id: 102, name: "bennu", sal: 55000 },
  ];
  
  let createEmployee = (emp) => {
    console.log("Test Case123");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        employees.push(emp);
        let flag = true;
        flag ? resolve("inserted") : reject("failure");
      }, 3000);
    });
  };
  let getEmployees = () => {
    setTimeout(() => {
      let rows = "";
      employees.forEach((employee) => {
        rows =
          rows +
          `<tr><td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.sal}</td></tr>`;
      });
      document.getElementById("ram").innerHTML = rows;
    }, 1000);
  };
  createEmployee({ id: 103, name: "raju", sal: 67777 })
    .then((msg) => {
      console.log(msg);
      getEmployees();
    })
    .catch((err) => {
      console.log(err);
    });