const myImage = "../src/assets/175393721.jpeg"
const App = () => {
  return (
    <div className="w-screen h-[100vh] bg-amber-300 flex gap-1.5">
      <div><img src={myImage} alt="" /></div>
      <div><img src={myImage} alt="" /></div>
      <div><img src={myImage} alt="" /></div>
      <div><img src={myImage} alt="" /></div>
    
    </div>
  )
}

export default App