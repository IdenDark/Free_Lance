<template>
  <div class="users-container">
    <h1>Users Management</h1>
    
    <div class="controls">
      <button @click="addUser" class="btn btn-primary">Add User</button>
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search users..."
        class="search-input"
      />
    </div>

    <table class="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.status }}</td>
          <td>
            <button @click="editUser(user)" class="btn btn-sm btn-edit">Edit</button>
            <button @click="deleteUser(user.id)" class="btn btn-sm btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      searchQuery: '',
      users: []
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    addUser() {
      // Add user logic
    },
    editUser(user) {
      // Edit user logic
    },
    deleteUser(userId) {
      // Delete user logic
    }
  },
  mounted() {
    // Fetch users on component mount
  }
};
</script>

<style scoped>
.users-container {
  padding: 20px;
}

.controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
}

.users-table th,
.users-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.users-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-edit {
  background-color: #28a745;
  color: white;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>