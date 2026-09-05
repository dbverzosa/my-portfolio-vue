<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- Logo -->
      <div class="footer-logo">
        <a
          href="#home"
          class="logo-mark"
          aria-label="Back to home"
        >
          <img
            src="/logo.png"
            alt="DB Logo"
          />
        </a>

        <div class="footer-identity">
          <!-- <strong>Debby Verzosa</strong> -->
        </div>
      </div>

      <!-- Copyright -->
      <p class="footer-copyright">
        © {{ currentYear }} Debby Verzosa.
        All rights reserved.
      </p>

      <!-- Back to top -->
      <a
        href="#home"
        class="back-to-top"
      >
        <span>Back to top</span>
        <span class="arrow">↑</span>
      </a>

    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  position: relative;

  padding: 35px 24px;

  background: #070b12;

  border-top: 1px solid rgba(255, 255, 255, 0.06);

  overflow: hidden;
}

/* Top accent line */

.footer::before {
  content: '';

  position: absolute;

  top: 0;
  left: 50%;

  width: 300px;
  height: 1px;

  transform: translateX(-50%);

  background: linear-gradient(
    90deg,
    transparent,
    rgba(20, 184, 166, 0.5),
    transparent
  );
}

/* Container */

.footer-container {
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;
}

/* Logo */

.footer-logo {
  display: flex;
  align-items: center;

  gap: 12px;
}

.logo-mark {
  width: 38px;
  height: 38px;

  display: block;

  flex-shrink: 0;

  text-decoration: none;

  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.logo-mark img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
}

.logo-mark:hover {
  transform: rotate(-8deg) scale(1.08);

  filter:
    drop-shadow(
      0 0 10px
      rgba(20, 184, 166, 0.35)
    );
}

/* Identity */

.footer-identity strong {
  display: block;

  color: #ffffff;

  font-size: 14px;
  font-weight: 600;
}

.footer-identity small {
  display: block;

  margin-top: 3px;

  color: #64748b;

  font-size: 11px;
}

/* Copyright */

.footer-copyright {
  margin: 0;

  color: #64748b;

  font-size: 12px;

  text-align: center;
}

/* Back to top */

.back-to-top {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: #14b8a6;

  text-decoration: none;

  font-size: 13px;
  font-weight: 600;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.back-to-top .arrow {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  border: 1px solid rgba(20, 184, 166, 0.3);

  border-radius: 6px;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease;
}

.back-to-top:hover {
  color: #ffffff;

  transform: translateY(-3px);
}

.back-to-top:hover .arrow {
  background: rgba(20, 184, 166, 0.12);

  border-color: rgba(20, 184, 166, 0.6);

  transform: translateY(-3px);
}

/* Mobile */

@media (max-width: 700px) {
  .footer {
    padding: 35px 20px;
  }

  .footer-container {
    flex-direction: column;

    justify-content: center;

    text-align: center;

    gap: 22px;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-copyright {
    order: 3;

    line-height: 1.6;
  }

  .back-to-top {
    order: 2;
  }
}

/* Small mobile */

@media (max-width: 400px) {
  .footer-logo {
    flex-direction: column;

    gap: 8px;
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .logo-mark,
  .back-to-top,
  .back-to-top .arrow {
    transition: none;
  }
}
</style>