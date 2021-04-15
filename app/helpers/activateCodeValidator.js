export function activateCodeValidator(activateCode) {
  if (!activateCode) return "Aktivasyon Kodu boş olamaz!"
  if (activateCode.length != 11) return 'Aktiasyon Kodu 11 karakter olmak zorundadır!'
  return ''
}
