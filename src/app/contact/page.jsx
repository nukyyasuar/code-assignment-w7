export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-2">
          📞 Contact Information
        </h1>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <p className="font-semibold">Name:</p>
            <p>Nuky Yasuar Zamzamy</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p className="font-semibold">NIM:</p>
            <p>2502073794</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Email:</p>
            <a
              href="mailto:nuky.zamzamy@binus.ac.id"
              className="text-blue-600 hover:underline"
            >
              nuky.zamzamy@binus.ac.id
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
