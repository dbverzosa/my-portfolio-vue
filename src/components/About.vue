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

      <div class="about-grid">

        <!-- About Text -->
        <div class="about-text reveal-left">

            <p>
               I earned my Bachelor of Science in Information Technology from
               Caraga State University - Main Campus, graduating Cum Laude. 
                My academic background provided me with a strong foundation in
                programming, software development, databases, networking, and
                information technology, reflecting my dedication and strengthening
                my commitment to academic excellence and continuous learning.
            </p>
            <p>
                My experience includes working as a Lecturer and Intern Programmer.
                As a Lecturer, I taught programming, computer networking, computing,
                and mathematics-related courses to Engineering, Information Technology,
                and Applied Mathematics students, while also participating in
                departmental and institutional research and activities. As an Intern
                Programmer, I gained hands-on experience in software development,
                system implementation, networking, troubleshooting, and technical
                instruction. In addition to my experience, I have developed
                personal and outsourced projects that have strengthened my ability to
                build practical solutions, solve real-world problems, and adapt to
                different project requirements.
            </p>

            <p>
                I enjoy turning ideas and real-world problems into functional,
                user-friendly, and practical technology solutions. I am always eager
                to learn, explore new technologies, and continuously improve my
                technical skills, development practices, and approach to solving
                problems.
            </p>

            <a href="#contact" class="about-btn">
                <span>Let's Work Together</span>
                <span class="arrow">→</span>
            </a>

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

    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/about.scss';
</style>