import { Layout } from './layouts/Layout';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';
import { Suggestions } from './components/Suggestions';

import { useState } from 'react';
import { NeilScreen } from './components/NeilScreen';

function App() {
  const [currentView, setCurrentView] = useState('home');

  console.log('Current view:', currentView);

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {currentView === 'home' ? (
        <div className="flex justify-center">
          <div className="w-full max-w-[630px] flex flex-col">
            <Stories />
            <div className="mt-4">
              <Feed />
            </div>
          </div>
          <Suggestions />
        </div>
      ) : (
        <NeilScreen />
      )}
    </Layout>
  );
}

export default App;
