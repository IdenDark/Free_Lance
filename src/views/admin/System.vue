<template>
  <div>
    <h1 class="text-2xl font-bold">Admin Reports</h1>
    <p class="mt-4 text-gray-600">Here you can view various reports and analytics about the system.</p>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">User Growth</h3>
        <!-- Placeholder for user growth chart -->
        <div class="h-48 bg-gray-200 rounded"></div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Revenue Trends</h3>
        <!-- Placeholder for revenue trends chart -->
        <div class="h-48 bg-gray-200 rounded"></div>
      </div>
    </div>

    <div class="mt-8 bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-bold mb-4">Detailed Reports</h2>
      <ul class="list-disc list-inside space-y-2">
        <li><a href="#" class="text-blue-500 hover:underline">Monthly User Signups</a></li>
        <li><a href="#" class="text-blue-500 hover:underline">Top Performing Freelancers</a></li>
        <li><a href="#" class="text-blue-500 hover:underline">Revenue by Category</a></li>
      </ul>
    </div>
  </div>
</template>