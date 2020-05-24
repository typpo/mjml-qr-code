import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'

import MjQrCode from '../components/MjQrCode'

function toHtml(mjml) {
  const conversion = mjml2html(mjml)
  const errors = conversion.errors
  if (errors.length > 0) {
    return errors
  }
  return conversion.html
}

describe('mjml-qr-code', () => {
  beforeAll(() => {
    registerComponent(MjQrCode)
  })

  it('should render the qr code', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-qr-code value="hello world" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `),
    ).toContain('<img\n         height="auto" src="https://quickchart.io')
  })

  it('should support custom error correction level', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-qr-code value="hello world" error-correction-level="Q" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `),
    ).toContain('&ecLevel=Q')
  })

  it('should support custom colors', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-qr-code value="hello world" color="#ff0000" background-color="#ffffff" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `),
    ).toContain('dark=ff0000&light=ffffff')
  })

  it('should support custom margin', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-qr-code value="hello world" qr-margin="5blocks" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `),
    ).toContain('&margin=5')
  })

  it('should support custom host and protocol', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-qr-code value="hello world" host="foobar.com" protocol="http"/>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `),
    ).toContain('<img\n         height="auto" src="http://foobar.com')
  })

  it('should error without a value', () => {
    expect(() => {
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-qr-code width="200" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `)
    }).toThrow()
  })
})
