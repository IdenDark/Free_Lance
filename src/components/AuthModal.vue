<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const authTab = ref('login')
const showAuth = defineModel() // if parent controls visibility

// Login fields
const loginEmail = ref('')
const loginPassword = ref('')
const loginRole = ref('client')

// Register fields
const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const registerRole = ref('client')

import { nextTick } from 'vue'

function handleLogin() {
  const success = authStore.login(
    loginEmail.value,
    loginPassword.value,
    loginRole.value
  )
  if (!success) {
    alert('Invalid credentials')
  } else {
    console.log('login succeeded role=', authStore.role)
    showAuth = false
    // give Vue a tick to update reactive state before navigation
    nextTick(() => {
      const dest = {
        client: '/client',
        freelancer: '/freelancer',
        admin: '/admin'
      }[loginRole.value] || '/'
      console.log('navigating to', dest)
      router.push(dest).catch(() => {})
    })
  }
}

function handleRegister() {
  const success = authStore.register(
    registerName.value,
    registerEmail.value,
    registerPassword.value,
    registerRole.value
  )
  if (!success) {
    alert('A user with that email and role already exists')
  } else {
    console.log('registration succeeded role=', authStore.role)
    showAuth = false
    nextTick(() => {
      const dest = {
        client: '/client',
        freelancer: '/freelancer',
        admin: '/admin'
      }[registerRole.value] || '/'
      router.push(dest).catch(() => {})
    })
  }
}
</script>

