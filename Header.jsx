export default function Header() {
  return (
    <header className="bg-purple-700 text-white px-6 py-3 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-purple-700 font-bold">
          R
        </div>
        <h2 className="text-xl font-semibold">Refrens</h2>
      </div>
      <div className="flex items-center space-x-6">
        <i className="fas fa-bell cursor-pointer hover:text-gray-200"></i>
        <i className="fas fa-question-circle cursor-pointer hover:text-gray-200"></i>
        <i className="fas fa-music cursor-pointer hover:text-gray-200"></i>
        <i className="fas fa-user-circle cursor-pointer hover:text-gray-200 text-2xl"></i>
      </div>
    </header>
  );
}
