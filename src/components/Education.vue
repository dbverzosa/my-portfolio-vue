<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const education = [
  {
    period: '2020 — 2024',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Caraga State University - Ampayon Campus',
    achievement: 'Cum Laude',
  },
  {
    period: '2018 — 2020',
    degree: 'Accountancy, Business, and Management',
    school: 'Agusan National High School - Senior High School',
    achievement: 'With High Honors',
  },
]
</script>

<template>
  <section id="education" class="education section">
    <div class="section-container">

      <!-- Section Heading -->
      <div class="section-heading reveal">
        <p>Education</p>

        <h2>
          Academic background
        </h2>
      </div>

      <!-- Education List -->
      <div class="education-list">

        <article
          v-for="(item, index) in education"
          :key="item.degree"
          class="education-card"
          :class="index === 0 ? 'reveal-right' : 'reveal-left'"
        >

          <!-- Year -->
          <div class="education-year">
            {{ item.period }}
          </div>

          <!-- Education Details -->
          <div class="education-content">

            <h3>
              {{ item.degree }}
            </h3>

            <h4>
              {{ item.school }}
            </h4>

            <!-- Achievement -->
            <span class="education-achievement">
              {{ item.achievement }}
            </span>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/education.scss';
</style>