<template>
  <!-- Completely independent overlay - not affected by any parent elements -->
  <Teleport to="body">
    <div v-if="showAuth" 
         style="
           position: fixed;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           width: 100vw;
           height: 100vh;
           display: flex;
           align-items: center;
           justify-content: center;
           background: rgba(0, 0, 0, 0.7);
           backdrop-filter: blur(10px);
           -webkit-backdrop-filter: blur(10px);
           z-index: 999999;
           margin: 0;
           padding: 16px;
           box-sizing: border-box;
           animation: fadeIn 0.2s ease;
           isolation: isolate;
         ">
      
      <!-- Modal content with guaranteed centering -->
      <div style="
           background: var(--color-bg-card);
           border-radius: var(--radius-2xl);
           box-shadow: var(--shadow-lg), 0 0 0 1px rgba(var(--color-accent-rgb), 0.1);
           width: 100%;
           max-width: 460px;
           padding: var(--space-8);
           border: 1px solid var(--color-border);
           position: relative;
           max-height: 90vh;
           overflow-y: auto;
           margin: 0 auto;
           animation: slideUp 0.3s ease;
           transform: translateY(0);
         ">

        <!-- Close button -->
        <button @click="showAuth = false"
            style="
              position: absolute;
              top: var(--space-4);
              right: var(--space-4);
              background: var(--color-bg-secondary);
              border: 1px solid var(--color-border);
              border-radius: var(--radius-full);
              width: 36px;
              height: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--color-text-secondary);
              cursor: pointer;
              transition: all 0.2s ease;
              font-size: 1.25rem;
              z-index: 10;
              line-height: 1;
              padding: 0;
            "
            @mouseover="
              $event.target.style.backgroundColor = 'var(--color-bg-tertiary)';
              $event.target.style.color = 'var(--color-text-primary)';
              $event.target.style.borderColor = 'var(--color-accent)';
              $event.target.style.transform = 'rotate(90deg)';
            "
            @mouseout="
              $event.target.style.backgroundColor = 'var(--color-bg-secondary)';
              $event.target.style.color = 'var(--color-text-secondary)';
              $event.target.style.borderColor = 'var(--color-border)';
              $event.target.style.transform = 'rotate(0deg)';
            ">
          ✕
        </button>

        <!-- Header -->
        <div style="
          text-align: center; 
          margin-bottom: var(--space-8);
          position: relative;
        ">
          <!-- Background glow effect -->
          <div style="
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 120px;
            background: var(--color-accent-soft);
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.4;
            z-index: 0;
          "></div>
          
          <!-- Logo and title -->
          <div style="
            display: flex; 
            align-items: center; 
            gap: 12px; 
            justify-content: center; 
            margin-bottom: var(--space-4);
            position: relative;
            z-index: 1;
          ">
            <div style="
              width: 52px;
              height: 52px;
              background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
              border-radius: var(--radius-lg);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 8px 16px rgba(var(--color-accent-rgb), 0.3);
            ">
              <span style="font-family: var(--font-heading); font-weight: 800; color: white; font-size: 1.75rem;">F</span>
            </div>
            <span style="font-family: var(--font-heading); font-weight: 700; color: var(--color-text-primary); font-size: 1.75rem;">FreelanceHub</span>
          </div>
          
          <h2 style="
            font-family: var(--font-heading); 
            font-size: var(--text-2xl); 
            font-weight: 700; 
            color: var(--color-text-primary);
            margin-bottom: var(--space-2);
          ">
            Welcome Back
          </h2>
          <p style="
            color: var(--color-text-secondary); 
            font-size: var(--text-sm); 
            margin-top: var(--space-2);
          ">
            Sign in to continue to your account
          </p>
        </div>

        <!-- Tabs -->
        <div style="
          display: flex;
          gap: 24px;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: var(--space-6);
          padding: 0 var(--space-2);
        ">
          <button
            @click="authTab='login'"
            :style="{
              padding: 'var(--space-2) var(--space-4)',
              fontSize: 'var(--text-sm)',
              fontWeight: '600',
              transition: 'all var(--transition-fast)',
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              borderBottom: authTab === 'login' ? '2px solid var(--color-accent)' : '2px solid transparent',
              color: authTab === 'login' ? 'var(--color-accent)' : 'var(--color-text-secondary)',
              marginBottom: '-1px',
              position: 'relative',
              opacity: authTab === 'login' ? 1 : 0.7
            }"
            @mouseover="!authTab === 'login' ? $event.target.style.opacity = '1' : null"
            @mouseout="!authTab === 'login' ? $event.target.style.opacity = '0.7' : null">
            Sign In
          </button>

          <button
            @click="authTab='register'"
            :style="{
              padding: 'var(--space-2) var(--space-4)',
              fontSize: 'var(--text-sm)',
              fontWeight: '600',
              transition: 'all var(--transition-fast)',
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              borderBottom: authTab === 'register' ? '2px solid var(--color-accent)' : '2px solid transparent',
              color: authTab === 'register' ? 'var(--color-accent)' : 'var(--color-text-secondary)',
              marginBottom: '-1px',
              position: 'relative',
              opacity: authTab === 'register' ? 1 : 0.7
            }"
            @mouseover="!authTab === 'register' ? $event.target.style.opacity = '1' : null"
            @mouseout="!authTab === 'register' ? $event.target.style.opacity = '0.7' : null">
            Create Account
          </button>
        </div>

        <!-- ================= LOGIN ================= -->
        <div v-if="authTab==='login'" style="display: flex; flex-direction: column; gap: var(--space-5);">

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Email</label>
            <input v-model="loginEmail" type="email"
                   style="
                     background: var(--color-bg-secondary);
                     border: 1px solid var(--color-border);
                     color: var(--color-text-primary);
                     border-radius: var(--radius-lg);
                     padding: var(--space-3) var(--space-4);
                     width: 100%;
                     font-family: var(--font-primary);
                     font-size: var(--text-sm);
                     transition: all 0.2s ease;
                     outline: none;
                   "
                   @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                   @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'"
                   placeholder="you@company.com" />
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Password</label>
            <input v-model="loginPassword"
                   type="password"
                   style="
                     background: var(--color-bg-secondary);
                     border: 1px solid var(--color-border);
                     color: var(--color-text-primary);
                     border-radius: var(--radius-lg);
                     padding: var(--space-3) var(--space-4);
                     width: 100%;
                     font-family: var(--font-primary);
                     font-size: var(--text-sm);
                     transition: all 0.2s ease;
                     outline: none;
                   "
                   @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                   @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'"
                   placeholder="••••••••" />
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Login As</label>
            <select v-model="loginRole"
                    style="
                      background: var(--color-bg-secondary);
                      border: 1px solid var(--color-border);
                      color: var(--color-text-primary);
                      border-radius: var(--radius-lg);
                      padding: var(--space-3) var(--space-4);
                      width: 100%;
                      font-family: var(--font-primary);
                      font-size: var(--text-sm);
                      transition: all 0.2s ease;
                      outline: none;
                      appearance: none;
                      background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237c8a9c\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E');
                      background-repeat: no-repeat;
                      background-position: right var(--space-3) center;
                      padding-right: var(--space-8);
                    "
                    @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                    @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'">
              <option value="client">Client</option>
              <option value="freelancer">Freelancer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: var(--text-sm);
            margin: var(--space-2) 0;
          ">
            <label style="display: flex; align-items: center; gap: var(--space-2); color: var(--color-text-secondary); cursor: pointer;">
              <input type="checkbox" style="accent-color: var(--color-accent); width: 16px; height: 16px; border-radius: var(--radius-sm);" />
              <span>Remember me</span>
            </label>
            <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 500; transition: color 0.2s ease;"
               @mouseover="$event.target.style.textDecoration = 'underline'"
               @mouseout="$event.target.style.textDecoration = 'none'">
              Forgot password?
            </a>
          </div>

          <button @click="handleLogin"
                  style="
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
                    color: white;
                    font-weight: 700;
                    border-radius: var(--radius-lg);
                    padding: var(--space-3) var(--space-5);
                    font-family: var(--font-heading);
                    font-size: var(--text-base);
                    transition: all 0.2s ease;
                    cursor: pointer;
                    border: none;
                    width: 100%;
                    margin-top: var(--space-2);
                    letter-spacing: 0.3px;
                    box-shadow: 0 4px 12px rgba(var(--color-accent-rgb), 0.3);
                  "
                  @mouseover="
                    $event.target.style.transform = 'translateY(-2px)';
                    $event.target.style.boxShadow = '0 6px 16px rgba(var(--color-accent-rgb), 0.4)';
                  "
                  @mouseout="
                    $event.target.style.transform = 'translateY(0)';
                    $event.target.style.boxShadow = '0 4px 12px rgba(var(--color-accent-rgb), 0.3)';
                  ">
            Sign In →
          </button>

        </div>

        <!-- ================= REGISTER ================= -->
        <div v-if="authTab==='register'" style="display: flex; flex-direction: column; gap: var(--space-5);">

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Full Name</label>
            <input v-model="registerName"
                   type="text"
                   style="
                     background: var(--color-bg-secondary);
                     border: 1px solid var(--color-border);
                     color: var(--color-text-primary);
                     border-radius: var(--radius-lg);
                     padding: var(--space-3) var(--space-4);
                     width: 100%;
                     font-family: var(--font-primary);
                     font-size: var(--text-sm);
                     transition: all 0.2s ease;
                     outline: none;
                   "
                   @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                   @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'"
                   placeholder="John Doe" />
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Email</label>
            <input v-model="registerEmail"
                   type="email"
                   style="
                     background: var(--color-bg-secondary);
                     border: 1px solid var(--color-border);
                     color: var(--color-text-primary);
                     border-radius: var(--radius-lg);
                     padding: var(--space-3) var(--space-4);
                     width: 100%;
                     font-family: var(--font-primary);
                     font-size: var(--text-sm);
                     transition: all 0.2s ease;
                     outline: none;
                   "
                   @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                   @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'"
                   placeholder="you@company.com" />
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Register As</label>
            <select v-model="registerRole"
                    style="
                      background: var(--color-bg-secondary);
                      border: 1px solid var(--color-border);
                      color: var(--color-text-primary);
                      border-radius: var(--radius-lg);
                      padding: var(--space-3) var(--space-4);
                      width: 100%;
                      font-family: var(--font-primary);
                      font-size: var(--text-sm);
                      transition: all 0.2s ease;
                      outline: none;
                      appearance: none;
                      background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237c8a9c\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E');
                      background-repeat: no-repeat;
                      background-position: right var(--space-3) center;
                      padding-right: var(--space-8);
                    "
                    @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                    @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'">
              <option value="client">Client — I want to hire</option>
              <option value="freelancer">Freelancer — I want to work</option>
            </select>
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <label style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary);">Password</label>
            <input v-model="registerPassword"
                   type="password"
                   style="
                     background: var(--color-bg-secondary);
                     border: 1px solid var(--color-border);
                     color: var(--color-text-primary);
                     border-radius: var(--radius-lg);
                     padding: var(--space-3) var(--space-4);
                     width: 100%;
                     font-family: var(--font-primary);
                     font-size: var(--text-sm);
                     transition: all 0.2s ease;
                     outline: none;
                   "
                   @focus="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.boxShadow = '0 0 0 3px var(--color-accent-soft)'"
                   @blur="$event.target.style.borderColor = 'var(--color-border)'; $event.target.style.boxShadow = 'none'"
                   placeholder="••••••••" />
          </div>

          <div style="
            display: flex;
            align-items: center;
            gap: var(--space-2);
            font-size: var(--text-sm);
            color: var(--color-text-secondary);
            margin: var(--space-2) 0;
          ">
            <input type="checkbox" style="accent-color: var(--color-accent); width: 16px; height: 16px; border-radius: var(--radius-sm);" />
            <span>I agree to the <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 500;"
                  @mouseover="$event.target.style.textDecoration = 'underline'"
                  @mouseout="$event.target.style.textDecoration = 'none'">Terms & Conditions</a></span>
          </div>

          <button @click="handleRegister"
                  style="
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
                    color: white;
                    font-weight: 700;
                    border-radius: var(--radius-lg);
                    padding: var(--space-3) var(--space-5);
                    font-family: var(--font-heading);
                    font-size: var(--text-base);
                    transition: all 0.2s ease;
                    cursor: pointer;
                    border: none;
                    width: 100%;
                    margin-top: var(--space-2);
                    letter-spacing: 0.3px;
                    box-shadow: 0 4px 12px rgba(var(--color-accent-rgb), 0.3);
                  "
                  @mouseover="
                    $event.target.style.transform = 'translateY(-2px)';
                    $event.target.style.boxShadow = '0 6px 16px rgba(var(--color-accent-rgb), 0.4)';
                  "
                  @mouseout="
                    $event.target.style.transform = 'translateY(0)';
                    $event.target.style.boxShadow = '0 4px 12px rgba(var(--color-accent-rgb), 0.3)';
                  ">
            Create Account →
          </button>

        </div>

        <!-- Footer -->
        <div style="
          text-align: center;
          margin-top: var(--space-6);
          padding-top: var(--space-4);
          border-top: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: var(--text-sm);
        ">
          <span v-if="authTab==='login'">
            Don't have an account?
            <a href="#" @click.prevent="authTab='register'" 
               style="color: var(--color-accent); text-decoration: none; font-weight: 600; margin-left: var(--space-1); transition: all 0.2s ease;"
               @mouseover="$event.target.style.textDecoration = 'underline'"
               @mouseout="$event.target.style.textDecoration = 'none'">
              Sign up
            </a>
          </span>
          <span v-else>
            Already have an account?
            <a href="#" @click.prevent="authTab='login'" 
               style="color: var(--color-accent); text-decoration: none; font-weight: 600; margin-left: var(--space-1); transition: all 0.2s ease;"
               @mouseover="$event.target.style.textDecoration = 'underline'"
               @mouseout="$event.target.style.textDecoration = 'none'">
              Sign in
            </a>
          </span>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<style>
/* Global animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  div[style*="max-width: 460px"] {
    padding: 24px !important;
    margin: 16px !important;
  }
  
  button[style*="font-family: var(--font-heading)"] {
    padding: 12px 16px !important;
    font-size: 14px !important;
  }
  
  div[style*="gap: 24px"] {
    gap: 16px !important;
  }
  
  div[style*="width: 52px"] {
    width: 44px !important;
    height: 44px !important;
  }
  
  span[style*="font-size: 1.75rem"] {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 360px) {
  div[style*="max-width: 460px"] {
    padding: 16px !important;
  }
  
  h2[style*="font-size: var(--text-2xl)"] {
    font-size: 1.25rem !important;
  }
}

/* Ensure body doesn't interfere */
body.modal-open {
  overflow: hidden;
}
</style>