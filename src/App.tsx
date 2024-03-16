import { Button } from "./components/ui/button"

function App() {
  return (
    <>
      <div className='flex flex-col items-center text-6xl font-bold'>
        <p>Hello World</p>
        <p>
          <Button>Click me</Button>
        </p>
      </div>
    </>
  )
}

export default App
