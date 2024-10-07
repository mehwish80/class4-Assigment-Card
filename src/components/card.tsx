
interface Itcardprop {
  name: string;
  age: number;
  rollno: number;
  className: string;
}

const Card = (cardprop: Itcardprop) => {
  return (
    <div className="border-b-orange-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-green-300 ">
      <h1 className="text-xl font-semibold">Name: {cardprop.name}</h1>
      <h2 className="text-lg">Age: {cardprop.age}</h2>
      <h2 className="text-lg">Roll No: {cardprop.rollno}</h2>
      <h2 className="text-lg">Class: {cardprop.className}</h2>
    </div>
  );
};

export default Card;
  
