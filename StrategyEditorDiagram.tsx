// @ts-nocheck
/* eslint-disable   */
import cx from 'classnames';
import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FullScreenHandle } from 'react-full-screen';
import { useSelector } from 'react-redux';

// components
import E2EDataAttribute from '../../../../shared/E2EDataAttributes/E2EDataAttribute';
import StrategyEditorBlock from '../StrategyEditorBlock/StrategyEditorBlock';
import StrategyEditorConnector from '../StrategyEditorConnector/StrategyEditorConnector';
import StrategyEditorDiagramDropArea from './components/StrategyEditorDiagramDropArea/StrategyEditorDiagramDropArea';
import StrategyEditorDraggableConnector from '../StrategyEditorDraggableConnector/StrategyEditorDraggableConnector';

// hooks
import { useDiagramEvents } from './useDiagramEvents';
import { useTheme } from '../../../../hooks/useTheme/useTheme';
import { useWindowSize } from '../../../../hooks/useWindowSize/useWindowSize';

// others
import {
  className as connectorClassName,
  classNames as connectorClassNames,
} from '../StrategyEditorConnector/classNames';
import { className, classNames } from './classNames';

// store
import {
  areaCoordinatesSelector,
  filteredBlocksSelector,
  filteredConnectorsSelector,
  userSettingsSelector,
} from '../../../../store/strategyEditor/selectors';

// styles
import './strategy-editor-diagram.scss';

// types
import { E2EAttribute } from '../../../../shared/E2EDataAttributes/enums';
import { TObject } from '../../../../types/generic';

// utils
import { isCypressRunning } from '../../../../utils/isCypressRunning';
import { isJestRunning } from '../../../../tests/testHelpers';

export type TProps = {
  dragged: string;
  fullScreenHandle: FullScreenHandle;
};

let zoomMe;
let zoomMe1;

let offsetGrid1 = {
  x: 0,
  y: 0,
};

const test11 = (() => {
  const matrix = [1, 0, 0, 1, 0, 0]; // current view transform
  var m = matrix; // alias
  var scale = 0.1; // current scale
  const pos = { x: 0, y: 0 }; // current position of origin
  var dirty = true;
  const API = {
    applyTo(el) {
      if (dirty) {
        this.update();
      }
      zoomMe = document.getElementById('area');
      zoomMe1 = document.getElementById('area2');

      console.log(m);

      zoomMe.style.transform = `matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`;
      zoomMe1.style.backgroundPosition = `${offsetGrid1.x}px ${offsetGrid1.y}px`;
      zoomMe1.style.transform = `matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`;
    },
    update() {
      dirty = false;
      m[3] = m[0] = scale;
      m[2] = m[1] = 0;
      m[4] = pos.x;
      m[5] = pos.y;
    },
    pan(amount) {
      if (dirty) {
        this.update();
      }
      pos.x += amount.x;
      pos.y += amount.y;
      dirty = true;
    },
    scaleAt(at, amount) {
      // at in screen coords
      if (dirty) {
        this.update();
      }
      scale *= amount;
      pos.x = at.x - (at.x - pos.x) * amount;
      pos.y = at.y - (at.y - pos.y) * amount;
      dirty = true;
    },
  };
  return API;
})();

document.addEventListener('mousemove', mouseEvent, { passive: false });
document.addEventListener('mousedown', mouseEvent, { passive: false });
document.addEventListener('mouseup', mouseEvent, { passive: false });
document.addEventListener('mouseout', mouseEvent, { passive: false });
document.addEventListener('wheel', mouseWheelEvent, { passive: false });
const mouse = { x: 0, y: 0, oldX: 0, oldY: 0, button: false };
function mouseEvent(event) {
  zoomMe = document.getElementById('area');
  zoomMe1 = document.getElementById('area2');

  if (event.type === 'mousedown') {
    mouse.button = true;
  }
  if (event.type === 'mouseup' || event.type === 'mouseout') {
    mouse.button = false;
  }
  mouse.oldX = mouse.x;
  mouse.oldY = mouse.y;
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  if (mouse.button) {
    // pan
    test11.pan({ x: mouse.x - mouse.oldX, y: mouse.y - mouse.oldY });
    test11.applyTo(zoomMe);
  }
  event.preventDefault();
}
function mouseWheelEvent(event) {
  zoomMe = document.getElementById('area');
  zoomMe1 = document.getElementById('area2');

  console.log(zoomMe);
  const width = parseInt(getComputedStyle(zoomMe).width);
  const height = parseInt(getComputedStyle(zoomMe).height);

  const x = event.pageX - 250 - width / 2;
  const y = event.pageY - 60 - height / 2;
  if (event.deltaY < 0) {
    test11.scaleAt({ x, y }, 1.1);
    test11.applyTo(zoomMe);
  } else {
    test11.scaleAt({ x, y }, 1 / 1.1);
    test11.applyTo(zoomMe);
  }
  event.preventDefault();
}

