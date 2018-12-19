function formValidation() {
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  var uname = document.registration.username;
  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
          if (ValidateEmail(uemail)) {
          }
        }
      }
    }
  }
  return false;
}
