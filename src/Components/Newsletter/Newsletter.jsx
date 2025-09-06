import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="max-w-4xl relative top-16 z-10 h-[300px] mx-auto bg-gradient-to-r from-blue-100 via-white to-orange-100 rounded-2xl shadow-lg p-8 overflow-auto">
      <h2 className="text-2xl font-bold text-center">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 text-center mt-2">
        Get the latest updates and news right in your inbox!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex items-center justify-center gap-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-64 sm:w-80 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-md font-medium text-white bg-gradient-to-r from-pink-400 to-yellow-400 hover:opacity-90 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
