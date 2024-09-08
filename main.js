document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
});

// Sample data for demonstration purposes
const cars = [
    { id: '1', brand: 'Toyota', model: 'Corolla', image: 'https://imgs.search.brave.com/xtikoYwuXfEgI2wX1-3MukgLl5SeVmgOsre4iCHNtwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8xRjBF/Nzc1MTZENUU3NzYy/NzhCMzBEMDc4NEQ2/QjBGMEREOTE3QjRB/MkE0Qzk3QkIyMkYw/Q0NCNUNBODIxM0I1/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMDBU/T0MwNDFCMDIxMDAx/LmpwZw', price: 1500 },
    { id: '2', brand: 'Honda', model: 'Civic', image: 'https://imgs.search.brave.com/qGsJmqdlt1EIVKLtytutucOQJna7w_3YO7aUmKbYf_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS85RDYw/OUU2MUYxRDdENkYy/NDNFRDkwMkZCREND/QUUzOTUwNTE0NkFD/MTg2RUE5QjU0RUUx/MzEwOTFEOEZERTlB/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDOTBI/T0MwMjFBMTIxMDAx/LmpwZw', price: 1800 },
    { id: '3', brand: 'Ford', model: 'Mustang', image: 'https://imgs.search.brave.com/miqVTMhCI57z18JlArKEZ3hlUMb8gUAluI013pgr2h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8wNTJE/RDg2QjdERThEQzg5/NzNBMEI5QzhGMTBC/MDRERjY2MEVBNzlG/MzIwQ0MxMTM5NkY0/NkVDRUE1QTlDNURD/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBG/T0MwNTFBMDIxMDAx/LmpwZw', price: 4500 },
    { id: '4', brand: 'Chevrolet', model: 'Camaro', image: 'https://imgs.search.brave.com/tcMuDO0swubQzYz3eEwJSRClPCEKT7I7D7vNwf0ElvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8zNDc3/ODk5OUI4QkNFMEYx/RTU1OEQ3RjBCQUMz/MUQzNTY0RDc2Q0RF/NkY3MkYyNUFDNTM2/QzM3NTZDNzI4NjlF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDOTBD/SEMwMjFDMDIxMDAx/LmpwZw', price: 2500 },
    { id: '5', brand: 'BMW', model: '3 Series', image: 'https://imgs.search.brave.com/v4aR-A9oyG3kkX9Z9-QKL5IZn0nJ-OTwcJa29OV4hrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/LmtlbGxleWJsdWVi/b29raW1hZ2VzLmNv/bS9rYmIvYmFzZS9l/dm94L0NQLzUxOTI0/LzIwMjUtQk1XLTMl/MjBTZXJpZXMtZnJv/bnRfNTE5MjRfMDMy/XzE4Mjl4NzQ1XzY2/OF9jcm9wcGVkLnBu/Zz9kb3duc2l6ZT03/NTA6Kg', price: 3000 },
    { id: '6', brand: 'Audi', model: 'A4', image: 'https://imgs.search.brave.com/jvkv78kpMOMQ9Ph5T8EwneD6-wRmoVz-sd5zRlYZwWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS83Mjcy/NzM0RkY2OTIxREJB/ODFEMEI4RkQxMERG/MDAzOUUwOTc3NDRF/QkQ4QjM2NUU4MTMw/MEIwMERBMDMxNTMy/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMzBB/VUMwMTdBMDIxMDAx/LmpwZw', price: 3200 },
    { id: '7', brand: 'Mercedes', model: 'C-Class', image: 'https://imgs.search.brave.com/mC4ozzHnx9RMGTj67it_ESpH3BxJlPn8cytD363cSO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8wNzNC/Q0FCRjMyOTI2RkJF/MUNCOEE1Q0IwRDJB/ODg3ODU1REQzNjNB/RkExOEFEN0VEQzk2/RjE3QUM4Mjk0QjA4/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDNjBN/QkM4OTFBMDIxMDAx/LmpwZw', price: 3500 },
    { id: '8', brand: 'Nissan', model: 'Altima', image: 'https://imgs.search.brave.com/rJQLinlKKhIS7ApyNIxJzGndthbiw2-_UyhsvsNSXuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS85NzVG/QzY4MkVDNDY2MkRB/NjcyMkUyRUM5QzEw/NjY0QzAzODFCNkI3/QzgzMTE0NzA5MjA5/QUYzOTNBNkU5QUQy/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMzBO/SUMwNDFBMDIxMDAx/LmpwZw', price: 1700 },
    { id: '9', brand: 'Hyundai', model: 'Elantra', image: 'https://imgs.search.brave.com/lsxxoZrCsQWJFuWRm3Q1BvdpnikZZsntscXGps44fho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS5jc3RhdGlj/LWltYWdlcy5jb20v/aW4vdjIvc3RvY2tf/cGhvdG9zLzcxNjQy/YzU0LTM5MWUtNDYw/My1iODE5LTgzYWFh/ZDE3ZDI5Ni8yZjg4/ZTE4YS0zYzNiLTRj/NTEtYWRkZS1jNzYw/ZGY3NzllMTkucG5n', price: 1600 },
    { id: '10', brand: 'Kia', model: 'Optima', image: 'https://imgs.search.brave.com/ZPOdZs1aJknCd7dJkZzYrFwKu0J7ohv4jwIszodKXB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS82MjM5/NzZFNzFCMkM3RjZE/NzhCREJFQkYyNkMy/MkQzNDZDNjgzRDUy/MkYzOTlENUQ2NUM3/NEVCNDg2Nzk5NjVB/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDNjBL/SUMwNTJDMDIxMDAx/XzIuanBn', price: 1800 },
    { id: '11', brand: 'Volkswagen', model: 'Jetta', image: 'https://imgs.search.brave.com/7nGPHmAnt6RzGx4Eq20xZxqtIZ-qh7JpYWj3u_N9WNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8yMzJE/QUNGMEE5OUQ3ODgy/OTdGN0YzOTEyMkE5/QzBERTJDQzY2MTk5/MkZENTk2RTNGNjRB/NDg2OEJEM0E1QUM4/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDOTBW/V0MwMzNDMDIxMDAx/LmpwZw', price: 2000 },
    { id: '12', brand: 'Subaru', model: 'Legacy', image: 'https://imgs.search.brave.com/kgKJ9AfSxOIMpP4D0GCAaCc37vQ1sXrN7_Ft3Xb95UE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS82N0FE/NkUyQ0E4NEU4MzQ5/MzUwMzhDRDJFMDQ3/RTBCRDNFQzBCNjlD/NDI0QUFENkFFNjBB/RjFBN0Y3RTIyQzAy/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvQ0FEMDBT/VUMwMTFBMDIxMDAx/LmpwZw', price: 2100 }
];

