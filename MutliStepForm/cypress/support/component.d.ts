import { MountOptions, MountReturn } from 'cypress/react'
import { ReactNode } from 'react'

declare global {
  namespace Cypress {
    interface Chainable {
      mount(children: ReactNode, options?: MountOptions): Chainable<MountReturn>
    }
  }
}

export {}
