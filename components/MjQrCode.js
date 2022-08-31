import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-image-text': [],
  'mj-body': ['mj-qr-code'],
  'mj-section': ['mj-qr-code'],
  'mj-wrapper': ['mj-qr-code'],
  'mj-column': ['mj-qr-code'],
})

export default class MjQrCode extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    // QR-related attributes
    value: 'string',
    color: 'color',
    'background-color': 'color',
    'qr-margin': 'unit(blocks)',
    'error-correction-level': 'string',
    width: 'unit(px)',
    host: 'string',
    protocol: 'string',

    // Image attributes
    alt: 'string',
    href: 'string',
    name: 'string',
    src: 'string',
    srcset: 'string',
    title: 'string',
    rel: 'string',
    align: 'enum(left,center,right)',
    border: 'string',
    'border-bottom': 'string',
    'border-left': 'string',
    'border-right': 'string',
    'border-top': 'string',
    'border-radius': 'unit(px,%){1,4}',
    'container-background-color': 'color',
    'fluid-on-mobile': 'boolean',
    padding: 'unit(px,%){1,4}',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    target: 'string',
    height: 'unit(px,auto)',
    'max-height': 'unit(px,%)',
    'font-size': 'unit(px)',
    usemap: 'string',
  }

  static defaultAttributes = {
    // QR-related attributes
    value: null,
    color: '#000000',
    'background-color': '#ffffff',
    'qr-margin': 4,
    'error-correction-level': 'M',
    width: 200,
    host: 'quickchart.io',
    protocol: 'https',
  }

  getUrl() {
    const val = this.getAttribute('value')
    if (!val) {
      throw new Error('You must specify a "value" attribute for mjml-qr-code')
    }
    const content = encodeURIComponent(val)
    const width = this.getAttribute('width')
    const foregroundColor = encodeURIComponent(this.getAttribute('color').replace('#', ''))
    const backgroundColor = encodeURIComponent(
      this.getAttribute('background-color').replace('#', ''),
    )
    const ecLevel = this.getAttribute('error-correction-level')
    const margin = this.getAttribute('qr-margin')
    return `${this.getAttribute('protocol')}://${this.getAttribute(
      'host',
    )}/qr?text=${content}&size=${width}&dark=${foregroundColor}&light=${backgroundColor}&ecLevel=${ecLevel}&margin=${margin}&ref=mjml`
  }

  renderImage() {
    const attributes = {}
    Object.keys(MjQrCode.allowedAttributes).forEach((key) => {
      attributes[key] = this.getAttribute(key)
    })
    attributes.src = this.getUrl()
    return `
      <mj-image
        ${this.htmlAttributes(attributes)}
      >
      </mj-image>
    `
  }

  render() {
    return this.renderMJML(this.renderImage())
  }
}