function searchCar() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const searchResults = document.getElementById('searchResults').querySelector('.grid');
    searchResults.innerHTML = ''; // Clear previous search results

    const filteredCars = cars.filter(car =>
        car.brand.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
    );

    filteredCars.forEach(car => {
        searchResults.innerHTML += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                <div class="car-details">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Car ID: ${car.id}</p>
                    <p>Rent for ₹${car.price}/day</p>
                </div>
            </div>
        `;
    });

    if (filteredCars.length === 0) {
        searchResults.innerHTML = '<p>No cars found.</p>';
    }
}

function rentCar() {
    const carId = document.getElementById('rentCarId').value;
    const days = document.getElementById('rentDays').value;
    const rentalResponse = document.getElementById('rentalResponse');
    
    const car = cars.find(car => car.id === carId);
    
    if (car) {
        const totalCost = car.price * days;
        rentalResponse.innerHTML = `You have successfully rented the ${car.brand} ${car.model} for ${days} days. Total cost: ₹${totalCost}.`;
    } else {
        rentalResponse.innerHTML = 'Car ID not found.';
    }
}

function returnCar() {
    const carId = document.getElementById('returnCarId').value;
    const returnResponse = document.getElementById('rentalResponse');
    
    const car = cars.find(car => car.id === carId);
    
    if (car) {
        returnResponse.innerHTML = `The ${car.brand} ${car.model} has been successfully returned.`;
    } else {
        returnResponse.innerHTML = 'Car ID not found.';
    }
}

// Populate the Rent a Car section with car cards
document.addEventListener('DOMContentLoaded', () => {
    const rentCarGrid = document.querySelector('#rentCar .grid');
    cars.forEach(car => {
        rentCarGrid.innerHTML += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                <div class="car-details">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Car ID: ${car.id}</p>
                    <p>Rent for ₹${car.price}/day</p>
                </div>
            </div>
        `;
    });
});
