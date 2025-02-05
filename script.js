const indianAuthors = [
    {"R.K. Narayan": "Malgudi Days"},
    {"Chetan Bhagat": "Five Point Someone"},
    {"Arundhati Roy": "The God of Small Things"},
    {"Rabindranath Tagore": "Gitanjali"},
    {"Khushwant Singh": "Train to Pakistan"},
    {"Amish Tripathi": "The Immortals of Meluha"},
    {"Vikram Seth": "A Suitable Boy"},
    {"Ruskin Bond": "The Room on the Roof"},
    {"Shashi Tharoor": "The Great Indian Novel"},
    {"Rohinton Mistry": "A Fine Balance"},
    {"Jhumpa Lahiri": "The Namesake"},
    {"Aravind Adiga": "The White Tiger"},
    {"R.K. Laxman": "The Common Man's World"},
    {"Sudha Murthy": "Wise and Otherwise"},
    {"Pankaj Mishra": "The Romantics"},
    {"Kiran Desai": "The Inheritance of Loss"},
    {"Manu Joseph": "Serious Men"},
    {"Vikram Chandra": "Sacred Games"},
    {"Ashwin Sanghi": "The Rozabal Line"},
    {"Devdutt Pattanaik": "Jaya: An Illustrated Retelling of the Mahabharata"},
    {"Bharati Mukherjee": "The Tiger's Daughter"},
    {"Kalidasa": "Shakuntala"},
    {"Satyajit Ray": "Feluda Stories"},
    {"Kushal Poddar": "Postmarked Quarantine"},
    {"Rohit Mehta": "Towards Freedom"},
    {"Bibhutibhushan Bandopadhyay": "Pather Panchali"},
    {"Ashok Banker": "Prince of Ayodhya"},
    {"Anuja Chauhan": "The Zoya Factor"},
    {"Madhur Jaffrey": "Climbing the Mango Trees"},
    {"Geetanjali Shree": "Tomb of Sand"}
  ];
  
const foreignAuthors = [
    {"William Shakespeare": "Hamlet"},
    {"Jane Austen": "Pride and Prejudice"},
    {"Charles Dickens": "A Tale of Two Cities"},
    {"Leo Tolstoy": "War and Peace"},
    {"Fyodor Dostoevsky": "Crime and Punishment"},
    {"Victor Hugo": "Les Misérables"},
    {"Mark Twain": "The Adventures of Huckleberry Finn"},
    {"Homer": "The Iliad"},
    {"George Orwell": "1984"},
    {"J.R.R. Tolkien": "The Lord of the Rings"},
    {"Ernest Hemingway": "The Old Man and the Sea"},
    {"F. Scott Fitzgerald": "The Great Gatsby"},
    {"Gabriel García Márquez": "One Hundred Years of Solitude"},
    {"Harper Lee": "To Kill a Mockingbird"},
    {"Franz Kafka": "The Metamorphosis"},
    {"Albert Camus": "The Stranger"},
    {"J.K. Rowling": "Harry Potter and the Sorcerer’s Stone"},
    {"Stephen King": "The Shining"},
    {"Oscar Wilde": "The Picture of Dorian Gray"},
    {"Edgar Allan Poe": "The Raven"},
    {"Emily Brontë": "Wuthering Heights"},
    {"Charlotte Brontë": "Jane Eyre"},
    {"H.G. Wells": "The War of the Worlds"},
    {"Jules Verne": "Twenty Thousand Leagues Under the Sea"},
    {"Ray Bradbury": "Fahrenheit 451"},
    {"George R.R. Martin": "A Game of Thrones"},
    {"Aldous Huxley": "Brave New World"},
    {"John Steinbeck": "The Grapes of Wrath"},
    {"Margaret Atwood": "The Handmaid’s Tale"},
    {"Arthur Conan Doyle": "Sherlock Holmes Series"},
    {"Herman Melville": "Moby-Dick"},
    {"Dante Alighieri": "The Divine Comedy"}
  ];
  
let currentMode = 'indian'; // Default mode is Indian authors

// Registration Form Logic
document.getElementById('registration-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Registration Successful!");
  toggleRegistration();  // Hide registration form after successful registration
});

// Toggle between Registration and Mode Selection
function toggleRegistration() {
  const registrationSection = document.getElementById('registration-section');
  const modeSelectionPage = document.getElementById('mode-selection-page');

  // Toggle visibility of sections
  registrationSection.style.display = registrationSection.style.display === 'none' ? 'block' : 'none';
  modeSelectionPage.style.display = modeSelectionPage.style.display === 'none' ? 'block' : 'none';
}

// Open the Search Page based on selected mode
function openSearchPage(mode) {
  currentMode = mode;
  const modeSelectionPage = document.getElementById('mode-selection-page');
  const searchSection = document.getElementById('search-section');
  
  modeSelectionPage.style.display = 'none';  // Hide mode selection
  searchSection.style.display = 'block';  // Show search section
}

// Search for an author
function searchAuthor() {
  const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
  const authorsList = currentMode === 'indian' ? indianAuthors : foreignAuthors;
  const result = authorsList.find(author => Object.keys(author)[0].toLowerCase() === searchInput);

  if (result) {
    const authorName = Object.keys(result)[0];
    const famousWork = result[authorName];
    document.getElementById('result').textContent = `${authorName}: ${famousWork}`;
  } else {
    document.getElementById('result').textContent = "Author not found!";
  }
}
