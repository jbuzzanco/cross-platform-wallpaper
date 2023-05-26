// Airtable API endpoint
const airtableEndpoint = 'https://api.airtable.com/v0/appHN0lKBZoaOIzm6/tblzz82Um8taIF6WE';

// Airtable bearer token
const bearerToken = process.env.BEARER_TOKEN;

// Fetch data from Airtable with bearer token
fetch(airtableEndpoint, {
    headers: {
        'Authorization': `Bearer ${bearerToken}`
    }
})
    .then(response => response.json())
    .then(data => {
        // Get the gallery container element
        const galleryContainer = document.getElementById('galleryContainer');

        // Loop through the data and create HTML elements to display the data
        data.records.forEach(record => {
            const { Name, 'Background-Img': BackgroundImg } = record.fields;

            // Create a new gallery item element
            const galleryItem = document.createElement('div');
            galleryItem.className = 'col-md-4 col-sm-6 col-12';
            galleryItem.innerHTML = `
                <div class="card">
                    <img src="${BackgroundImg[0].url}" alt="${Name}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${Name}</h5>
                    </div>
                </div>
            `;

            // Add a click event listener to the gallery item
            galleryItem.addEventListener('click', () => {
                // Send a message to the main process to set the wallpaper
                window.electron.ipcRenderer.send('set-wallpaper', BackgroundImg[0].url);
            });

            // Append the gallery item to the gallery container
            galleryContainer.appendChild(galleryItem);
        });
    })
    .catch(error => console.error('Error fetching data from Airtable:', error));
