// Crea e scarica il PDF del Curriculum, con gli stessi dati della pagina (src/data/cv.js)
// e i testi nella lingua scelta. Il testo nel PDF è vero testo: si può selezionare e cercare.
//
// jsPDF è grande, quindi lo carichiamo solo quando qualcuno clicca il tasto (import dinamico).

const PAGE = { width: 210, height: 297, margin: 18 } // A4, in millimetri
const DATE_COL = 38 // larghezza della colonna delle date

const COLOR = {
  heading: [59, 65, 66], // Forest River, come i titoli del sito
  text: [35, 32, 44],
  soft: [105, 108, 110],
  accent: [111, 90, 168], // il violetto dei link
  line: [220, 218, 214],
}

export async function downloadCvPdf({ t, period, experience, education, skills, linkedin }) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })

  const left = PAGE.margin
  const right = PAGE.width - PAGE.margin
  const bodyLeft = left + DATE_COL
  const bodyWidth = right - bodyLeft
  let y = PAGE.margin

  // Se il prossimo blocco non entra nella pagina, ne apre una nuova
  function ensureSpace(height) {
    if (y + height > PAGE.height - PAGE.margin) {
      doc.addPage()
      y = PAGE.margin
    }
  }

  function setText(size, color, style = 'normal') {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(...color)
  }

  // Altezza di una riga di testo in mm per una certa grandezza (in punti)
  const lineHeight = (size) => size * 0.3528 * 1.35

  // Scrive un testo che va a capo da solo e sposta y sotto di lui
  function paragraph(text, x, width, size, color, style) {
    setText(size, color, style)
    const lines = doc.splitTextToSize(text, width)
    ensureSpace(lines.length * lineHeight(size))
    doc.text(lines, x, y, { baseline: 'top' })
    y += lines.length * lineHeight(size)
  }

  function sectionTitle(text) {
    ensureSpace(16)
    y += 4
    setText(14, COLOR.heading)
    doc.text(text, left, y, { baseline: 'top' })
    y += lineHeight(14) + 1
    doc.setDrawColor(...COLOR.line)
    doc.setLineWidth(0.3)
    doc.line(left, y, right, y)
    y += 5
  }

  // Una riga del CV: periodo a sinistra, contenuto a destra (come nella pagina)
  function entry({ when, title, lines, description, tags }) {
    ensureSpace(18)
    const top = y
    setText(9, COLOR.soft)
    doc.text(doc.splitTextToSize(when, DATE_COL - 4), left, top, { baseline: 'top' })

    paragraph(title, bodyLeft, bodyWidth, 11.5, COLOR.heading, 'bold')
    for (const line of lines) {
      if (line) paragraph(line, bodyLeft, bodyWidth, 9.5, COLOR.soft)
    }
    if (description) {
      y += 1.5
      paragraph(description, bodyLeft, bodyWidth, 9.5, COLOR.text)
    }
    if (tags) {
      y += 1
      paragraph(tags, bodyLeft, bodyWidth, 9, COLOR.accent)
    }
    y += 5
  }

  // === Intestazione ===
  setText(24, COLOR.heading)
  doc.text(t('curriculum.name'), left, y, { baseline: 'top' })
  y += lineHeight(24) + 1
  paragraph(t('curriculum.role'), left, right - left, 12, COLOR.text)
  y += 1
  setText(9.5, COLOR.soft)
  const place = `${t('curriculum.location')}  ·  `
  doc.text(place, left, y, { baseline: 'top' })
  doc.setTextColor(...COLOR.accent)
  doc.textWithLink(t('curriculum.linkedin'), left + doc.getTextWidth(place), y, {
    url: linkedin,
    baseline: 'top',
  })
  y += lineHeight(9.5) + 4

  // === Esperienza ===
  sectionTitle(t('curriculum.experienceTitle'))
  for (const job of experience) {
    entry({
      when: period(job),
      title: t(`curriculum.experience.${job.id}.role`),
      lines: [job.org, t(`curriculum.experience.${job.id}.type`)],
      description: t(`curriculum.experience.${job.id}.description`),
      tags: job.skills.length ? job.skills.join('  ·  ') : '',
    })
  }

  // === Formazione ===
  sectionTitle(t('curriculum.educationTitle'))
  for (const study of education) {
    entry({
      when: period(study),
      title: t(`curriculum.education.${study.id}`),
      lines: [study.org, study.grade ? `${t('curriculum.grade')}: ${study.grade}` : ''],
    })
  }

  // === Competenze ===
  sectionTitle(t('curriculum.skillsTitle'))
  paragraph(skills.join('  ·  '), left, right - left, 10, COLOR.text)

  doc.save('Chiara-Catizone-CV.pdf')
}
