<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30

  const sections = navLinks
    .map((link) => document.querySelector(link.href))
    .filter(Boolean)

  let current = 'home'

  sections.forEach((section) => {
    if (!section) return

    const rect = section.getBoundingClientRect()

    if (rect.top <= 150) {
      current = section.id
    }
  })

  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, {
    passive: true,
  })

  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <nav class="navbar-container">

      <!-- =========================================
           LOGO
      ========================================== -->

    <a
      href="#home"
      class="logo"
      aria-label="Go to home"
      @click="closeMenu"
    >
      <img
        src="/logo.png"
        alt="DB Logo"
        class="logo-mark"
      />
    </a>


      <!-- =========================================
           DESKTOP NAVIGATION
      ========================================== -->

      <div class="desktop-nav">

        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="nav-link"
          :class="{
            active: activeSection === link.href.substring(1)
          }"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>

        <!-- Resume -->

        <a
          href="/resume/DBVerzosaResume.pdf"
          class="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

      </div>


      <!-- =========================================
           MOBILE MENU BUTTON
      ========================================== -->

      <button
        class="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>


    <!-- =========================================
         MOBILE NAVIGATION
    ========================================== -->

    <Transition name="mobile-menu">

      <div
        v-if="isMenuOpen"
        class="mobile-nav"
      >

        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="mobile-nav-link"
          :class="{
            active: activeSection === link.href.substring(1)
          }"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>


        <!-- Mobile Resume -->

        <a
          href="/resume/DBVerzosaResume.pdf"
          class="mobile-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          View Resume
        </a>

      </div>

    </Transition>

  </header>
</template>

<style lang="scss">
@use '../styles/navbar.scss';
</style>