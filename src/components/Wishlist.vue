<script setup>
import {useWishlistStore} from '../stores/wishlist'
const wishlistStore = useWishlistStore()
const wishlist = wishlistStore.wishlist
import {useCartStore} from '../stores/cart'
const cartStore = useCartStore()

function addToCart(book) {
    book.quantity = 1
    cartStore.updateCart(book)
}

</script>

<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters class="pa-0" style="min-height: 100vh;">
            <v-col cols="1" class="d-none d-md-block bg-primary"></v-col>

            <v-col cols="12" md="10" class="pa-6 bg-secondary">
                <div class="text-center mt-12 mb-12">
                    <v-icon icon="mdi-heart" size="46" color="red"></v-icon>
                    <div class="text-display-medium mt-2">My Wishlist</div>
                </div>
                <div v-if="wishlist.length === 0" class="text-center mt-12">
                    <v-icon icon="mdi-heart-off-outline" size="64" color="grey"></v-icon>
                    <div class="text-h6 mt-4 text-grey">Your wishlist is empty</div>
                    <v-btn color="primary" class="mt-4" to="/books">Browse Books</v-btn>
                </div>   
               <v-row v-else justify="center">
                    <v-col cols="6" md="3" class="px-3" v-for="(book, index) in wishlist" :key="index">
                        <div class="book-tile">
                            <v-img :src="book.image" aspect-ratio="2/3" cover></v-img>
                            <div class="book-overlay">
                                <div class="text-subtitle-1 font-weight-bold">{{book.name}}</div>
                                <div class="text-body-2 mb-2">Ksh {{book.price}}</div>
                                <div class="text-caption mb-2 book-desc">{{book.long_description}}</div>
                                <div class="d-flex justify-space-between">
                                    <v-btn icon="mdi-delete" variant="text" size="small" @click="wishlistStore.removeFromWishlist(index)"></v-btn>
                                    <v-btn variant="elevated" size="small" @click="addToCart(book)">Add to Cart</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>

            </v-col>

            <v-col cols="1" class="d-none d-md-block bg-primary"></v-col>
        </v-row>
    </v-container>

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


<style scoped>
.book-tile {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
}

.book-overlay {
    position: absolute;
    inset: 0;
    padding: 16px;
    color: white;
    display: flex;
    flex-direction: column;
    background-color: rgba(107, 124, 69, 0.85);
    transform: translateY(100%);
    transition: transform 0.25s ease;
}

.book-desc {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    margin-bottom: 8px;
}

.book-tile:hover .book-overlay {
    transform: translateY(0);
}
</style>

