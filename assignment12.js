
document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.getElementById("cms-data");

    // Load CMS information from the external JSON file
    fetch("cms.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Unable to load CMS data.");
            }

            return response.json();
        })
        .then(function (cmsList) {

            // Clear the loading message
            tableBody.innerHTML = "";

            // Create a row for each CMS
            cmsList.forEach(function (cms) {

                const row = document.createElement("tr");

                function addCell(content) {
                    const cell = document.createElement("td");
                    cell.textContent = content;
                    row.appendChild(cell);
                }

                function addListCell(items) {
                    const cell = document.createElement("td");
                    const list = document.createElement("ul");

                    items.forEach(function (item) {
                        const listItem = document.createElement("li");
                        listItem.textContent = item;
                        list.appendChild(listItem);
                    });

                    cell.appendChild(list);
                    row.appendChild(cell);
                }

                // CMS name
                addCell(cms.name);

                // Producer or support organization
                addCell(cms.support);

                // Technology stack
                addCell(cms.technology);

                // Major capabilities
                addListCell(cms.capabilities);

                // Major limitations
                addListCell(cms.limitations);

                // Example website and research source
                const exampleCell = document.createElement("td");

                const exampleLink = document.createElement("a");
                exampleLink.href = cms.example;
                exampleLink.textContent = "Example Site";
                exampleLink.target = "_blank";
                exampleLink.rel = "noopener noreferrer";

                const sourceLink = document.createElement("a");
                sourceLink.href = cms.source;
                sourceLink.textContent = "Research Source";
                sourceLink.target = "_blank";
                sourceLink.rel = "noopener noreferrer";

                exampleCell.appendChild(exampleLink);
                exampleCell.appendChild(document.createElement("br"));
                exampleCell.appendChild(sourceLink);

                row.appendChild(exampleCell);

                // Add completed row to the table
                tableBody.appendChild(row);

            });

        })
        .catch(function (error) {

            console.error("CMS loading error:", error);

            tableBody.innerHTML = "";

            const row = document.createElement("tr");
            const cell = document.createElement("td");

            cell.colSpan = 6;
            cell.textContent =
                "Unable to load CMS information. Please try again.";

            row.appendChild(cell);
            tableBody.appendChild(row);

        });

});
