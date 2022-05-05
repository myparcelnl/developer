export const defaultFormProps = Object.freeze({
  id: {
    type: String,
    default: '',
  },

  label: {
    type: String,
    default: '',
  },

  modelValue: {
    type: [String, Number],
    default: '',
  },

  optional: {
    type: Boolean,
  },
});
