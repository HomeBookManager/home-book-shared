// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Redirect } from 'react-router-dom';
// import { render } from '@testing-library/react';

// // components
// import ProtectedRoute from './ProtectedRoute';

// // mocks
// import { routerStateMock } from '../../../../tests/mocks/reducer/routerMock';

// // others
// import { TAppRouteData } from '../../types';

// // store
// import { configureStore } from '../../../../store/store';

// // types
// import { RouteName } from '../../constants/routes';

// // utils
// import { history } from '../../../../utils/history';

// const stateMock = {
//   ...routerStateMock,
// };

// const routeData: TAppRouteData = {
//   Component: () => <div>Component</div>,
//   guards: [
//     {
//       guardCheck: () => true,
//       renderFallback: () => <Redirect exact from={'/'} to={'/error'} />,
//       translationKey: '',
//     },
//   ],
//   name: RouteName.test,
// };

// describe('ProtectedRoute snapshots', () => {
//   // mock
//   const store = configureStore(stateMock);

//   it('should allow user on route', () => {
//     // before
//     const { Component, guards, name } = routeData;
//     const { asFragment } = render(
//       <Provider store={store}>
//         <Router>
//           <ProtectedRoute component={Component} guards={guards} name={name} />
//         </Router>
//       </Provider>,
//     );

//     // result
//     expect(asFragment()).toMatchSnapshot();
//   });

//   it('should allow rdner without guards', () => {
//     // before
//     const { Component, name } = routeData;
//     const { asFragment } = render(
//       <Provider store={store}>
//         <Router>
//           <ProtectedRoute component={Component} name={name} />
//         </Router>
//       </Provider>,
//     );

//     // result
//     expect(asFragment()).toMatchSnapshot();
//   });

//   it('should not allow user on route', () => {
//     // mock
//     const store = configureStore(stateMock);

//     // before
//     const { Component, guards, name } = routeData;
//     const { asFragment } = render(
//       <Provider store={store}>
//         <Router>
//           <ProtectedRoute
//             component={Component}
//             guards={[{ ...guards![0], guardCheck: () => false }]}
//             name={name}
//           />
//         </Router>
//       </Provider>,
//     );

//     // result
//     expect(asFragment()).toMatchSnapshot();
//   });
// });
