import { customState } from "../interfaceSet/Interface";

export const signUpState: customState<string> = {
  id: '',
  pwd: '',
  email: '',
  tel: '',
  address: '',
}

export const signInState: customState<string> = {
  id: '',
  pwd: '',
}