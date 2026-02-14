document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const reveals = document.querySelectorAll(".reveal");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const langToggle = document.getElementById("lang-toggle");

  // Language State
  let currentLang = 'tr';

  const translations = {
    tr: {
      nav_home: "Ana Sayfa",
      nav_menu: "Lezzetler",
      nav_about: "Hikayemiz",
      nav_gallery: "Galeri",
      nav_contact: "İletişim",
      nav_reservation: "Rezervasyon",
      hero_title: "Gerçek Lezzet, <br><span>Ramiz Köfte</span>",
      hero_tagline: "1928'den beri değişmeyen formül, taze malzemeler ve ustalıkla hazırlanan ızgara lezzetleri.",
      hero_btn_menu: "Menüyü İncele",
      hero_btn_res: "Hemen Rezervasyon",
      highlight_title: "Ramiz'in İmzası",
      highlight_subtitle: "Nesillerdir süregelen eşsiz ızgara deneyimi",
      highlight_item1_title: "Ramiz Köfte",
      highlight_item1_desc: "Taptaze yeşillikler ve markaya özel sıcacık pidesi ile markanın imza lezzet.",
      highlight_item2_title: "Yoğurtlu Ramiz Köfte",
      highlight_item2_desc: "Özel süzme yoğurt, taze yeşillikler ve sıcak pide ile servis edilen klasik tat.",
      highlight_item3_title: "Ramiz Spesiyal",
      highlight_item3_desc: "Izgara lezzetlerinin şefin özel dokunuşlarıyla buluştuğu zengin karışım.",
      menu_title: "Lezzet Haritası",
      menu_subtitle: "Gelenekten geleceğe uzanan tatlar",
      tab_mains: "Köfteler & Etler",
      tab_starters: "Salatalar",
      tab_desserts: "Tatlılar",
      tab_drinks: "İçecekler",
      menu_all_pdf: "Tüm Menüyü Gör (PDF)",
      about_title: "Bir Lezzet <br><span>Hikayesi</span>",
      about_text: "1928 yılında Akhisar'da temelleri atılan Köfteci Ramiz, nesilden nesile aktarılan özel formülü ve kalite anlayışıyla bugün Türkiye'nin en seçkin restoran zincirlerinden biri haline gelmiştir. Geleneksel yöntemleri modern hizmet anlayışıyla birleştiriyoruz.",
      stat_founded: "Kuruluş Yılı",
      stat_branches: "Şube Sayısı",
      stat_natural: "Doğal Et",
      about_btn: "Hikayemizi Keşfedin",
      gallery_title: "Lezzet Kareleri",
      gallery_subtitle: "Mutfaktan ve sofradan en taze anlar",
      contact_title: "Sizi <span>Bekliyoruz</span>",
      contact_text: "Eşsiz lezzetlerimizi yerinde denemek için yerinizi ayırtın. Hafta sonu ziyaretleriniz için önceden rezervasyon yapmanızı öneririz.",
      contact_addr_label: "Merkez Adres",
      contact_addr_val: "Akhisar, Manisa / Türkiye",
      contact_hours_label: "Çalışma Saatleri",
      contact_hours_val: "Pzt - Paz: 10:00 - 23:00",
      contact_phone_label: "İletişim",
      form_name: "Ad Soyad",
      form_email: "E-posta Adresi",
      form_phone: "Telefon Numarası",
      form_guests_label: "Kişi Sayısı",
      form_guests_1: "1 Kişi",
      form_guests_2: "2 Kişi",
      form_guests_3: "3 Kişi",
      form_guests_4: "4 Kişi",
      form_guests_5: "5+ Kişi",
      form_notes: "Özel Notlar (Alerjiler, Kutlamalar...)",
      form_submit: "Rezervasyon Talebi Gönder",
      footer_rights: "Tüm Hakları Saklıdır.",
      footer_privacy: "Gizlilik Politikası",
      footer_terms: "Kullanım Şartları",
      alert_res: "Rezervasyon talebiniz için teşekkürler! Ekibimiz onay için kısa süre içinde sizinle iletişime geçecektir.",
      badge_legend: "Efsane"
    },
    en: {
      nav_home: "Home",
      nav_menu: "Menu",
      nav_about: "Our Story",
      nav_gallery: "Gallery",
      nav_contact: "Contact",
      nav_reservation: "Reservation",
      hero_title: "Authentic Flavor, <br><span>Ramiz Meatballs</span>",
      hero_tagline: "Unchanged recipe since 1928, fresh ingredients and masterfully prepared grilled delicacies.",
      hero_btn_menu: "Browse Menu",
      hero_btn_res: "Book Now",
      highlight_title: "Ramiz's Signature",
      highlight_subtitle: "Unique grilling experience for generations",
      highlight_item1_title: "Ramiz Meatballs",
      highlight_item1_desc: "Signature flavor served with fresh greens and special warm pita bread.",
      highlight_item2_title: "Ramiz Meatballs with Yogurt",
      highlight_item2_desc: "Classic served with special strained yogurt, fresh greens and warm pita bread.",
      highlight_item3_title: "Ramiz Special",
      highlight_item3_desc: "A rich mix of grilled flavors meeting the chef's special touches.",
      menu_title: "Flavor Map",
      menu_subtitle: "Flavors from tradition to the future",
      tab_mains: "Meatballs & Meats",
      tab_starters: "Salads",
      tab_desserts: "Desserts",
      tab_drinks: "Drinks",
      menu_all_pdf: "View Full Menu (PDF)",
      about_title: "A Story of <br><span>Flavor</span>",
      about_text: "Founded in 1928 in Akhisar, Köfteci Ramiz has become one of Turkey's most distinguished restaurant chains today with its special formula passed down through generations. We combine traditional methods with a modern service approach.",
      stat_founded: "Year Founded",
      stat_branches: "Branches",
      stat_natural: "100% Natural",
      about_btn: "Discover Our Story",
      gallery_title: "Flavor Frames",
      gallery_subtitle: "Fresh moments from the kitchen and the table",
      contact_title: "We Are <span>Waiting</span> For You",
      contact_text: "Book your place to try our unique flavors. We recommend making a reservation in advance for weekend visits.",
      contact_addr_label: "Headquarters Address",
      contact_addr_val: "Akhisar, Manisa / Turkey",
      contact_hours_label: "Opening Hours",
      contact_hours_val: "Mon - Sun: 10:00 - 23:00",
      contact_phone_label: "Contact",
      form_name: "Full Name",
      form_email: "Email Address",
      form_phone: "Phone Number",
      form_guests_label: "Number of Guests",
      form_guests_1: "1 Person",
      form_guests_2: "2 People",
      form_guests_3: "3 People",
      form_guests_4: "4 People",
      form_guests_5: "5+ People",
      form_notes: "Special Notes (Allergies, Celebrations...)",
      form_submit: "Send Reservation Request",
      footer_rights: "All Rights Reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      alert_res: "Thank you for your reservation request! Our team will contact you shortly to confirm.",
      badge_legend: "Legendary"
    }
  };

  // Menu Data with Dual Language
  const menuData = {
    starters: [
      { tr: { title: "Ramiz Salata", desc: "Taze mevsim sebzeleri, mısır ve özel soslarla hazırlanan klasik." }, en: { title: "Ramiz Salad", desc: "Classic prepared with fresh seasonal vegetables, corn and special sauces." }, price: "₺180" },
      { tr: { title: "Piyaz", desc: "Haşlanmış fasulye, domates ve özel sirkeli sosla hazırlanan geleneksel tat." }, en: { title: "Piyaz (White Bean Salad)", desc: "Traditional taste prepared with boiled beans, tomatoes and special vinegar sauce." }, price: "₺195", special: true },
      { tr: { title: "Mevsim Salata", desc: "Günün taze yeşillikleri ve sızma zeytinyağı ile." }, en: { title: "Seasonal Salad", desc: "With fresh greens of the day and extra virgin olive oil." }, price: "₺160" },
      { tr: { title: "Hellimli Salata", desc: "Izgara hellim peyniri ve taze Akdeniz yeşillikleri." }, en: { title: "Halloumi Salad", desc: "Grilled halloumi cheese and fresh Mediterranean greens." }, price: "₺240" }
    ],
    mains: [
      { tr: { title: "Ramiz Köfte", desc: "Taptaze yeşillikler ve Ramiz’e özel sıcacık pidesi ile imza lezzet." }, en: { title: "Ramiz Meatballs", desc: "Signature flavor served with fresh greens and special warm pita bread." }, price: "₺280", special: true },
      { tr: { title: "Yoğurtlu Ramiz Köfte", desc: "Özel süzme yoğurt ve sıcak pide ile servis edilen klasik." }, en: { title: "Ramiz Meatballs with Yogurt", desc: "Classic served with special strained yogurt and warm pita bread." }, price: "₺320" },
      { tr: { title: "Kaşarlı Ramiz Köfte", desc: "İçerisinde erimiş kaşar peyniri bulunan zengin içerikli köfte." }, en: { title: "Cheese Stuffed Meatballs", desc: "Rich meatballs with melted kashar cheese inside." }, price: "₺310" },
      { tr: { title: "Bonfile", desc: "Izgarada mükemmel kıvamda pişirilmiş yumuşacık dana bonfile." }, en: { title: "Beef Fillet Steak", desc: "Soft beef fillet grilled to perfection." }, price: "₺540", special: true },
      { tr: { title: "Kasap Köfte", desc: "Geleneksel kasap tarifiyle özenle yoğurulan köfte lezzeti." }, en: { title: "Butcher's Meatballs", desc: "Traditional butcher's recipe meatballs." }, price: "₺290" },
      { tr: { title: "Balkan Köfte", desc: "Makedon usulü baharatsız hazırlanan saf et lezzeti." }, en: { title: "Balkan Meatballs", desc: "Macedonian style spice-free pure meat flavor." }, price: "₺295" }
    ],
    desserts: [
      { tr: { title: "Tulumba Tatlısı", desc: "Köfteci Ramiz klasiği, her zaman taze ve çıtır çıtır." }, en: { title: "Tulumba Dessert", desc: "Köfteci Ramiz classic, always fresh and crispy." }, price: "₺120" },
      { tr: { title: "Höşmerim", desc: "Balıkesir yöresine özgü, taze peynirden yapılan hafif lezzet." }, en: { title: "Höşmerim", desc: "Light dessert made from fresh cheese, unique to Balıkesir region." }, price: "₺165", special: true },
      { tr: { title: "Kemalpaşa Tatlısı", desc: "Şerbetini tam çekmiş, tercihe göre kaymakla sunulur." }, en: { title: "Kemalpaşa Dessert", desc: "Perfectly soaked in syrup, served with clotted cream on request." }, price: "₺140" },
      { tr: { title: "Karamelli Trileçe", desc: "Üç farklı sütle ıslatılmış kek ve yoğun karamel sos." }, en: { title: "Caramel Trilece", desc: "Cake soaked in three types of milk with rich caramel sauce." }, price: "₺180" }
    ],
    drinks: [
      { tr: { title: "Naneli Ayran", desc: "Bol köpüklü, taze nane yaprakları ile." }, en: { title: "Minted Ayran", desc: "Very frothy, with fresh mint leaves." }, price: "₺85" },
      { tr: { title: "Ev Yapımı Limonata", desc: "Taze sıkılmış limonlar ve hafif nane aroması." }, en: { title: "Homemade Lemonade", desc: "Freshly squeezed lemons and a hint of mint aroma." }, price: "₺105" },
      { tr: { title: "Türk Kahvesi", desc: "Geleneksel yöntemlerle cezvede pişirilmiş." }, en: { title: "Turkish Coffee", desc: "Cooked in a cezve with traditional methods." }, price: "₺120" },
      { tr: { title: "Şalgam Suyu", desc: "Adana usulü, acılı veya acısız seçenekleriyle." }, en: { title: "Turnip Juice (Şalgam)", desc: "Adana style, with spicy or mild options." }, price: "₺75" }
    ]
  };

  function updateLanguage() {
    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });

    // Update placeholders for elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[currentLang][key]) {
        el.placeholder = translations[currentLang][key];
      }
    });

    // Update button text
    langToggle.innerText = currentLang === 'tr' ? 'EN' : 'TR';
    
    // Refresh Menu
    const activeTab = document.querySelector('.tab-btn.active').dataset.target;
    updateMenu(activeTab);
  }

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateLanguage();
  });

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    revealOnScroll();
  });

  // Reveal on Scroll
  window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });

  // Image Modal Functionality
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.modal-close');

  // Only set up modal if elements exist
  if (modal && modalImg && modalCaption) {
    // Function to open modal
    function openModal(imgSrc, imgAlt) {
      modal.style.display = 'block';
      modalImg.src = imgSrc;
      modalCaption.innerHTML = imgAlt;
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close modal
    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Add click event to all product images
    document.querySelectorAll('.product-image').forEach(img => {
      img.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(this.src, this.alt);
      });
    });

    // Add click event to background images (homepage highlights)
    document.querySelectorAll('.card-img').forEach(div => {
      div.addEventListener('click', function(e) {
        e.preventDefault();
        // Extract URL from background-image: url("...")
        const bgImg = window.getComputedStyle(this).backgroundImage;
        if (bgImg && bgImg !== 'none') {
          const url = bgImg.slice(4, -1).replace(/"/g, "");
          // Try to get caption from next sibling (h3)
          const caption = this.nextElementSibling?.querySelector('h3')?.innerText || "Ramiz Lezzeti";
          openModal(url, caption);
        }
      });
    });

    // Add click event to all gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(this.src, this.alt);
      });
    });

    // Close modal when clicking the X
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  } else {
    console.error('Modal elements not found');
  }

  // Initial check for reveal
  // revealOnScroll(); // This function is no longer needed as it's integrated into the scroll listener

  // Menu Tabs Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuGrid = document.querySelector('.menu-grid');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.target;
      updateMenu(target);
    });
  });

  function updateMenu(category) {
    const items = menuData[category];
    const badgeText = translations[currentLang].badge_legend;
    
    // Add transition effect
    menuGrid.style.opacity = '0';
    menuGrid.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
          <div class="menu-item-header">
            <h4 class="menu-item-title">${item[currentLang].title} ${item.special ? `<span class="badge">${badgeText}</span>` : ''}</h4>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item[currentLang].desc}</p>
        </div>
      `).join('');
      
      menuGrid.style.opacity = '1';
      menuGrid.style.transform = 'translateY(0)';
    }, 300);
  }

  // Initial menu load
  updateMenu('mains');

  // Reservation Form Handling
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(translations[currentLang].alert_res);
      reservationForm.reset();
    });
  }

  // Mobile Menu Toggle
  const navList = document.querySelector('.nav-list');
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navList.classList.toggle('mobile-active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navList.classList.remove('mobile-active');
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
