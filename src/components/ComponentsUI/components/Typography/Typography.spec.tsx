import { render } from '@testing-library/react';

// @home-book
import { COMMON_COLORS, DARK_COLORS, LIGHT_COLORS } from 'home-book-constants';
import { Theme } from 'home-book-types';

// components
import Typography from './Typography';

// others
import { className as classNameTypography, classNames } from './classNames';

// types
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { TTypographyColorMode } from './types';
import {
  TypographyFontStyle,
  TypographyFontType,
  TypographyFontWeight,
} from './enums';

// utils
import { getByE2EAttribute } from '../../../../tests/testHelpers';
import { getDataTestAttribute } from '../../../E2EDataAttributes/utils';
import { hexToRgb } from '../../../../utils/transform/hexToRgb/hexToRgb';

const className = 'className';

describe('Typography props', () => {
  it('should pass children', () => {
    // mock
    const children = 'children';

    //before
    const { container } = render(<Typography>{children}</Typography>);

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveTextContent(
      children,
    );
  });

  it('should pass className', () => {
    //before
    const { container } = render(
      <Typography className={className}>children</Typography>,
    );

    // result
    expect(container.querySelector(`.${className}`)).toHaveClass(className);
  });

  it('should pass color', () => {
    //before
    const rgb = hexToRgb(COMMON_COLORS.blue1);

    const { container } = render(
      <Typography color={COMMON_COLORS.blue1}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveAttribute(
      'style',
      `color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});`,
    );
  });

  it('should pass colorMode', () => {
    // mock
    const colorMode: TTypographyColorMode = {
      [Theme.dark]: DARK_COLORS.neutral5,
      [Theme.light]: LIGHT_COLORS.neutral5,
    };

    //before
    const rgb = hexToRgb(LIGHT_COLORS.neutral5);

    const { container } = render(
      <Typography colorMode={colorMode}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveAttribute(
      'style',
      `color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});`,
    );
  });

  it('should pass e2eAttribute', () => {
    // before
    const { container } = render(
      <Typography e2eAttribute={E2EAttribute.text}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveAttribute(
      getDataTestAttribute(E2EAttribute.text),
    );
  });

  it('should pass e2eValue', () => {
    // mock
    const e2eValue = 'e2eValue';

    // before
    const { container } = render(
      <Typography e2eValue={e2eValue}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveAttribute(
      getDataTestAttribute(E2EAttribute.text),
      e2eValue,
    );
  });

  it('should pass fontStyle', () => {
    //before
    const { container } = render(
      <Typography fontStyle={TypographyFontStyle.italic}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveClass(
      classNames[classNameTypography].modificators[TypographyFontStyle.italic],
    );
  });

  it('should pass fontType', () => {
    //before
    const { container } = render(
      <Typography fontType={TypographyFontType.h1}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveClass(
      classNames[classNameTypography].modificators[TypographyFontType.h1],
    );

    expect(
      container.getElementsByTagName(TypographyFontType.h1)[0],
    ).toBeDefined();
  });

  it('should pass fontWeight', () => {
    //before
    const { container } = render(
      <Typography fontWeight={TypographyFontWeight.black}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveClass(
      classNames[classNameTypography].modificators[TypographyFontWeight.black],
    );
  });

  it('should pass innerHtml', () => {
    // mock
    const children = 'children';
    const htmlTag = 'span';

    //before
    const { container } = render(
      <Typography innerHtml={`<${htmlTag}>${children}</${htmlTag}>`} />,
    );

    // result
    expect(container.getElementsByTagName(htmlTag)[0]).toBeDefined();

    expect(container.getElementsByTagName(htmlTag)[0]).toHaveTextContent(
      children,
    );
  });

  it('should pass noWrap', () => {
    //before
    const { container } = render(<Typography noWrap>children</Typography>);

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveClass(
      classNames[classNameTypography].modificators.noWrap,
    );
  });

  it('should pass withoutMargin', () => {
    //before
    const { container } = render(
      <Typography withoutMargin={false}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).not.toHaveClass(
      classNames[classNameTypography].modificators.withoutMargin,
    );
  });
});

describe('Typography snapshots', () => {
  it('should render empty', () => {
    //before
    const { asFragment } = render(<Typography />);

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with some text', () => {
    // before
    const { asFragment } = render(<Typography>Text</Typography>);

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with passed inner html', () => {
    // before
    const { asFragment } = render(
      <Typography innerHtml={'<div>innerHtml</div>'} />,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
