
<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: 'Sales Report', date: '2024-01-15', status: 'Completed' },
  { id: 2, title: 'User Analytics', date: '2024-01-14', status: 'Pending' },
  { id: 3, title: 'Revenue Summary', date: '2024-01-13', status: 'Completed' }
])
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Reports</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border-collapse border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 p-3 text-left">Title</th>
            <th class="border border-gray-300 p-3 text-left">Date</th>
            <th class="border border-gray-300 p-3 text-left">Status</th>
            <th class="border border-gray-300 p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report.id" class="hover:bg-gray-50">
            <td class="border border-gray-300 p-3">{{ report.title }}</td>
            <td class="border border-gray-300 p-3">{{ report.date }}</td>
            <td class="border border-gray-300 p-3">
              <span :class="report.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'">
                {{ report.status }}
              </span>
            </td>
            <td class="border border-gray-300 p-3">
              <button class="text-blue-600 hover:underline mr-3">View</button>
              <button class="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
