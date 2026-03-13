import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth',{
   state: () => {
     // load stored users, seed admin if none
     let users = JSON.parse(localStorage.getItem('users') || '[]')
     if (users.length === 0) {
       users = [
         {
           name: 'Administrator',
           email: 'admin@site.com',
           password: 'admin',
           role: 'admin',
           joined: new Date().toLocaleDateString()
         },
         // sample client and freelancer to populate admin view
         {
           name: 'Client Sample',
           email: 'client@example.com',
           password: 'client',
           role: 'client',
           joined: new Date().toLocaleDateString()
         },
         {
           name: 'Freelancer Sample',
           email: 'freelancer@example.com',
           password: 'freelancer',
           role: 'freelancer',
           joined: new Date().toLocaleDateString()
         }
       ]
       localStorage.setItem('users', JSON.stringify(users))
     }
     return {
       user: null,
       role: null,
       isAuthenticated: false,
       users
     }
   },
   actions: {
     login(email, password, role) {
       // refresh the user list (seeding admin if missing) before checking
       this.loadUsers()

       // simple authentication against locally stored users
       const user = this.users.find(
         u => u.email === email && u.password === password && u.role === role
       )
       if (!user) {
         return false
       }

       this.user = user
       this.role = user.role
       this.isAuthenticated = true

       localStorage.setItem(
         'auth',
         JSON.stringify({
           user: this.user,
           role: this.role,
           isAuthenticated: this.isAuthenticated
         })
       )

       return true
     },


    register(name, email, password, role) {
      // make sure list is up‑to‑date before adding a new user
      this.loadUsers()
      // prevent duplicates by email & role
      if (this.users.find(u => u.email === email && u.role === role)) {
        return false
      }

      const newUser = {
        name,
        email,
        password,
        role,
        joined: new Date().toLocaleDateString()
      }
      this.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(this.users))

      // auto-login after registration
      this.login(email, password, role)
      return true
    },


    logout() {
      this.user = null
      this.role = null
      this.isAuthenticated = false

      localStorage.removeItem('auth')
    },

    loadUser() {
      const stored = localStorage.getItem('auth')
      if (stored) {
        const data = JSON.parse(stored)
        this.user = data.user
        this.role = data.role
        this.isAuthenticated = data.isAuthenticated
      }
    },

    loadUsers() {
      this.users = JSON.parse(localStorage.getItem('users') || '[]')
      // ensure admin exists again if somehow removed
      if (!this.users.find(u => u.role === 'admin')) {
        this.users.unshift({
          name: 'Administrator',
          email: 'admin@site.com',
          password: 'admin',
          role: 'admin',
          joined: new Date().toLocaleDateString()
        })
        localStorage.setItem('users', JSON.stringify(this.users))
      }
        }
  
  }

})
