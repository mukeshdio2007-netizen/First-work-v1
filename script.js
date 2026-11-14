/**
 * STUZEN TECHNOLOGIES — Interactive Website Logic
 * Handles navigation, mobile menu, solution filtering, form validation, and accessible modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    function openMobileMenu() {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'x');
        if (window.lucide) window.lucide.createIcons();
      }
    }

    function closeMobileMenu() {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
    }
  }

  // 2. Active Navigation Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-[#00D4F5]', 'border-b-2', 'border-[#00D4F5]');
            link.classList.remove('text-slate-300');
          } else {
            link.classList.remove('text-[#00D4F5]', 'border-b-2', 'border-[#00D4F5]');
            link.classList.add('text-slate-300');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // 3. Solution / Products Category Filtering
  const filterPills = document.querySelectorAll('.filter-btn');
  const solutionCards = document.querySelectorAll('.solution-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Toggle active styling
      filterPills.forEach(btn => {
        btn.classList.remove('active', 'bg-[#008CFF]', 'text-white', 'shadow-md');
        btn.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      });

      pill.classList.add('active', 'bg-[#008CFF]', 'text-white', 'shadow-md');
      pill.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');

      const filterCategory = pill.getAttribute('data-category');

      solutionCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.classList.remove('hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. Contact Form Validation and Submission Handling
  const contactForm = document.getElementById('stuzenContactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const submitSpinner = document.getElementById('submitSpinner');
  const submitBtnText = document.getElementById('submitBtnText');
  const confirmationTicket = document.getElementById('confirmationTicket');

  if (contactForm) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Helper for validation display
    function validateField(input, condition, errorMsgId, errorMsg) {
      const errorEl = document.getElementById(errorMsgId);
      if (!condition) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        if (errorEl) {
          errorEl.textContent = errorMsg;
          errorEl.classList.remove('hidden');
        }
        return false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (errorEl) {
          errorEl.classList.add('hidden');
        }
        return true;
      }
    }

    // Real-time input listeners
    nameInput.addEventListener('input', () => {
      validateField(nameInput, nameInput.value.trim().length >= 2, 'nameError', 'Please enter your full name (at least 2 characters).');
    });

    emailInput.addEventListener('input', () => {
      validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'emailError', 'Please enter a valid email address.');
    });

    subjectInput.addEventListener('input', () => {
      validateField(subjectInput, subjectInput.value.trim().length >= 3, 'subjectError', 'Please enter a subject (at least 3 characters).');
    });

    messageInput.addEventListener('input', () => {
      validateField(messageInput, messageInput.value.trim().length >= 10, 'messageError', 'Message should be at least 10 characters long.');
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, 'nameError', 'Please enter your full name.');
      const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'emailError', 'Please enter a valid email address.');
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, 'subjectError', 'Please enter a subject.');
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10, 'messageError', 'Message must be at least 10 characters.');

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        return;
      }

      // Enter Sending / Loading State
      submitBtn.disabled = true;
      submitSpinner.classList.remove('hidden');
      submitBtnText.textContent = 'Transmitting Message...';

      // Simulate verified asynchronous delivery pipeline (can be swapped with your real backend/Formspree/Resend API)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitSpinner.classList.add('hidden');
        submitBtnText.textContent = 'Send Message';

        // Generate simulated ticket reference
        const ticketId = 'STZ-' + Math.floor(100000 + Math.random() * 900000);
        if (confirmationTicket) {
          confirmationTicket.textContent = ticketId;
        }

        // Show Success Alert
        formSuccessAlert.classList.remove('hidden');
        contactForm.reset();

        // Remove valid classes
        [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
          inp.classList.remove('is-valid');
        });

        // Scroll into view of confirmation
        formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1200);
    });
  }

  // 5. Generic Accessible Modals (Privacy Policy, Terms of Service, Project Details)
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloseBtns = document.querySelectorAll('[data-modal-close]');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-container');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modal on backdrop click
  document.querySelectorAll('.modal-container').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-container:not(.hidden)').forEach(modal => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
    }
  });

  // 6. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
