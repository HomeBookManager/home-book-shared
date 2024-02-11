import { render } from '@testing-library/react';

// @home-book
import { COMMON_COLORS, LIGHT_COLORS } from 'home-book-constants';

// components
import Typography from './Typography';

// others
import { className as classNameTypography, classNames } from './classNames';
import { TYPOGRAPHY_COLORS_MODE } from './constants';

// types
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
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
  it('should pass align', () => {
    // before
    const align = 'center';
    const rgb = hexToRgb(LIGHT_COLORS.neutral1);

    const { container } = render(
      <Typography align={align}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveAttribute(
      'style',
      `color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b}); text-align: ${align};`,
    );
  });

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
    const rgb1 = hexToRgb(COMMON_COLORS.blue1);
    const rgb2 = hexToRgb(LIGHT_COLORS.neutral5);

    const { container: container1 } = render(
      <Typography color={COMMON_COLORS.blue1}>children</Typography>,
    );

    const { container: container2 } = render(
      <Typography color={TYPOGRAPHY_COLORS_MODE.neutral5}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container1, E2EAttribute.text)).toHaveAttribute(
      'style',
      `color: rgb(${rgb1.r}, ${rgb1.g}, ${rgb1.b}); text-align: inherit;`,
    );

    expect(getByE2EAttribute(container2, E2EAttribute.text)).toHaveAttribute(
      'style',
      `color: rgb(${rgb2.r}, ${rgb2.g}, ${rgb2.b}); text-align: inherit;`,
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

  it('should pass style', () => {
    // before
    const rgb = hexToRgb(LIGHT_COLORS.neutral1);

    const { container } = render(
      <Typography style={{ width: '100%' }}>children</Typography>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.text)).toHaveAttribute(
      'style',
      `width: 100%; color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b}); text-align: inherit;`,
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
