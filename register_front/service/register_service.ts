
const API_BASE_URL = 'http://127.0.0.1:3001'

interface RegisterFormData {
    name:string,
    last_name:string,
    email:string,
    phone_number:string,
    password:string,
    c_password:string
}

export function validateFormData(name:string , email:string, phonenumber:string, password:string, cpassword:string,last_name?:string): string | boolean
{
  if(name === undefined || !name.match(/^[A-Za-z]+$/)){
      return "El nombre es requerido y solo puedes digitar letras ya sean mayusculas o minusculas";
  }

  if(email === undefined || !email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/))
  {
      return "El email es requerido | escribe un correo valido";
  }
  if(phonenumber === undefined || !(phonenumber.match(/^\d{10}$/))){
     return "El numero de telefono es requerido | escribe un numero de telefono valido";
  }

  if( (password === undefined || cpassword === undefined) || (cpassword !== password) || !(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))){
    return "La contraseña es un campo requerido \n" +
      " debe coincidir con la confirmacion \n" +
      " escribe una contraseña valida (Minimo 8 caracteres, al menos una letra mayuscula, un numero y un simbolo) \n";
  }

  if( last_name !== undefined && !(last_name.match(/^[A-Za-z]+$/))){
    return "El apellido solo puede contener letras";
  }

  return true;
}

export function sendForm(registerData:RegisterFormData) : string {

  let responseText:string = "";

  fetch(`${API_BASE_URL}/user/create`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(registerData)
    }).then(res => {
      res.json().then(data => {
        responseText = data.message;
      }).catch(e => {
        responseText = e.message
      });
    }
  ).catch(e => {
    responseText = e.message;
  })


  return responseText;

}
