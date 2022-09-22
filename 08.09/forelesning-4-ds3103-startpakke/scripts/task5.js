const departmentSelect = document.querySelector("#department");
const option = document.querySelector("option");
const searchBtn = document.querySelector("#search-btn");
const outputDiv = document.querySelector("#output-div");

const employeeArray = [
    {firstName: "Malin", surName: "Granly", department: "IT"},
    {firstName: "Helene", surName: "Bjerke", department: "Marketing"},
    {firstName: "Trym", surName: "Frøystein", department: "IT"},
    {firstName: "Marc", surName: "Jacobs", department: "Marketing"},
    {firstName: "Bettina", surName: "Spaghetti", department: "Marketing"},
    {firstName: "Nahom", surName: "Gebrelul", department: "IT"},
    {firstName: "Toby", surName: "Flenderson", department: "HR"}
];

const getEmployeeByDepartment = () => {
    let employeeByDepartment = employeeArray.filter(
        employee => employee.department === departmentSelect.value
    );
    return employeeByDepartment;
}

const printEmployees = ( array ) => {
    let htmlTxt = "";

    array.forEach( employee => { 
        htmlTxt += `
            <article>
                <h3>${employee.firstName} ${employee.surName}</h3>
                <p>Avdeling: ${employee.department}</p>
            </article>
        `;
    } )

    outputDiv.innerHTML = htmlTxt;
}

searchBtn.addEventListener('click', () => printEmployees(getEmployeeByDepartment()));
