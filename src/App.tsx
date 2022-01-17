import React from 'react';

const Layout = React.lazy(() => import('./containers/Layout'));

function App() {
  return (
    <>
        <React.Suspense fallback={"loading..."}>
            <Layout />
        </React.Suspense>
    </>
  );
}

export default App;
