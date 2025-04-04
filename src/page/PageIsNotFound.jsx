function PageIsNotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl text-gray-600">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-4 inline-block rounded bg-amber-600 px-4 py-2 text-white transition hover:bg-amber-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default PageIsNotFound;
