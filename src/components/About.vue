
<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section id="about" class="about section">
    <div class="section-container">

      <div class="section-heading reveal">
        <p>About Me</p>

        <h2>
          Building solutions through technology
        </h2>
      </div>

      <!-- About Cards -->
      <div class="about-cards reveal-right">

        <article class="about-card">
          <span class="card-number">01</span>

          <h3>Web & Full-Stack Development</h3>

          <p>
            Building responsive and functional web applications using
            technologies such as Laravel, React, PHP, JavaScript, HTML,
            CSS, Bootstrap, and REST APIs.
          </p>
        </article>

        <article class="about-card">
          <span class="card-number">02</span>

          <h3>Software & Application Development</h3>

          <p>
            Developing practical web, mobile and console-based applications focused
            on solving real-world problems through structured programming,
            CRUD operations, system design, database integration, and application development practices.
          </p>
        </article>

        <article class="about-card">
          <span class="card-number">03</span>

          <h3>Networking & Technical Support</h3>

          <p>
            Working with computer networking, IP addressing, network
            configuration, troubleshooting, and connectivity while applying
            technical knowledge to practical computing environments.
          </p>
        </article>

        <article class="about-card">
          <span class="card-number">04</span>

          <h3>Teaching, Research & Projects</h3>

          <p>
            Teaching programming, computing, networking, and mathematics
            while conducting research and developing personal and outsourced
            projects that address different practical technical requirements.
          </p>
        </article>

      </div>

    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/about.scss';
</style>
