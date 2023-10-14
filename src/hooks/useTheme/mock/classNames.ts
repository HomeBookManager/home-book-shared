export const classNames = {
  className: 'className',
  nestedClassName: {
    modificators: { nestedClassName: 'nestedClassName--modificator' },
    name: 'nestedClassName',
  },
};

export const classNamesWithTheme = {
  className: 'className className--dark',
  nestedClassName: {
    modificators: {
      nestedClassName:
        'nestedClassName--modificator nestedClassName--modificator--dark',
    },
    name: 'nestedClassName nestedClassName--dark',
  },
};
