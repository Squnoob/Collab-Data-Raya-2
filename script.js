document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('.img-container');
    const navLinks = document.querySelectorAll('.slide-navigator a');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        imgContainer.scrollTo({
          left: imgContainer.offsetWidth * index,
          behavior: 'smooth'
        });
      });
    });
  });

const profiles = {
    "syadith": {
        image: "Photo1.jpeg",
        name: "Aqyra Syadith Iswara",
        title: "Cief of The Team",
        bio: "Pemuda soleh yang menempuh pendidikan program studi Bisnis Digital di Universitas Negeri Jakarta. Lulus dari SMA Suluh Jakarta jurusan IPS, saya memiliki ketertarikan untuk menuntut ilmu terkait teknologi digital dan ingin menjadi seorang Web Developer/Master di masa depan. Selain itu, saya juga tertarik dalam Game Developing"
    },
    "rachel": {
        image: "../Foto/rachel.png",
        name: "Nayla Rachel Putri Aurelia",
        title: "Staff",
        bio: "Saya adalah mahasiswa Universitas Negeri Jakarta pada Program Studi Bisnis Digital yang memiliki fokus pada pengembangan bisnis, web development, dan UI/UX. Memiliki kemampuan dalam kreativitas, pengembangan bisnis dan acara Selain itu, memiliki kemampuan interpersonal seperti manajemen waktu yang baik, komunikasi, dan kerja sama tim. Saat ini, saya memiliki keterarikan dalam bidang programming, pengembangan bisnis, manajemen bisnis, dan kreativitas marketing."
    },
    "selma": {
        image: "../Foto/selma.png",
        name: "Selma Khoirunn isa",
        title: "Staff",
        bio: "Saya adalah seorang mahasiswa S1 Bisnis Digital yang memiliki minat dan bakat di bidang Desain Grafis dan Photo Retouching. Menguasai aplikasi Ibis Paint X dan Canva. Memiliki keinginan untuk mengembangkan kemampuan dalam menciptakan karya yang menarik dan inovatif."
    },
    "rifa": {
        image: "../Foto/rifa.png",
        name: "Rifa Rahadatul Asy Al-Ma'mun",
        title: "Staff",
        bio: "Mahasiswa Bisnis Digital Universitas Negeri Jakarta, dengan pengalaman organisasi pada bidang kreatif, dan Seni Budaya. Memiliki kemampuan dalam Kreatifitas Manajemen, Perencanaan bisnis, dan kolaborasi antar eksternal dalam perencanaan rancangan kerja, selain daripada itu, memiliki kemampuan interpersonal yang baik seperti komunikasi, presentasi, dan kerja sama. Saat ini memiliki keinginan untuk mengembangkan kemampuan di bidang perencanaan Bisnis, Manajemen keuangan, Pembangunan Bisnis yang bergerak di bidang Kreativitas  dan kolaborasi, juga memperluas relasi dan hubungan sosial.",
    },
    "fadhil": { 
        image: "../Foto/fadhil.jpg",
        name: "M. Husnul Fadhillah",
        title: "Staff",
        bio: "Saya adalah mahasiswa Fakultas Ekonomi di Universitas Negeri Jakarta dengan fokus pada bisnis digital. Saya memiliki minat tentang pengembangan bisnis dengan semangat untuk belajar dan mengatasi tantangan yang baru. Melalui perjalanan akademik dan ekstrakurikuler, saya telah mengembangkan kerja dalam tim dan manajemen waktu. Saya sangat termotivasi untuk berkontribusi, belajar dan tumbuh saat saya mengejar peluang yang selaras dengan minat dan tujuan karir masa depan saya.",
    },
    "rashifah": {
        image: "../Foto/rashifah.jpg",
        name: "Rashifah Hasna Faizah E.",
        title: "Staff",
        bio: "Seorang mahasiswa S1 Bisnis Digital di Universitas Negeri Jakarta yang memiliki ketertarikan dengan perkembangan dunia bisnis. Selain itu, saya juga tertarik dengan hal-hal yang mendukung bisnis, seperti perancangan bisnis dan desain grafis. Dengan didukung oleh kemampuan dan pengalaman saya dalam membuat design untuk kebutuhan kepanitiaan dan juga untuk tugas. Dalam perencanaan karir saya di masa depan, saya ingin membangun sebuah bisnis yang ingin saya kembangkan menjadi bisnis yang berkembang besar. Saya juga ingin aktif di media sosial untuk membangun personal branding dan membangun relasi dengan banyak orang.",
    }, 
    "naufal": {
        image: "../Foto/naufal.jpg",
        name: "Naufal Abiyyu Utomo",
        title: "Staff",
        bio: "Saya adalah seorang mahasiswa di Universitas Negeri Jakarta, jurusan Bisnis Digital. Minat saya terletak pada pengembangan strategi pemasaran digital dan analisis data untuk meningkatkan kinerja bisnis. Dengan latar belakang ini, saya bertujuan untuk menjadi ahli dalam e-commerce, membantu perusahaan beradaptasi dengan kemajuan teknologi dan memanfaatkan platform digital secara efektif. Saya percaya bahwa kombinasi pengetahuan bisnis dan keterampilan digital akan membuka banyak peluang di masa depan.",
    }
};

function showProfile(memberKey) {
    const profile = profiles[memberKey];
    if (profile) {
        document.getElementById('profile-image').src = profile.image;
        document.getElementById('profile-name').innerText = profile.name;
        document.getElementById('profile-title').innerText = profile.title;
        document.getElementById('profile-bio').innerText = profile.bio;

        // Tampilkan modal
        document.getElementById('profile-modal').style.display = 'block';
    }
}

function closeProfile() {
    document.getElementById('profile-modal').style.display = 'none';
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
    const modal = document.getElementById('profile-modal');
    if (event.target == modal) {
        closeProfile();
    }
}
