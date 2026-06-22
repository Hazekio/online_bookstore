<script setup>
import {useCartStore} from '../stores/cart'
const cart = useCartStore().cart
</script>

<template>
    <div style="background-color: #F0FDE3; min-height: 100vh;">
        <v-container>

            <v-row>
                <v-col md="12" class="bg-secondary">
                    <div class="text-display-medium mb-12 mt-12 text-center">
                        Your Orders
                    </div>
                </v-col>
            </v-row>

            <div v-if="cart.length === 0" class="text-center mt-12">
                <v-icon icon="mdi-cart-off" size="64" color="grey"></v-icon>
                <div class="text-h6 mt-4 text-grey">Your cart is empty</div>
                <v-btn color="primary" class="mt-4" to="/books">Browse Books</v-btn>
            </div>

            <v-row v-else>
                <v-col md="12" v-for="item in cart">
                    <v-card color="primary" class="py-3">
                        <v-row>
                            <v-col md="4" class="text-center d-flex align-center justify-center">
                                <v-img :src="item.image" max-width="150" max-height="220" class="ma-4"cover></v-img>
                            </v-col>
                            <v-col md="6" class="text-right">
                                    <v-card-item>
                                        <v-card-title class="mb-4">{{ item.name }}</v-card-title>
                                        <v-card-subtitle>Ksh {{ item.price }}</v-card-subtitle>
                                        <v-card-subtitle>Quantity {{ item.quantity }}</v-card-subtitle>
                                        <v-card-text>Total: Ksh {{ item.price * item.quantity}} </v-card-text>
                                    </v-card-item>
                                    <v-card-actions>
                                        <v-spacer></v-spacer> 
                                        <v-btn elevation="4" variant="elevated"> Checkout </v-btn>
                                    </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
    </div>

    <!-- Footer -->
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

<!-- I removed this conde. was stationed in lines 20-22 to make the images fit full <v-avatar color="grey" rounded="0" size="150" ><v-img :src="item.image"></v-img></v-avatar> -->