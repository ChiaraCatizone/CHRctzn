<script setup>
// Parti di Iago uguali in tutte le pose, così sembra sempre lo stesso gatto.

// La coda, identica a quella della camminata (attaccatura in 34,39)
const tail = 'M34 39C29 36 25 32 22 26C18 18 18 8 24 6C21 10 21 18 25 25C28 31 32 35 37 37'

// La testa vista di fronte, centrata in 0,0: stessa grandezza e stesse orecchie
// della testa di profilo, stessi occhi, naso e baffi
const frontHead = {
  outline:
    'M-11 2C-11-4-10-7-9-9L-8-15L-3-10.5C-1-11 1-11 3-10.5L8-15L9-9C10-7 11-4 11 2C11 7 6 10 0 10C-6 10-11 7-11 2Z',
  nose: 'M-1.2 3.5h2.4L0 5z',
  details: 'M0 5.5q-1 1.8-2.5 1M0 5.5q1 1.8 2.5 1M-6 5l-8-1M-6 7l-8 1.5M6 5l8-1M6 7l8 1.5',
}

// Da seduto: la linea del pavimento sale sul sedere, disegna la coda (più bassa di quando
// cammina) e continua nella schiena. "a" e "b" sono le due posizioni della coda che ondeggia:
// hanno gli stessi comandi, così il browser può passare dolcemente dall'una all'altra.
const sitLine = {
  a: 'M2 66H48C47 64 46.5 62.5 47 61C41 59 35 54 33 48C31 42 32 36 36 34C34 38 34 43 36 48C38 53 43 57 49 58C50 52 57 45 66 42C72 40.5 79 39.5 84 38M90 40C87 48 85 57 85 66H118',
  b: 'M2 66H48C47 64 46.5 62.5 47 61C41 58 36 52 35 46C34 40 36 35 40 33C37 37 36 43 38 48C40 53 44 57 49 58C50 52 57 45 66 42C72 40.5 79 39.5 84 38M90 40C87 48 85 57 85 66H118',
}

// Chi ha chiesto al sistema meno animazioni vede la coda ferma
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <!--
    Iago e il computer, disegnati con la stessa linea del pavimento (la linea del footer).
    Iago cammina verso il computer, si gira, si siede guardando chi visita per 3,5 secondi
    muovendo la coda, poi torna indietro; a sinistra si gira e riparte (vedi iago-scene.css).
    È solo decorativo (aria-hidden). Chi ha chiesto al sistema di ridurre le animazioni
    vede Iago seduto fermo accanto al computer.
  -->
  <div class="scene" aria-hidden="true">
    <svg width="0" height="0" class="scene-defs">
      <defs>
        <!-- Sfuma i capi delle linee, così si fondono con il pavimento -->
        <linearGradient id="iago-fade-gradient">
          <stop offset="0" stop-color="#fff" stop-opacity="0" />
          <stop offset="0.14" stop-color="#fff" stop-opacity="1" />
          <stop offset="0.86" stop-color="#fff" stop-opacity="1" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <mask id="iago-fade" maskContentUnits="objectBoundingBox">
          <rect width="1" height="1" fill="url(#iago-fade-gradient)" />
        </mask>
      </defs>
    </svg>

    <!-- Il computer tutto-in-uno con la tastiera, fermo a destra -->
    <svg class="line-art computer" viewBox="0 0 120 67">
      <g mask="url(#iago-fade)">
        <path d="M2 66H40L42 62V20Q42 14 48 14H72Q78 14 78 20V62L80 66H86L88 62H108L110 66H118" />
        <path d="M42 62H78" />
        <path d="M48 20H72V44H48Z" />
        <path class="screen" d="M52 27l3 3-3 3M57 33h5" />
        <path d="M62 53h10M91 64h3M97 64h3M103 64h2" />
      </g>
    </svg>

    <!-- Iago -->
    <div class="cat">
      <svg class="line-art" viewBox="0 0 120 67">
        <g mask="url(#iago-fade)">
          <!-- Mentre cammina: due pose che si alternano, con il muso di profilo -->
          <g class="walking">
            <path
              class="pose pose-a"
              d="M2 66H27L31 55C30 49 31 43 34 39C29 36 25 32 22 26C18 18 18 8 24 6C21 10 21 18 25 25C28 31 32 35 37 37C44 33 54 32 60 32C68 32 75 33 81 31C81 27 83 23 85 19L88 25C90 24.5 93 24.5 95 25L99 20C100 25 101 29 101 34C101 38 99 42 96 44C92 46 86 47 82 46C80 49 78 52 75 54L77 66H118"
            />
            <path
              class="pose pose-b"
              d="M2 66H35L31 55C30 49 31 43 34 39C29 36 25 32 22 26C18 18 18 8 24 6C21 10 21 18 25 25C28 31 32 35 37 37C44 33 54 32 60 32C68 32 75 33 81 31C81 27 83 23 85 19L88 25C90 24.5 93 24.5 95 25L99 20C100 25 101 29 101 34C101 38 99 42 96 44C92 46 86 47 82 46C80 49 78 52 75 54L70 66H118"
            />
            <path d="M37 55C46 59 58 59 66 56" />
            <circle class="eye" cx="92" cy="33" r="1.3" />
            <circle class="nose" cx="100.5" cy="36.5" r="1" />
            <path d="M98 40l9-1M98 42l9 1.5" />
          </g>

          <!--
            Posa intermedia: Iago in piedi girato verso chi guarda.
            Si vede per un attimo quando si siede, quando si rialza e quando si gira.
          -->
          <g class="turning">
            <!-- La coda parte da dietro il corpo: la sagoma piena del corpo ne copre l'attaccatura -->
            <g transform="translate(10 6)">
              <path :d="tail" />
            </g>
            <path
              class="body-fill"
              d="M45.5 52C42 46 44 39 50 34L70 34C76 39 78 46 74.5 52L75 66H45Z"
            />
            <path d="M2 66H45L45.5 52C42 46 44 39 50 34M70 34C76 39 78 46 74.5 52L75 66H118" />
            <path d="M55 66V49M65 66V49" />
            <g transform="translate(60 26)">
              <path class="head" :d="frontHead.outline" />
              <circle class="eye" cx="-4.5" cy="0" r="1.3" />
              <circle class="eye" cx="4.5" cy="0" r="1.3" />
              <path class="nose" :d="frontHead.nose" />
              <path :d="frontHead.details" />
            </g>
          </g>

          <!--
            Seduto: il corpo resta di profilo (già girato verso sinistra, vedi il CSS),
            il viso guarda chi visita e la coda alzata ondeggia piano
          -->
          <g class="sitting">
            <!-- Una sola linea: pavimento, sedere, coda (bassa) e schiena, come quando cammina.
                 La coda ondeggia passando piano tra due forme (animate) -->
            <path :d="sitLine.a">
              <animate
                v-if="!reducedMotion"
                attributeName="d"
                :values="`${sitLine.a};${sitLine.b};${sitLine.a}`"
                dur="2.8s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              />
            </path>
            <path d="M64 66C62 60 65 55 71 54M79 66V54" />
            <g transform="translate(93 31)">
              <path class="head" :d="frontHead.outline" />
              <circle class="eye" cx="-4.5" cy="0" r="1.3" />
              <circle class="eye" cx="4.5" cy="0" r="1.3" />
              <path class="nose" :d="frontHead.nose" />
              <path :d="frontHead.details" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped src="./iago-scene.css"></style>
