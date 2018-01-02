import { AlertButton, ToggleButton } from 'shared-components'

export default () =>
  <div>
    <div>Welcome to {typeof window !== 'undefined' ? 'client' : 'server'} side next.js!</div>
    <h2>Shared Buttons:</h2>
    <AlertButton />&nbsp;
    <ToggleButton />
  </div>
