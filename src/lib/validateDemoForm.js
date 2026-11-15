export function validateDemoForm({ name, email, company }) {
  const errors = {}

  if (!name?.trim()) {
    errors.name = 'Name is required'
  }

  if (!email?.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!company?.trim()) {
    errors.company = 'Company is required'
  }

  return errors
}