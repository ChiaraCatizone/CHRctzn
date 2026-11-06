<script setup>
import LogoLine from '@/components/LogoLine.vue'

// Le card della home: aggiungi, togli o modifica gli elementi di questo array.
const sections = [
  {
    title: 'My Curriculum Vitae',
    text: 'Questo è il posto per il link al CV:',
    link: { to: '/about', label: 'Vai al CV' },
  },
  // Segnaposto: sostituiscili con i contenuti veri
  ...Array.from({ length: 11 }, () => ({ title: 'My Curriculum Vitae' })),
]
</script>

<template>
  <main class="main">
    <div class="content">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12">
          <LogoLine stroke="#f2f1da" />
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12">
          <div class="row">
            <div class="melting-text-container">
              <h1 class="melting-text">Congrats Stranger,</h1>
            </div>
            <h1>you just landed on my Web Page!</h1>
            <p>Construction is happening. 🎉</p>
            <h2>Here you will find:</h2>
          </div>
          <div class="row">
            <div class="card">
              <div class="card-body">
                <div class="card-text">
                  <div class="row">
                    <div
                      v-for="(section, i) in sections"
                      :key="i"
                      class="col-md-4 col-lg-4 col-sm-12"
                    >
                      <div class="card card-secondary">
                        <div class="card-body">
                          <div class="card-title">
                            <h3>{{ section.title }}</h3>
                          </div>
                          <div class="card-text">
                            <p v-if="section.text">{{ section.text }}</p>
                            <RouterLink v-if="section.link" :to="section.link.to">
                              {{ section.link.label }}
                            </RouterLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped src="./home.css"></style>
<style scoped src="./homeresponsive.css"></style>
