export const parseActionTextAttachment = (el) => {
  const attachments = el.querySelectorAll(
    'action-text-attachment[content-type="image/png"]'
  )

  attachments.forEach((attachment) => {
    const img = document.createElement('img')
    const figcaption = document.createElement('figcaption')
    const figure = document.createElement('figure')
    for (const attr of attachment.attributes) {
      const attrName = attr.name
      if (attrName === 'url') {
        img.setAttribute('src', attachment.getAttribute(attrName))
      } else {
        img.setAttribute(attrName, attachment.getAttribute(attrName))
      }
      if (attrName === 'caption') {
        figcaption.textContent = attachment.getAttribute(attrName)
      }
    }
    figure.appendChild(img)
    figure.appendChild(figcaption)
    attachment.parentNode.replaceChild(figure, attachment)
  })
}
