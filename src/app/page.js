import SimpleForm from "./components/SimpleForm";
import DataDisplay from "./components/DataDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1 className="text-7xl font-bold">Welcome!</h1>
      
      {/* Chat */}
      <div className='outline-black outline rounded-lg p-4 w-full'>
        <DataDisplay />
        <br/>
        <SimpleForm />
      </div>

    </main>
  );
}
