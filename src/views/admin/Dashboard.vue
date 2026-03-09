<template>
  <div>
    <h1 class="text-2xl font-bold">Admin Dashboard</h1>
  </div>
<div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-blue-500 text-white p-6 rounded-lg shadow">
    <h3 class="text-lg font-semibold">Total Users</h3>
    <p class="text-3xl font-bold mt-2">1,234</p>
  </div>
  <div class="bg-green-500 text-white p-6 rounded-lg shadow">
    <h3 class="text-lg font-semibold">Revenue</h3>
    <p class="text-3xl font-bold mt-2">$45,200</p>
  </div>
  <div class="bg-purple-500 text-white p-6 rounded-lg shadow">
    <h3 class="text-lg font-semibold">Orders</h3>
    <p class="text-3xl font-bold mt-2">892</p>
  </div>
  <div class="bg-orange-500 text-white p-6 rounded-lg shadow">
    <h3 class="text-lg font-semibold">Growth</h3>
    <p class="text-3xl font-bold mt-2">+23%</p>
  </div>
</div>

<div class="mt-8 bg-white p-6 rounded-lg shadow">
  <h2 class="text-xl font-bold mb-4">Recent Activities</h2>
  <div class="space-y-3">
    <div class="border-l-4 border-blue-500 pl-4">New user registered</div>
    <div class="border-l-4 border-green-500 pl-4">Order #1023 completed</div>
    <div class="border-l-4 border-orange-500 pl-4">Payment received</div>
  </div>
</div>
</template>