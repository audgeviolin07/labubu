export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hello World!
        </h1>
        <p className="text-lg text-gray-600">
          This is a test page to verify deployment is working.
        </p>
        <div className="mt-8 p-4 bg-green-100 rounded-lg">
          <p className="text-green-800">
            ✅ If you can see this, the deployment is successful!
          </p>
        </div>
      </div>
    </div>
  );
}