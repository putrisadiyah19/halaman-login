const movies = [
    { title: "Avatar (2009)", description: "Mantan marinir Jake Sully menjelajahi dunia Pandora dan terlibat dalam konflik antara manusia dan Na'vi.", image: "assets/avatar.jpg", rating: "★★★★☆" },
    { title: "Avengers: Endgame (2019)", description: "Para pahlawan Marvel bersatu untuk mengalahkan Thanos dan membalikkan kerusakan yang ditimbulkan.", image: "assets/avengers-endgame.jpg", rating: "★★★☆☆" },
    { title: "Avatar: The Way of Water (2022)", description: "Jake dan Neytiri melindungi keluarga mereka dari ancaman baru di dunia air Pandora.", image: "assets/avatar-the-way-of-water.webp", rating: "★★★★★" },
    { title: "Titanic (1997)", description: "Kisah cinta antara Jack dan Rose di tengah tragedi tenggelamnya kapal Titanic.", image: "assets/titanic.jpg", rating: "★★★★☆" },
    { title: "Star Wars: Episode VII - The Force Awakens (2015)", description: "Rey berjuang melawan First Order dan mencari Luke Skywalker yang hilang.", image: "assets/star-wars-the-force-awakens.jpg", rating: "★★★☆☆" },
    { title: "Avengers: Infinity War (2018)", description: "Para pahlawan Marvel berjuang melawan Thanos untuk menyelamatkan alam semesta.", image: "assets/avengers-infinity-war.jpg", rating: "★★★★☆" },
    { title: "Spider-Man: No Way Home (2021)", description: "Peter Parker menghadapi konsekuensi setelah identitasnya terungkap dan multiverse terbuka.", image: "assets/spiderman-no-way-home.jpg", rating: "★★★★★" },
    { title: "Inside Out 2 (2024)", description: "Emosi Riley menghadapi tantangan baru saat dia beranjak remaja.", image: "assets/inside-out-2.jpg", rating: "★★★★★" },
    { title: "Jurassic World (2015)", description: "Dinosaurus baru yang berbahaya melarikan diri dari taman, menciptakan kekacauan.", image: "assets/jurassic-world.jpg", rating: "★★☆☆☆" },
    { title: "The Lion King (2019)", description: "Simba belajar mengambil alih takhta setelah kehilangan ayahnya, Mufasa.", image: "assets/the-lion-king.jpg", rating: "★★★★☆" },
    { title: "The Matrix (1999)", description: "Neo menyadari dunia yang ia kenal adalah simulasi dan berjuang melawan mesin.", image: "assets/the-matrix.jpg", rating: "★★★★☆" },
    { title: "Inception (2010)", description: "Cobb melakukan 'inception' untuk menanamkan ide dalam mimpi orang lain.", image: "assets/inception.jpg", rating: "★★★★★" }
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <div class="d-flex">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="rating">${movie.rating}</p>
                        <p class="card-text">${movie.description}</p>
                    </div>
                    <div class="text-end"> <!-- Menambahkan class text-end untuk meratakan ke kanan -->
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Pesan Tiket</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    movieList.appendChild(card);
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('login-message');
    const loginButton = document.querySelector('#loginModal .btn-primary');
    
    // Reset pesan sebelumnya
    messageElement.innerHTML = "";
    loginButton.innerHTML = "Login";
    loginButton.classList.remove('btn-success');
    loginButton.classList.add('btn-primary');
    
    // Cek username dan password
    if (username === "user" && password === "password") {

    // Tampilkan pesan sukses
        messageElement.innerHTML = "<p style='color: green;'>Login berhasil!</p>";
    
        // Ubah tombol menjadi hijau dan teks menjadi "Berhasil"
        loginButton.innerHTML = "Berhasil";
        loginButton.classList.remove('btn-primary');
        loginButton.classList.add('btn-success');
    
        // Tutup modal setelah beberapa detik (opsional)
        setTimeout(function() {
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
    }, 2000);
    
    } else {
        // Tampilkan pesan error jika login gagal
        messageElement.innerHTML = "<p style='color: red;'>Username atau password salah!</p>";
    }
}

function openBookingModal(judulFilm) {
    document.getElementById('movieTitle').value = judulFilm;
}

function setMovieDetails(title, description) {
    document.getElementById('movieTitle').value = title;
    document.getElementById('movieDescription').value = description;
}

function bookTicket() {
    const movieName = document.getElementById('movieTitle').value;
    const name = document.getElementById('name').value;
    const seatsValue = document.getElementById('seats').value;
    const messageElement = document.getElementById('booking-message');

    messageElement.innerHTML = '';

    if (name && seatsValue) {

        messageElement.innerHTML = `<p style="color: green;">Tiket untuk film "${movieName}" telah dipesan oleh ${name} sebanyak ${seatsValue} kursi.</p>`;
    } else {
       
        messageElement.innerHTML = `<p style="color: red;">Harap isi semua informasi!</p>`;
        return;
    }

    // Reset form setelah pemesanan
    document.getElementById('name').value = '';
    document.getElementById('seats').value = '';
    function bookTicket() {
        const movieName = document.getElementById('movieTitle').value;
        const name = document.getElementById('name').value;
        const seatsValue = document.getElementById('seats').value;
        const messageElement = document.getElementById('booking-message');
    
        // Reset pesan sebelumnya
        messageElement.innerHTML = '';
    
        // Validasi input
        if (name && seatsValue) {
            // Tampilkan pesan sukses
            messageElement.innerHTML = `<p style="color: green;">Tiket untuk film "${movieName}" telah dipesan oleh ${name} sebanyak ${seatsValue} kursi.</p>`;
        } else {
            // Tampilkan pesan error
            messageElement.innerHTML = `<p style="color: red;">Harap isi semua informasi!</p>`;
            return;
        }
    
        // Reset form setelah pemesanan
        document.getElementById('name').value = '';
        document.getElementById('seats').value = '';
    
        // Tutup modal setelah beberapa detik (opsional)
        setTimeout(function() {
            const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
            modal.hide();
        }, 2000);
    }
}