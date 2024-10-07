
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 bg-fuchsia-400 text-white py-4 rounded-lg shadow-lg text-center">
        Student IT Card
      </h1>
      <div className="flex flex-col space-y-4">
        <Card name="Kanwal" age={20} rollno={45637} className="Monday" />
        <Card name="Uroosa" age={22} rollno={45638} className="Friday" />
        <Card name="Iqra" age={19} rollno={44327} className="Sunday" />
      </div>
    </div>
  );
}

