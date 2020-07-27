import * as Yup from 'yup';

Yup.setLocale({
  string: {
    email: 'Email inválido',
    min: 'Minimo de ${min} caracteres',
  },
  mixed: {
    required: 'Preencha os campos',
  },
});

export const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8)
    .matches(/\d/, 'A Senha deve conter um número')
    .matches(/[a-z]/i, 'A Senha deve conter uma letra')
    .required(),
});
