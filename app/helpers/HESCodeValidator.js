export function HESCodeValidator(HESCode) {
  if (!HESCode) return "HES Kodu boş olamaz!"
  if (HESCode.length != 10) return 'HES Kodu 10 karakter olmak zorundadır!'
  return ''
}
