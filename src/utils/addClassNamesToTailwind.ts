function addClassNamesToTailwind(
  ...classes: (false | null | undefined | string)[]
) {
  return classes.filter(Boolean).join(' ');
}

export { addClassNamesToTailwind };
