import Link from 'next/link'
import React from 'react'

export default async function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#overview" className="hover:underline">Overview</Link></li>
            <li><Link href="#stats" className="hover:underline">Stats</Link></li>
            <li><Link href="#settings" className="hover:underline">Settings</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>Welcome to your dashboard. Here you can find an overview of your activities.</p>
        </section>
        <section id="stats" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Stats</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Recent Activity</h3>
            <ul className="list-disc list-inside">
              <li>Activity 1</li>
              <li>Activity 2</li>
              <li>Activity 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Performance</h3>
            <p>Your performance metrics will be displayed here.</p>
          </div>
        </section>
        <section id="settings">
          <h2 className="text-2xl font-semibold mb-2">Settings</h2>
          <p>Manage your account settings and preferences here.</p>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  )
}