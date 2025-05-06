export default function Loading() {
  return (
    <>
     <div className="h-screen flex justify-center items-center">
        <div className="flex gap-2">
          <div
            className="h-5 w-5 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="h-5 w-5 rounded-full bg-blue-700 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="h-5 w-5 rounded-full bg-blue-900 animate-bounce"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
      </div>
    </>
  );
}
