// Image gallery - Thay đổi các đường dẫn ảnh này bằng ảnh thật của bạn
const images = [
    'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/492400097_4273339942991844_795919006029380365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xnEyUnHgnYEQ7kNvwE-SLvJ&_nc_oc=Adm3Sd_Z-aZIbZTtgp9qINq3r4uvYaMrw7d3EjGxRuzyjtGrLgAuAtvtZeDORyQrAyo&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=BrvbLFitf_8YTz4Yz0xMZQ&oh=00_Afhq752l4udAqi6PNOSFiqNZt60YEEBrSqLiK73qKjQbbw&oe=69155773',
    'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/503985720_4317379778587860_5734131949270255192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MfuiiBnNLYcQ7kNvwH2cYop&_nc_oc=AdnOZsrPUsEC1uCC-ihe-mare1vEUfgAaRrOx7l_1A4M4eu53ay-q33Q9HP76BluWCQ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AT3nvyqq3k5S_voJRyAUcQ&oh=00_AfghVImOznlfVCDpi5wI74nyepZ-PwTDl3i5sR1t1zaazQ&oe=6915500D',
    'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/488866087_4252202405105598_6061924255923542294_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c2ltG_4EXlwQ7kNvwHqY7ix&_nc_oc=Adm_nd_q5fI3ee45e3qGBishR1FNDHGjTUiIdqmQFaPLmlTALSpD5Q3OhIOx-rOnEFE&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=2UNLNrSWKzwIF7kkpXzujQ&oh=00_Afgq5UtZeNYY5JeteqhyqhDokOwEMDk_S3JBVTb6c1-e0g&oe=69156694',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/485616826_4234384433554062_6749238284204517215_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=z53dsl3aGb8Q7kNvwGBiyAA&_nc_oc=AdlhIlGgNz2Cs3BMJRnO-jPnFtmNpYr_SDDp1tC9mGZ6RExgJMTLzL8-P1QckcjJWtY&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=cYAWQGWG5Xaa5TvB5SfVAw&oh=00_Afh46hiDYbnvfAikav7Ieh6mYK1wVuEvGNMDiSUKTr7Lxw&oe=6915676D',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/481244740_4215506298775209_3022987640890276667_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=8DLP3faBOT4Q7kNvwHxWfxL&_nc_oc=AdkyeKSgLSRe4_OkM1Uxqicc1qKPzT-6ePhYYOiOR7zVkAzxNnIfyuyfrKVnILVU9as&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=dnYcsFyYwNP2wRanZPWiMA&oh=00_AfhB-hKLfYr8H5lWTCBjyn5X3qiy5-rdI4AVpdWT_CzdbQ&oe=691545ED',
    'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/129203916_2946166079042577_352336011333455373_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=sFwm5fCNlnMQ7kNvwHZOfBj&_nc_oc=Adn-3q5Y7wDvcM-usbBS3QZPC3C8YZcoxYqApEHmdc9o4jrtsqhcH5s958BOBGQi5zY&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=VhVYMRcSTYXz9Ur8PUupRg&oh=00_Afh38-QJU96Q4XAMl-jPOVNVUNSePIEAWphmGMM7CMdJlg&oe=6936F1DF',
    'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/488911828_4251452605180578_6651324866327138270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wfkT8IEpj00Q7kNvwGVreUJ&_nc_oc=Adll_iRySRtgljaxM-1Jn8ThMa7e_TqnjrQRfTvWynTFgAji0SlYviN9uKb_coJM6-g&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=BNZA0jxvz6Ufa5o2OEP4nQ&oh=00_AfhAz30-sWGcl2rIORuTV8suXgeRyk36xMh3MJ5DlcLXcA&oe=69153D3D',
    'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/487942520_4247054282287077_7422252850615693679_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aQq67_Vlv3oQ7kNvwHPKc8_&_nc_oc=AdlRMTJ5YSavfeC9KfOOq_XVyfoRNLtTvMDt9RTXZ2oJuESYXwpEkDrl9Jim_V55P54&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=KDMsRMUoEwNhZL81DjgXjQ&oh=00_Afj9D2AHd0oc9aK8Oxf810N4I2cnwTnsfDamk4PzBho2wQ&oe=69153CEC'
];

