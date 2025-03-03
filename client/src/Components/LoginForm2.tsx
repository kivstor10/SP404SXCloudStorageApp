import type { FormEvent } from "react"
import { Amplify } from "aws-amplify"
import { signIn } from "aws-amplify/auth"
import outputs from "../../../amplify_outputs.json"

Amplify.configure(outputs)

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements
}

export default function App() {
  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault()
    const form = event.currentTarget
    // ... validate inputs
    const { nextStep: signInNextStep } = await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    })
    if (signInNextStep.signInStep === 'DONE') {
        console.log('Sign in successful!');
    }
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" />
    </form>
  )
}