import AgeCalculator from './components/AgeCalculator';
import './index.css';

function App() {
  return (
    <>
        <AgeCalculator />

        <footer className='hidden fixed bottom-0 right-2 text-xs opacity-80 sm:inline-block'>
          <p className='m-3'>Challenge by <a className='text-blue-900' href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
            Coded by <a className='text-blue-900' href="https://github.com/frandomitrovic/" target="_blank" rel='noreferrer'>Fran</a>.</p>
        </footer>
    </>
  );
}

export default App;
