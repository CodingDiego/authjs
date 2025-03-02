import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-3xl font-bold">Welcome to the HomePage</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="mb-2">We are a company dedicated to providing the best services to our customers.</p>
          <p className="mb-2">Our mission is to deliver high-quality products that bring value to our clients.</p>
          <p>We have a team of experienced professionals who are passionate about their work.</p>
        </section>
        <section id="services" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Service 1</h3>
            <p>Details about service 1.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Service 2</h3>
            <p>Details about service 2.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Service 3</h3>
            <p>Details about service 3.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Service 4</h3>
            <p>Details about service 4.</p>
          </div>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">If you have any questions, feel free to reach out to us.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name:</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email:</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message:</label>
              <textarea id="message" name="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Submit</button>
          </form>
        </section>
      </main>
      <footer className="bg-green-600 text-white p-4 text-center bottom-0">
        <p>&copy; 2023 Your Company</p>
        <p>Follow us on social media:</p>
        <ul className="flex justify-center space-x-4">
          <li><Link href="#facebook" className="hover:underline">Facebook</Link></li>
          <li><Link href="#twitter" className="hover:underline">Twitter</Link></li>
          <li><Link href="#instagram" className="hover:underline">Instagram</Link></li>
        </ul>
      </footer>
    </div>
  );
}
