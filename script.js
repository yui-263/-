// ฟังก์ชันแสดงข้อความเมื่อคลิกปุ่ม
function showMessage() {
    const messages = [
        "สวัสดีครับ! 👋",
        "ยินดีต้อนรับสู่เว็บไซต์! 🎉",
        "ขอบคุณที่เข้ามาเยี่ยมชม! 😊",
        "เว็บไซต์นี้สร้างด้วย GitHub Pages 🚀",
        "มีความสุขนะครับ! ✨"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.getElementById('message');
    
    messageElement.textContent = randomMessage;
    messageElement.style.animation = 'fadeInUp 0.5s ease';
    
    // รีเซ็ต animation
    setTimeout(() => {
        messageElement.style.animation = '';
    }, 500);
}

// เพิ่ม effect เมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 เว็บไซต์โหลดเสร็จแล้ว!');
    
    // เพิ่ม parallax effect เล็กน้อย
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.feature-card');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        cards.forEach((card, index) => {
            const depth = (index + 1) * 5;
            const moveX = (x - 0.5) * depth;
            const moveY = (y - 0.5) * depth;
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});

// เพิ่มการนับจำนวนผู้เยี่ยมชม (เก็บใน localStorage)
function updateVisitorCount() {
    let count = localStorage.getItem('visitorCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    console.log(`จำนวนครั้งที่เข้าชม: ${count}`);
}

updateVisitorCount();