<script setup lang="ts">
import { useTypewriter } from '../composables/useTypewriter'
import heroImg from '../assets/hero.png'

const { text } = useTypewriter([
  'Problem Solver',
  'Creative Thinker',
  'Continuous Learner',
  'Solution Builder',
])

const orbitRoles = [
  'Software Developer',
  'Full-Stack Developer',
  'Web Developer',
  'Application Developer',
  'Programmer',
   'Computer Networking',
]
</script>

<template>
  <section id="home" class="hero">

    <!-- =========================================
         BACKGROUND
    ========================================== -->

    <div class="hero-grid"></div>

    <div class="hero-glow hero-glow-one"></div>
    <div class="hero-glow hero-glow-two"></div>

    <!-- Decorative particles -->
    <div class="hero-particle particle-one"></div>
    <div class="hero-particle particle-two"></div>
    <div class="hero-particle particle-three"></div>

    <div class="hero-container">

      <!-- =========================================
           HERO CONTENT
      ========================================== -->

      <div class="hero-content">

        <p class="hero-greeting">
          Hello, I'm
        </p>

        <h1 class="hero-name">
          Debby
          <span>Verzosa</span>
        </h1>

        <!-- Typewriter -->
        <div class="hero-title">

          <span class="hero-title-prefix">
            I'm a
          </span>

          <span class="typewriter">
            {{ text }}
          </span>

          <span class="cursor">|</span>

        </div>

        <!-- Description -->
        <p class="hero-description">
            An Information Technology graduate passionate about developing
            web and mobile applications, building software systems, working
            with computer networks, and creating practical technology
            solutions that solve real-world problems.
        </p>

        <!-- Achievements -->
        <div class="hero-achievements">

          <span class="dot">•</span>

          <span>Web Development</span>

          <span class="dot">•</span>

          <span>Mobile Development</span>
          
          <span class="dot">•</span>

          <span>Computer Networking</span>

        </div>

        <!-- Buttons -->
        <div class="hero-actions">

          <a
            href="#projects"
            class="primary-btn"
          >
            View My Work

            <span class="arrow">
              →
            </span>
          </a>

          <a
            href="#contact"
            class="secondary-btn"
          >
            Contact Me
          </a>

        </div>

        <!-- Social links -->
        <div class="hero-socials">

          <a
            href="https://github.com/dbverzosa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="mailto:debbyverzosa@gmail.com"
            aria-label="Email"
          >
            @
          </a>

        </div>

      </div>


      <!-- =========================================
           HERO VISUAL
      ========================================== -->

      <div class="hero-visual">

        <!-- Orbit rings -->
        <div class="hero-orbit orbit-one"></div>

        <div class="hero-orbit orbit-two"></div>


        <!-- =====================================
             ORBITING PROFESSIONAL ROLES
        ====================================== -->

        <div class="role-orbit">

          <div
            v-for="(role, index) in orbitRoles"
            :key="role"
            class="orbit-role"
            :class="`orbit-role-${index + 1}`"
          >
            {{ role }}
          </div>

        </div>


        <!-- =====================================
             PROFILE
        ====================================== -->

        <div class="hero-profile">

          <div class="profile-ring"></div>

          <img
            :src="heroImg"
            alt="Debby Verzosa"
          />

        </div>


        <!-- Decorative dots -->
        <div class="floating-dot dot-one"></div>

        <div class="floating-dot dot-two"></div>

      </div>

    </div>


    <!-- =========================================
         SCROLL INDICATOR
    ========================================== -->

    <a
      href="#about"
      class="scroll-indicator"
      aria-label="Scroll to About"
    >

      <span>
        Scroll to explore
      </span>

      <div class="scroll-line"></div>

    </a>

  </section>
</template>

<style lang="scss">
@use '../styles/hero.scss';
</style>