const StrategyEditorDiagram: FC<TProps> = ({ dragged, fullScreenHandle }) => {
  const areaCoordinates = useSelector(areaCoordinatesSelector);
  const diagramRef = useRef<HTMLInputElement>(null);
  const filteredBlocks = useSelector(filteredBlocksSelector);
  const filteredConnectors = useSelector(filteredConnectorsSelector);
  const windowSize = useWindowSize();
  const [offsetGrid, setOffsetGrid] = useState({ x: 0, y: 0 });
  const { classNamesWithTheme } = useTheme(classNames);
  const { view } = useSelector(userSettingsSelector);

  // const { isPressing, ...events } = useDiagramEvents(fullScreenHandle);

  const { classNamesWithTheme: connectorClassNamesWithTheme } =
    useTheme(connectorClassNames);

  const getAreaStyles = (): TObject<number | string> => ({
    transform: `scale(${areaCoordinates.z}) translate(${areaCoordinates.x}px, ${areaCoordinates.y}px)`,
  });

  const getGridBackgroundStyles = (): TObject<number | string> => ({
    backgroundPosition: `${areaCoordinates.x}px ${areaCoordinates.y}px`,
    transform: `scale(${areaCoordinates.z})  translate(${offsetGrid.x}px, ${offsetGrid.y}px)`,
  });

  useLayoutEffect(() => {
    const { height, width } = diagramRef.current!.getBoundingClientRect();
    const restOfHeight = height % 100;
    const restOfWidth = width % 100;

    const x =
      restOfWidth !== 100 && restOfWidth !== 0 ? (100 - restOfWidth) * -4.5 : 0;

    const y =
      restOfHeight !== 100 && restOfHeight !== 0
        ? (100 - restOfHeight) * -4.5
        : 0;

    offsetGrid1 = { x, y };
    setOffsetGrid({
      x,
      y,
    });
  }, [windowSize]);

  useEffect(() => {
    test11.update();
    test11.applyTo();
  }, []);

  return (
    <E2EDataAttribute type={E2EAttribute.diagram}>
      <div
        className={cx(classNamesWithTheme[className].name, [])}
        ref={isJestRunning() ? null : diagramRef}
        // {...events}
      >
        {!isCypressRunning() && view.pixelGrid !== false && (
          <div className={classNamesWithTheme.grid}>
            <div className={cx(classNamesWithTheme.background)} id="area2" />
          </div>
        )}
        <div className={cx(classNamesWithTheme.wrapper.name)}>
          <StrategyEditorDraggableConnector />
          <div className={cx(classNamesWithTheme.area)} id="area">
            {filteredConnectors.map((connector, index) => (
              <StrategyEditorConnector
                className={connectorClassName}
                classNames={connectorClassNamesWithTheme}
                connector={connector}
                id={connector.id}
                index={index}
                joinOperator={connector.joinOperator}
                key={connector.id}
                towardsTo={connector.towardsTo}
              />
            ))}
            {filteredBlocks.map((block, index) => (
              <StrategyEditorBlock
                block={block}
                index={index}
                key={block.id}
                ref={diagramRef}
              />
            ))}
          </div>
        </div>
        {/* {!isCypressRunning() && (
          <StrategyEditorDiagramDropArea dragged={dragged} />
        )} */}
      </div>
    </E2EDataAttribute>
  );
};

export default StrategyEditorDiagram;
