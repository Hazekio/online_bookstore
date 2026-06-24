<script setup>
import { useWishlistStore } from '../stores/wishlist'
import { useCartStore } from '../stores/cart'

const user = JSON.parse(localStorage.getItem('user'))
const wishlistStore = useWishlistStore()
const cartStore = useCartStore()
</script>

<template>
  <div class="bg-secondary" style="min-height: 100vh;">
    <v-container class="py-12">

      <!-- Header. the Char thing is pulling the first letter from the first name-->
      <div class="text-center mb-10">
        <v-avatar color="primary" size="96" class="mb-4">
          <span class="text-h4 text-white" style="font-family: Georgia, serif;">
            {{ user.firstname.charAt(0) }}
          </span>
        </v-avatar>
        <div class="text-h4 font-weight-bold mb-1" style="font-family: Georgia, serif;">
          {{ user.firstname }}'s Nook
        </div>
        <div class="text-caption text-grey" style="letter-spacing: 2px; text-transform: uppercase;">
          Reader · Book Collector · Dreamer
        </div>
      </div>

      <!-- number of things in respective pages -->
      <v-row justify="center" class="mb-10">
        <v-col cols="10" md="6">
          <v-card rounded="pill" elevation="2" class="bg-white">
            <v-row no-gutters>
              <v-col class="text-center pa-4 border-e">
                <div class="text-h5 font-weight-bold text-primary">
                  {{ wishlistStore.wishlist.length }}
                </div>
                <div class="text-caption text-grey" style="letter-spacing:1px;">WISHLIST</div>
              </v-col>
              <v-col class="text-center pa-4 border-e">
                <div class="text-h5 font-weight-bold text-primary">
                  {{ cartStore.cart.length }}
                </div>
                <div class="text-caption text-grey" style="letter-spacing:1px;">CART</div>
              </v-col>
              <v-col class="text-center pa-4">
                <div class="text-h5 font-weight-bold text-primary">0</div>
                <div class="text-caption text-grey" style="letter-spacing:1px;">LIBRARY</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Cards -->
      <v-row justify="center">
        <v-col cols="12" md="5">
          <v-card rounded="xl" elevation="1" class="bg-white pa-6 mb-5">
            <div class="text-caption text-primary mb-4" style="letter-spacing:2px; text-transform:uppercase;">
              My Details
            </div>
            <div class="mb-4">
              <div class="text-caption text-grey">Full name</div>
              <div class="text-body-1 font-weight-medium">{{ user.firstname }} {{ user.lastname }}</div>
            </div>
            <div class="mb-4">
              <div class="text-caption text-grey">Email</div>
              <div class="text-body-1 font-weight-medium">{{ user.email }}</div>
            </div>
            <div>
              <div class="text-caption text-grey">Phone</div>
              <div class="text-body-1 font-weight-medium">{{ user.phone }}</div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-card rounded="xl" elevation="1" class="bg-white pa-6 mb-5">
            <div class="text-caption text-primary mb-4" style="letter-spacing:2px; text-transform:uppercase;">
              Reading Identity
            </div>
            <div class="mb-4">
              <div class="text-caption text-grey">Member since</div>
              <div class="text-body-1 font-weight-medium">June 2026</div>
            </div>
            <div class="mb-4">
              <div class="text-caption text-grey">Favourite genre</div>
              <div class="text-body-1 text-grey-darken-1 font-italic">— not set yet</div>
            </div>
            <div>
              <div class="text-caption text-grey">Currently reading</div>
              <div class="text-body-1 text-grey-darken-1 font-italic">— not set yet</div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="10">
          <v-card rounded="xl" elevation="1" class="bg-white pa-6">
            <div class="text-caption text-primary mb-4" style="letter-spacing:2px; text-transform:uppercase;">
              My Reading Bio
            </div>
            <div class="pa-4 rounded-lg bg-secondary" style="border-left: 3px solid rgb(var(--v-theme-primary)); font-style:italic; color:#7a7060; font-family: Georgia, serif; line-height:1.8;">
              "Every reader has a story. Add yours here — your favourite genres, the book that changed you, or simply what you're looking for in your next great read..."
            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>

      <!-- Footer Again -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div allign="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Novel Nook Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p>Contact Us:</p>
                <p>Email: info@novelnook.com</p>
                <p>Phone: +254795164644</p>
            </div>
        </v-col>
    </v-row>
  </v-container>

</template>
