<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      'PHP',
      'Java',
      'C',
      'C++',
    ],
  },

  {
    title: 'Frameworks & Libraries',
    skills: [
      'Laravel',
      'React',
      'React Native',
      'Expo',
      'Vue',
    ],
  },

  {
    title: 'Web Technologies',
    skills: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'AJAX',
    ],
  },

  {
    title: 'Database Management',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Firebase',
    ],
  },

  {
    title: 'Software Development',
    skills: [
      'OOP',
      'MVC Architecture',
      'REST API Integration',
      'Responsive Web Design',
    ],
  },

  {
    title: 'Version Control',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
    ],
  },

  {
    title: 'DevOps & Development Tools',
    skills: [
      'CI/CD',
      'Docker',
      'VS Code',
      'Cursor',
      'XAMPP',
      'Composer',
    ],
  },

  {
    title: 'Networking',
    skills: [
      'TCP/IP',
      'LAN/WAN',
      'IP Addressing',
      'DHCP',
      'PPPoE',
      'MikroTik',
    ],
  },
]
</script>

<template>
  <section id="skills" class="skills section">
    <div class="section-container">

      <!-- Section Heading -->
      <div class="section-heading reveal">
        <p>Skills</p>

        <h2>
          My technical toolkit
        </h2>
      </div>

      <!-- Technical Skills -->
      <div class="skills-grid stagger">

        <article
          v-for="(group, index) in skillGroups"
          :key="group.title"
          class="skill-card"
        >
          <div class="skill-card-header">

            <span class="skill-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <h3>
              {{ group.title }}
            </h3>

          </div>

          <div class="skill-tags">
            <span
              v-for="skill in group.skills"
              :key="skill"
            >
              {{ skill }}
            </span>
          </div>

        </article>

      </div>

      <!-- Professional Skills -->
      <div class="professional-skills reveal">

        <div class="professional-header">

          <span class="professional-label">
            Professional Skills
          </span>

          <h3>
            Beyond technical knowledge
          </h3>

        </div>

        <div class="professional-tags">

          <span>Problem Solving</span>
          <span>Debugging</span>
          <span>Analytical Thinking</span>
          <span>Research</span>
          <span>Communication</span>
          <span>Teamwork</span>
          <span>Time Management</span>
          <span>Adaptability</span>

        </div>

      </div>

    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/skills.scss';
</style>