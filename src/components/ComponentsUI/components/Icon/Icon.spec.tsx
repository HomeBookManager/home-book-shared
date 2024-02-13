import { render } from '@testing-library/react';

// @home-book
import { Theme } from 'home-book-types';

// components
import Icon from './Icon';
import { IconUpOutlined } from './components';

// core
import { ContextProvider } from '../../../../core/ContextProvider/ContextProvider';

// others
import { classNames as classNamesIcon } from './classNames';

// types
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { IconShape } from './enums';

// utils
import { composeClassNames } from './utils/composeClassNames';
import { getByE2EAttribute } from '../../../../tests/testHelpers';
import { getDataTestAttribute } from '../../../E2EDataAttributes/utils';

const iconComponent = IconUpOutlined;
const iconShape = IconShape.upOutlined;

const className = 'className';
const classNamePath = 'classNamePath';

const classNameIconShape = classNamesIcon[iconShape];
const classNames = composeClassNames(iconShape);

describe('Icon behaviors', () => {
  it('should not apply default styles when all specific props passed', () => {
    // mock
    const fill = '#000000';
    const fillDark = '#000000';
    const stroke = '#000000';
    const strokeDark = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          fill={fill}
          fillDark={fillDark}
          iconComponent={iconComponent}
          iconShape={iconShape}
          ignoreDefaultStyles
          stroke={stroke}
          strokeDark={strokeDark}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should not apply default styles when ignoreDefaultStyles passed', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          iconComponent={iconComponent}
          iconShape={iconShape}
          ignoreDefaultStyles
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should not apply default styles when fill passed', () => {
    // mock
    const fill = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon fill={fill} iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should not apply default styles when fillDark passed', () => {
    // mock
    const fillDark = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          fillDark={fillDark}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should not apply default styles when stroke passed', () => {
    // mock
    const stroke = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          iconComponent={iconComponent}
          iconShape={iconShape}
          stroke={stroke}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should not apply default styles when strokeDark passed', () => {
    // mock
    const strokeDark = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          iconComponent={iconComponent}
          iconShape={iconShape}
          strokeDark={strokeDark}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });
});

describe('Icon props', () => {
  it('should pass className', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          className={className}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(container.querySelector(`.${className}`)).toHaveClass(className);
  });

  it('should pass classNamePath', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          classNamePath={classNamePath}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(container.querySelector(`.${classNamePath}`)).toHaveClass(
      classNamePath,
    );
  });

  it('should pass clickable', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon clickable iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveClass(
      classNames[classNameIconShape].modificators.clickable,
    );
  });

  it('should pass disabled', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon disabled iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveClass(
      classNames[classNameIconShape].modificators.disabled,
    );
  });

  it('should pass disabledFocus', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          disabledFocus
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveAttribute(
      'tabindex',
    );
  });

  it('should pass disabledHover', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          disabledHover
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveClass(
      classNames[classNameIconShape].modificators.disabledHover,
    );
  });

  it('should pass e2eAttribute', () => {
    // before
    const { container } = render(
      <ContextProvider>
        <Icon
          e2eAttribute={E2EAttribute.icon}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveAttribute(
      getDataTestAttribute(E2EAttribute.icon),
    );
  });

  it('should pass e2eValue', () => {
    // mock
    const e2eValue = 'e2eValue';

    // before
    const { container } = render(
      <ContextProvider>
        <Icon
          e2eValue={e2eValue}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveAttribute(
      getDataTestAttribute(E2EAttribute.icon),
      e2eValue,
    );
  });

  it('should pass fill', () => {
    // mock
    const fill = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          classNamePath={classNamePath}
          fill={fill}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(container.querySelector(`.${classNamePath}`)).toHaveAttribute(
      'fill',
      fill,
    );
  });

  it('should pass fillDark', () => {
    // mock
    const fillDark = '#000000';

    //before
    const { container } = render(
      <ContextProvider theme={Theme.dark}>
        <Icon
          classNamePath={classNamePath}
          fillDark={fillDark}
          iconComponent={iconComponent}
          iconShape={iconShape}
        />
      </ContextProvider>,
    );

    // result
    expect(container.querySelector(`.${classNamePath}`)).toHaveAttribute(
      'fill',
      fillDark,
    );
  });

  it('should pass forcedHover', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon forcedHover iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveClass(
      classNames[classNameIconShape].modificators.forcedHover,
    );
  });

  it('should pass iconComponent', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon).tagName).toBe('svg');
  });

  it('should pass iconShape', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should pass ignoreDefaultStyles', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          iconComponent={iconComponent}
          iconShape={iconShape}
          ignoreDefaultStyles
        />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).not.toHaveClass(
      classNames[classNameIconShape].name,
    );
  });

  it('should pass selected', () => {
    //before
    const { container } = render(
      <ContextProvider>
        <Icon iconComponent={iconComponent} iconShape={iconShape} selected />
      </ContextProvider>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.icon)).toHaveClass(
      classNames[classNameIconShape].modificators.selected,
    );
  });

  it('should pass stroke', () => {
    // mock
    const stroke = '#000000';

    //before
    const { container } = render(
      <ContextProvider>
        <Icon
          classNamePath={classNamePath}
          iconComponent={iconComponent}
          iconShape={iconShape}
          stroke={stroke}
        />
      </ContextProvider>,
    );

    // result
    expect(container.querySelector(`.${classNamePath}`)).not.toHaveAttribute(
      'stroke',
      stroke,
    );
  });

  it('should pass strokeDark', () => {
    // mock
    const strokeDark = '#000000';

    //before
    const { container } = render(
      <ContextProvider theme={Theme.dark}>
        <Icon
          classNamePath={classNamePath}
          iconComponent={iconComponent}
          iconShape={iconShape}
          strokeDark={strokeDark}
        />
      </ContextProvider>,
    );

    // result
    expect(container.querySelector(`.${classNamePath}`)).not.toHaveAttribute(
      'stroke',
      strokeDark,
    );
  });
});

describe('Icon snapshots', () => {
  it('should render Icon', () => {
    //before
    const { asFragment } = render(
      <ContextProvider>
        <Icon iconComponent={iconComponent} iconShape={iconShape} />
      </ContextProvider>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
