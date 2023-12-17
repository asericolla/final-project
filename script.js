function showProjects() {
    var contentElement = document.getElementById('content');
    
    contentElement.innerHTML = `
        <ul>
            <li>Evaluate and process consigned loan applications in accordance with established guidelines and regulations in the financial system in Brazil.</li>
            <li>Built new functionalities in the multi-brand acquiring system (Visa, Mastercard, Diners, Elo).</li>
            <li>Participated in the evolution of the debt renegotiation platform in Itaú Unibanco Bank. </li>
        </ul>
    `;
}

function showResume() {
    var contentElement = document.getElementById('content');
    
    contentElement.innerHTML = `
        <p>IT professional with more than 14 years of experience in information system developer in the finance field, such as: loan, acquiring, debt renegotiation, accountability and bank compensation.</p>
        <ul>
            <li>Experience in systems development, maintenance, project management (agile and cascade) and system testing.</li>
            <li>Technical knowledge: z/OS, TSO, COBOL, DB2, VSAM, JCL, Easytrieve, Control-M, IMS and CICS.</li>
        </ul>
    `;
}

    function displayHobbies() {
        var hobbiesList = [
            "Watching Movies",
            "Reading",
            "Traveling",
            "Photography",         
            "Cooking"
        ];
    
        var contentElement = document.getElementById('content');    
        contentElement.innerHTML = "<p>My Hobbies:</p><ul>";
        hobbiesList.forEach(function (hobby) {
            contentElement.innerHTML += "<li>" + hobby + "</li>";
        });    
        contentElement.innerHTML += "</ul>";
    }
    