let currentImageIndex = 0;

// Confetti emojis
const confettiEmojis = ['🎉', '✨', '💫', '⭐', '🌟', '🎊', '💝', '🎈', '🌸', '🌺', '🌻', '🌷', '💐', '🌹'];

// Create confetti effect
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Create gallery
function createGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    images.forEach((imageSrc, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'gallery-item';
        imageItem.style.animationDelay = (index * 0.2) + 's';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Ảnh ${index + 1}`;
        img.loading = 'lazy';
        
        img.addEventListener('click', () => openModal(index));
        
        imageItem.appendChild(img);
        galleryGrid.appendChild(imageItem);
    });
}

// Open gallery
function openGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    const giftBox = document.getElementById('giftBox');
    
    // Create confetti
    createConfetti();
    
    // Hide gift box with animation
    giftBox.style.animation = 'giftOpen 0.5s ease-out forwards';
    
    // Show gallery after short delay
    setTimeout(() => {
        galleryContainer.classList.add('active');
        createGallery();
    }, 500);
}

// Close gallery
function closeGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    const giftBox = document.getElementById('giftBox');
    
    galleryContainer.classList.remove('active');
    
    // Reset gift box
    setTimeout(() => {
        giftBox.style.animation = 'heartbeat 1.5s ease-in-out infinite';
    }, 300);
}

// Open image modal
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = images[index];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close image modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Navigate modal images
function navigateModal(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    document.getElementById('modalImage').src = images[currentImageIndex];
}

// Message content - Option 1
const messageContent = `Chào Ninh! 

Hôm nay là lần đầu mình gặp bạn, và mình muốn gửi đến bạn những khoảnh khắc một gì đó thú vị nên mình chuẩn bị page này. 

Khi bạn xem được trang web này, thì mình cũng đã có một ấn tượng tốt về cậu rồi đó haha.

Mình hy vọng chúng ta sẽ có cơ hội được biết nhau nhiều hơn, và nhiều hơn nữa những cuộc hẹn ^^.

`;

// Typing effect
function typeMessage(text, element, speed = 30) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            // Add character
            if (text[i] === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text[i];
            }
            i++;
            
            // Add blinking cursor
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            element.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
                type();
            }, speed);
        } else {
            // Remove cursor when done
            const cursor = element.querySelector('.typing-cursor');
            if (cursor) {
                cursor.remove();
            }
        }
    }
    
    type();
}

// Open message modal
function openMessageModal() {
    const messageModal = document.getElementById('messageModal');
    const messageText = document.getElementById('messageText');
    
    messageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Start typing effect
    setTimeout(() => {
        typeMessage(messageContent, messageText, 30);
    }, 300);
}

// Close message modal
function closeMessageModal() {
    const messageModal = document.getElementById('messageModal');
    const messageText = document.getElementById('messageText');
    
    messageModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear text
    messageText.innerHTML = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('giftBox');
    const messageBox = document.getElementById('messageBox');
    const closeGalleryBtn = document.getElementById('closeGallery');
    const messageClose = document.getElementById('messageClose');
    const modal = document.getElementById('imageModal');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const messageModal = document.getElementById('messageModal');
    
    giftBox.addEventListener('click', openGallery);
    messageBox.addEventListener('click', openMessageModal);
    closeGalleryBtn.addEventListener('click', closeGallery);
    messageClose.addEventListener('click', closeMessageModal);
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => navigateModal('prev'));
    modalNext.addEventListener('click', () => navigateModal('next'));
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    messageModal.addEventListener('click', (e) => {
        if (e.target === messageModal) {
            closeMessageModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                navigateModal('prev');
            } else if (e.key === 'ArrowRight') {
                navigateModal('next');
            }
        }
        
        if (messageModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeMessageModal();
            }
        }
    });
});

