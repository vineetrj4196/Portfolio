export const RULES = {
  name: { required: true, minLength: 2, label: "Name" },
  email: { required: true, email: true, label: "Email" },
  subject: { required: true, minLength: 3, label: "Subject" },
  message: { required: true, minLength: 10, label: "Message" },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(field, value) {
  const rule = RULES[field];
  const trimmed = value.trim();

  if (rule.required && !trimmed) return `${rule.label} is required.`;
  if (rule.minLength && trimmed.length < rule.minLength) {
    return `${rule.label} must be at least ${rule.minLength} characters.`;
  }
  if (rule.email && !EMAIL_RE.test(trimmed)) return "Enter a valid email address.";
  return "";
}
