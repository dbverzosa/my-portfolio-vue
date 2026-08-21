<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section id="contact" class="contact section">
    <div class="section-container">

      <div class="contact-wrapper">

        <!-- Contact Introduction -->
        <div class="contact-heading reveal-left">

          <p>Contact me</p>

          <h2>
            Let's build something together.
          </h2>

          <span>
            I'm always open to discussing new projects,
            opportunities, collaborations, and ideas.
          </span>

        </div>

        <!-- Contact Links -->
        <div class="contact-links reveal-right">

          <!-- Email -->
          <a
            href="mailto:debbyverzosa@gmail.com"
            class="contact-item"
          >
            <span class="contact-icon">@</span>

            <div>
              <small>Email</small>
              <strong>debbyverzosa@gmail.com</strong>
            </div>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/dbverzosa"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <span class="contact-icon">in</span>

            <div>
              <small>LinkedIn</small>
              <strong>Connect with me</strong>
            </div>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/dbverzosa"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <span class="contact-icon">GH</span>

            <div>
              <small>GitHub</small>
              <strong>github.com/dbverzosa</strong>
            </div>
          </a>

          <!-- Phone -->
          <a
            href="tel:+639155672017"
            class="contact-item"
          >
            <span class="contact-icon">PH</span>

            <div>
              <small>Phone</small>
              <strong>+63 915 567 2017</strong>
            </div>
          </a>

        </div>

      </div>

    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/contact.scss';
</style>