// Function to handle navigation based on clicked list item
function navigateToPage(pageId) {
    switch (pageId) {
        case 'Project':
            window.location.href = 'contact.html';
            break;
        case 'Contact':
            window.location.href = 'Project.html';
            break;
        default:
            console.log('Invalid page id');
            break;
    }
}

// Event listener for the <ul> list items
document.getElementById("menu").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Check if the clicked element is an <a> tag
    if (event.target.tagName === 'a') {
        var pageId = event.target.id; 
        console.log("Clicked page:", pageId);// Get the id of the clicked <a> tag
        navigateToPage(pageId); // Navigate to the corresponding page
    }
});
