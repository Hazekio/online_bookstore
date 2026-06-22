<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
<!-- About Us -->
<v-container class="bg-secondary" max-width="100%">
    <v-row>
        <v-col class="text-center">
            <div class="text-display-medium mb-12"> Welcome to The Novel Nook</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Your one stop cozy spot. Your hidden grotto. <br> Step through the door and leave the noise behind. Our Nook is your personal sanctuary - for readers who believe a good book is the best company. Whether you’re chasing a new obsession or revisiting an old favourite, this is the place where stories find you.</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Browse our ever-growing collection, build your wishlist, and keep track of every book that has ever made your heart race or your eyes water. Your library, your pace, your nook. Because every reader deserves a place that just gets them.</div>
        </v-col>
    </v-row>
</v-container>
<!-- Our Bestsellers -->
 <v-container max-width="100%">
    <v-row>
        <v-col md="3">
            <v-card>
                <v-img src="/book1.jpg" cover ></v-img>
                <v-card-title>People We Meet on Vacation</v-card-title>
                <v-card-subtitle>Ksh 1800</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/book2.jpg" cover></v-img>
                <v-card-title>The Thursday Murder Club</v-card-title>
                <v-card-subtitle>Ksh 1500</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/book3.jpg" cover></v-img>
                <v-card-title>The Catcher in the Rye</v-card-title>
                <v-card-subtitle>Ksh 2000</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/book4.jpg" cover></v-img>
                <v-card-title>Project Hail Mary</v-card-title>
                <v-card-subtitle>Ksh 1800</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
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