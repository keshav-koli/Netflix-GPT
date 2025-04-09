export function validateFormDataBySignIn(Email, Password) {
  let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
  let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    Password
  );

  if (!email) return "Email is not valid";
  if (!password) return "Password is not valid";
  
  return null;
}

export function validateFormDataBySignUp(...resArgs) {
  let Name = resArgs[0];
  let Email = resArgs[1];
  let Phone = resArgs[2];
  let Password=resArgs[3];

  let name = /^[A-Za-zÀ-ÿ\s'-]+$/.test(Name);
  let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
  let phone = /^(\+)([0-9]{2})(\s)(\d{10})$/.test(Phone);
  let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    Password
  );
  
  if (!name) return "Name is not valid";
  if (!email) return "Email is not valid";
  if (!phone) return "Phone is not valid";
  if (!password) return "Password is not valid";
  
  return null;
}
