import Footer from "./components/Footer"
import Form from "./components/Form"

function App() {

  return (
    <div className="bg-orange-600 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold p-2">-- Cadastro de Usuários --</h1>
        <p className="text-xs text-white">Informe logo abaixo os dados para realizar o cadastro do usuário.</p>
      <div className="mt-4 bg-orange-200 py-4 px-5 rounded-lg">
        <Form />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App
