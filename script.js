const statusText = document.getElementById('statusText');
const gameGrid = document.getElementById('gameGrid');
const downloadButton = document.getElementById('downloadButton');

const games = [
  {
    name: 'Cyberpunk 2077',
    genre: 'RPG',
    rating: '4.5',
    desc: 'Open world futuristik, pre-install ready untuk aksi neon cepat.',
    image: 'https://via.placeholder.com/400x220/08101f/42d7ff?text=Cyberpunk+2077'
  },
  {
    name: 'The Witcher 3',
    genre: 'RPG',
    rating: '4.9',
    desc: 'Petualangan fantasi mendalam dengan instalasi cepat dan ekspansi lengkap.',
    image: 'https://via.placeholder.com/400x220/0f172a/42d7ff?text=The+Witcher+3'
  },
  {
    name: 'Elden Ring',
    genre: 'RPG',
    rating: '4.9',
    desc: 'Pertarungan dunia terbuka gelap dengan file mod pre-install siap pakai.',
    image: 'https://via.placeholder.com/400x220/0b1320/42d7ff?text=Elden+Ring'
  },
  {
    name: 'Doom Eternal',
    genre: 'FPS',
    rating: '4.8',
    desc: 'Aksi cepat dengan paket pre-install untuk performa maksimal.',
    image: 'https://via.placeholder.com/400x220/121b28/42d7ff?text=Doom+Eternal'
  },
  {
    name: 'Halo Infinite',
    genre: 'FPS',
    rating: '4.6',
    desc: 'Multiplayer modern dan campaign epik dengan setup cepat.',
    image: 'https://via.placeholder.com/400x220/0d1324/42d7ff?text=Halo+Infinite'
  },
  {
    name: 'Forza Horizon 5',
    genre: 'Racing',
    rating: '4.7',
    desc: 'Balapan open world dengan pre-install drive yang mulus.',
    image: 'https://via.placeholder.com/400x220/04111c/42d7ff?text=Forza+Horizon+5'
  },
  {
    name: 'Resident Evil 4',
    genre: 'Horror',
    rating: '4.8',
    desc: 'Horor intens dengan paket pre-install versi upgrade.',
    image: 'https://via.placeholder.com/400x220/08121d/42d7ff?text=Resident+Evil+4'
  },
  {
    name: 'Apex Legends',
    genre: 'FPS',
    rating: '4.7',
    desc: 'Battle royale cepat dengan karakter unik dan gameplay tim.',
    image: 'https://via.placeholder.com/400x220/0a1623/42d7ff?text=Apex+Legends'
  },
  {
    name: 'Assassin\'s Creed Valhalla',
    genre: 'Action',
    rating: '4.6',
    desc: 'Petualangan Viking luas dengan instalasi cepat dan konten lengkap.',
    image: 'https://via.placeholder.com/400x220/09121f/42d7ff?text=AC+Valhalla'
  },
  {
    name: 'Valorant',
    genre: 'FPS',
    rating: '4.7',
    desc: 'Taktik shooter kompetitif dengan paket pre-install siap bertempur.',
    image: 'https://via.placeholder.com/400x220/07111f/42d7ff?text=Valorant'
  }
];

const statusMessages = [
  'Server pre-install aktif',
  'Upload game berjalan',
  'Certificate game siap',
  'Launcher AnkerPlay terhubung'
];
let statusIndex = 0;

function renderGames() {
  if (!gameGrid) return;
  gameGrid.innerHTML = games
    .map(
      (game) => `
        <article class="game-card">
          <div class="cover" style="background-image: url('${game.image}')"></div>
          <div class="game-info">
            <span class="badge">Pre-install</span>
            <h3>${game.name}</h3>
            <p>${game.desc}</p>
            <div class="game-meta">
              <span>${game.genre}</span>
              <span>⭐ ${game.rating}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function updateStatus() {
  if (!statusText) return;
  statusIndex = (statusIndex + 1) % statusMessages.length;
  statusText.textContent = statusMessages[statusIndex];
}

function initEvents() {
  if (!downloadButton) return;
  downloadButton.addEventListener('click', (event) => {
    event.preventDefault();
    const message = 'Launcher akan memulai unduhan game kamu...';
    statusText.textContent = message;
    downloadButton.textContent = 'Memulai...';
    setTimeout(() => {
      downloadButton.textContent = 'Unduh Sekarang';
      statusText.textContent = 'Semua game siap di pre-install';
    }, 2200);
  });
}

renderGames();
initEvents();
setInterval(updateStatus, 2200);
